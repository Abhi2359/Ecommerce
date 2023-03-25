// Creating Token and saving in cookie

const sendToken = (user,statusCode,res)=>{
    const token = user.getJWTToken();

    // Options for Cookies

    const options = {
        expires:new Date(Date.now() + process.env.COOKIE_EXPIRE*24*60*60*1000),
       
        httpOnly:true,
        secure:true
    };
    res.status(statusCode).cookie("token",options,token).json({
        success:true,
        user,
        token,
    })
}

module.exports = sendToken;