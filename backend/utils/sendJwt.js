exports.sendJwt = (student , statusCode , res)=>{

    const token = student.getjwt();

    const options = {
        exipres:new Date(
            Date.now() + process.env.COOKIE_EXPIRE + 24*60*60*1000
        ),
        httpOnly : true
    };

    
    res.status(statusCode).cookie(
        "token",
        token,
        options
    ).json({
        success:true,
        id:student._id,
        token
    });

}