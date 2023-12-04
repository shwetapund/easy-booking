import { Schema, model } from "mongoose";
const adminSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        unique: true
    },
    mobileNo: {
        type: Number,
        unique: true,
        required: true
    }
},{
    timestamps:true
})

const Admin = model("Admin" , adminSchema)
export default Admin