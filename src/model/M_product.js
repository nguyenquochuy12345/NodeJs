import mongoose from "mongoose";


const product =  new mongoose.Schema({
    name: { type: String, maxLength: 255, require: true },
    price: { type: Number, require: true }
});



export default mongoose.model('Product', product);