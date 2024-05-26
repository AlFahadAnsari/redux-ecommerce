import mongoose from "mongoose"

let MySchema = mongoose.Schema({
    fullname:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type: String,
        require: true,  
    }
})

let User=mongoose.model('User',MySchema)

export default User
