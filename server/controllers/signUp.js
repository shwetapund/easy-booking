import User from "./../models/User.js";

const postSignUpApi = async (req,res)=>{
    const {name, email, password, mobileNo, gender} =req.body;

    const signupObj = new User({
        name, 
        email, 
        password,
         mobileNo,
          gender
    })
    const savedUser = await signupObj.save();

    res.json({
        success:true,
        data:savedUser,
        message:'successfully signup'
    })
}

export {postSignUpApi};