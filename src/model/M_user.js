import mongoose from "mongoose";

const user = mongoose.Schema({
    name:{
        type:String,   
    },
    email:{
        type:String  
    },
    password:{
        type:String
    },
    rePassword:{
        type:String
    }
    
})

export default mongoose.model('User',user)