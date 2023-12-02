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

const postLoginApi = async (req,res)=>{
    const {email, password} = req.body;
    try{
    const findUser = await User.findOne({
        email,
        password
    }).select('name email mobileNo gender')
    if(!findUser){
        res.json({
            success:false,
            message:'enter valid email or password'
        })
    }
    const savedUser = await findUser.save();

    res.json({
        success:true,
        data:savedUser,
        message:'successfullt login'
    })
}catch(err){
    res.json({
    success:false,
    message:err.message
})

}
}

export {postSignUpApi, postLoginApi};