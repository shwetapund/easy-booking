import { Schema, model } from "mongoose";

const UserSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    mobileNo:{
        type:Number,
        required:true,
        unique:true
    },
    gender:{
        type:String,
    }

})
const User = model('User',UserSchema);

export default User;
