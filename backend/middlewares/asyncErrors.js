exports.asyncErrors = (funkyy)=>(req,res,next)=>{
    Promise.resolve(funkyy(req,res,next)).catch(next)

}