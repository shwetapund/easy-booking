import User from "./../models/User.js";

const postSignUpApi = async (req, res) => {
    const { name, email, password, mobileNo, gender } = req.body;

    const signupObj = new User({
        name,
        email,
        password,
        mobileNo,
        gender
    })
    try{
        const savedUser = await signupObj.save();

        res.json({
            success: true,
            data: savedUser,
            message: 'successfully signup'
        })
    }
   catch(e){
    res.json({
        success:false,
        message:e.message
    })
   }
}

const postLoginApi = async (req, res) => {
    const { email, password } = req.body;


    if (!email || !password) {
        return res.json({
            success: false,
            message: "please enter the email and password"
        })
    }
    const findUser = await User.findOne({
        email,
        password
    }).select('name email mobileNo gender')

    if (findUser) {
        return res.json({
            success: true,
            data: findUser,
            message: "login sucessfully"
        })
    } else {
        return res.json({
            success: false,
            message: "invalid creatational"
        })
    }
    //     try{
    //     const findUser = await User.findOne({
    //         email,
    //         password
    //     }).select('name email mobileNo gender')
    //     if(!findUser){
    //         res.json({
    //             success:false,
    //             message:'enter valid email or password'
    //         })
    //     }
    //     const savedUser = await findUser.save();

    //     res.json({
    //         success:true,
    //         data:savedUser,
    //         message:'successfullt login'
    //     })
    // }catch(err){
    //     res.json({
    //     success:false,
    //     message:err.message
    // })

    // }

}

export { postSignUpApi, postLoginApi };