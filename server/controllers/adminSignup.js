import Admin from './../models/Admin.js'

const postAdminApi = async (req,res)=>{
const {name,email,mobileNo,password} = req.body

const adminSignup = new Admin({
    name,email,mobileNo,password
})
try{
const savedAdmin = await adminSignup.save();
res.json({
    success:true,
    data:savedAdmin,
    message:"admin sign up data saved successfully"
})


}catch(e){
res.json({
    success:false,
    message:e.message
})
}
}

// login for admin

const postAdminLoginApi = async (req,res) =>{
const {email,password} = req.body
if(!email || !password){
   return res.json({
        success:false,
        message:"please enter the email and password"
    })
}

const findAdmin = await Admin.findOne({
    email:email,
    password:password
}).select("name email ,mobileNo")

if(findAdmin){
    res.json({
        success:true,
        data:findAdmin,
        message:"login succesfully"
    })
}
else{
    res.json({
        success:false,
        message:"invalid creatatial"
    })
}
}

export {postAdminApi,postAdminLoginApi}