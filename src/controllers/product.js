import dotenv from "dotenv";
dotenv.config();
import Joi from "joi";
import Product from "../model/M_product.js";


const productsSchema  = Joi.object({
  name: Joi.string().required().min(6),
  price: Joi.number().required(),
}) 


export const getAll = async (req, res) => {
    try {
      const products = await Product.find()
      if(!products){
        return res.status(404).json({
          message: "Khong co san pham nao"
        })
      }
      return res.json({
        products: products
      })
    } catch (error) {
      return res.status(404).json({
        message: error
      })
    }
}

export const getDetail = async (req, res) => {
  try {
    const product = await Product.find({_id: req.params.id})
    if(!product){
      return res.status(404).json({
        message: "Khong co san pham nao"
      })
    }
    return res.json({
      product: product
    })
  } catch (error) {
    return res.status(404).json({
      message: error
    })
  }


}
export const add = async (req, res) => {
        try {
          const  {error} = productsSchema.validate(req.body)
          if(error){
          return res.status(404).json({
              tinnhan: error.details[0].message
          })
          }
          const product = await Product.create(req.body)
          if(!product){
              return res.json({
                  message: "Không thêm sản phẩm"
              })
          }
          return res.json({
              message: "Thêm sản phẩm thành công",
              data: product
          })  
      } catch (error) {
          return res.status(404).json({
              message: error
          })
      }

  }

export const remove = async (req, res) => {
  try {
    const {error} = productsSchema.validate(req.body)
    if(error) {
      return res.status(404).json({
        message: error.details[0].message
      })
    }
    const product = await Product.findByIdAndDelete(req.params.id)
    if(!product){
      return res.json({
        message: "Khong tim thay san pham"
      })
    }
    return res.json({
      message: "Xoa san pham thanh cong"
    })
    
  } catch (error) {
    return res.status(404).json({
      message: error
    })
  }

}
export const update = async (req, res) => {
  try {
       
    const product = await Product.findByIdAndUpdate(req.params.id,req.body)
    if(!product){
        return res.json({
            message: "Không tìm thấy sản phẩm"
        })
    }
    return res.json({
        message: "Sửa sản phẩm thành công",
    })
} catch (error) {
    return res.status(404).json({
        message: error
    })
}
}
