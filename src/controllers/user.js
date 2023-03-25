import Joi from "joi";
import user from "../model/M_user";
import bcryptjs from "bcryptjs";
const userSchema = Joi.object({
    name: Joi.string(),
    email: Joi.string().email().required().messages({
      "string.base": `"email" phải là kiểu "text"`,
      "string.empty": `"email" không được bỏ trống`,
      "string.email": `"email" phải có định dạng là email`,
      "any.required": `"email" là trường bắt buộc`,
    }),
    password: Joi.string().min(6).required().messages({
      "any.base": `"password" phải là kiểu "text"`,
      "any.empty": `"password" không được bỏ trống`,
      "any.min": `"password" phải chứa ít nhất {#limit} ký tự`,
      "any.required": `"password" là trường bắt buộc`,
  }),
  rePassword: Joi.string().valid(Joi.ref("password")).required().messages({
      "any.base": `"rePassword" phải là kiểu "text"`,
      "any.empty": `"rePassword" không được bỏ trống`,
      "any.only": `"rePassword" phải giống "password"`,
      "any.required": `"rePassword" là trường bắt buộc`,
  }),
});

export const signup = async (req, res) => {
    try {
        const {name, email, password , rePassword} = req.body;
        const {error} = userSchema.validate({
            name,
            email,
            password,
            rePassword
        },
        {abortEarly: false})
        if(error){
            const errors = error.details.map((error) => error.message);
            return res.status(400).json({
                message: errors,
            })
        }
        const checkEmail =  await user.findOne({email});
        if(checkEmail){
            return res.status(404).json({
                message: "Email đã tồn tại",
            })
        }
        const hashedPassword = await bcryptjs.hash(password, 10)
        const acc = await user.create({
            name,
            email,
            password: hashedPassword
        });
        acc.password = undefined
        return res.json({
            message: "Đăng ký thành công",
            data: acc,
        })
    } catch (error) {
        return res.status(404).json({
            message: error,
        })
    }
};