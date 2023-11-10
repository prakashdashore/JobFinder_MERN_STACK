const jwt = require("jsonwebtoken");
const errorHandler = require("../utils/errorHandler");
const { asyncErrors } = require("./asyncErrors");

exports.isAuthenticated = asyncErrors(async (req,res,next)=>{

    const {token} = req.cookies; 

    if(!token) return next(new errorHandler("Please login before access !!" , 500))

    const {id} = jwt.verify(token , process.env.JWT_SECRATE);

    req.id = id

    next()


})