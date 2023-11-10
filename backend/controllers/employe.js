const { asyncErrors } = require("../middlewares/asyncErrors");
const errorHandler = require("../utils/errorHandler");
const { sendMail } = require("../utils/nodemailer");
const { sendJwt } = require("../utils/sendJwt");
const path = require('path')
const { profileUploader } = require("../utils/profileUploader");
const Employee = require("../models/employees");
const Internship = require("../models/internships");
const Job = require("../models/jobs");
const imageKit = profileUploader() 




exports.homePage = asyncErrors(async (req,res)=>{

    res.status(200).json({success : true , message:"this is employes home page "})

})

// exports.findStudent = asyncErrors(async (req,res,next)=>{
    
//     const student = await Student.findById(req.id)

//     res.status(200).json({success : true , student})

// })



exports.employe = asyncErrors(async (req,res)=>{
    console.log(req.id)
    const user = await Employee.findById(req.id)
    .populate("jobs")
    .populate("internships");

    res.status(200).json({
        seccess:true,
        user

    });

});

exports.employeRegister = asyncErrors(async (req,res)=>{

    const employe = await new Employee(req.body).save()

    sendJwt(employe , 201 , res)

    // res.send("Employe Registered !!" , employe)




})



exports.employeLogin = asyncErrors(async (req,res,next)=>{

    const student =  await Employee.findOne({email:req.body.email}).select("+password").exec()

    if(!student) return next(new errorHandler("user not exists" , 404))

    let passChek = student.comparepassword(req.body.password)
    console.log("passChek" , passChek)
    if(!passChek) return next(new errorHandler("innvalid email or password" , 500))

    sendJwt(student , 201 , res)

    // res.send("login succes")
    
});

exports.employeLogout = asyncErrors(async (req,res)=>{
    res.clearCookie("token")
    res.json({
        message:"Successfuly Logged Out !!"
    });  
});

exports.employeSendmail = asyncErrors(async (req,res)=>{
    const employe = await Employee.findOne({email:req.body.email}).exec();

    if(!employe) return next(new errorHandler("user not exists with this email" , 404))
    // const url = `${req.protocol}://${req.get("host")}/student/forget/${student._id}`
    const otp = Math.floor(Math.random() * 899999 + 100000)
    sendMail(req,res,next,otp );
    employe.otp = `${otp}`
    await employe.save()
    // res.json({student, otp})
   
});



exports.employeForgetLink = asyncErrors(async (req,res , next )=>{

    const employe = await Employee.findOne({email:req.body.email}).exec()
    if(!employe) return next(new errorHandler("user not exists" , 404))

    if(employe.otp===req.body.otp){
        employe.otp= '0'
        employe.password = req.body.password

    }else{
        return next(new errorHandler("This link is expired, please try again !!"))
    }
    await employe.save()
    // res.status(200).json({success : true , 
    // message:"Password changed Successfuly !!"})

})

exports.employeResatePass = asyncErrors(async (req,res,next)=>{
    
    const employe = await Employee.findById(req.id).exec()
    // const validetePass = await employe.comparepassword(req.body.oldpassword)
    // console.log("passChek Huaa" , validetePass)
      
    // if(!validetePass) return next(new errorHandler("innvalid email or password" , 500))
    employe.password = req.body.password
    await employe.save()
    sendJwt(employe , 201 , res)

    // res.status(200).json({success : true})

})


exports.employeUpdate = asyncErrors(async (req,res,next)=>{
    
    const employe = await Employee.findByIdAndUpdate(req.id , req.body).exec()

    res.status(200).json({success : true , message:'sudent updated !!' ,  employe})

})

exports.employeAddProfile = asyncErrors(async (req,res,next)=>{

    const employe = await Employee.findById(req.params.id);

    let file = req.files.organistionlogo;
    let modifiedFile = `internshala-by-prashhh${Date.now()}${path.extname(file.name)}`

    // if(employe &&  employe.organistionlogo.fileId){
    //     await imageKit.deleteFile(employe.organistionlogo.fileId)
    // }

    const {fileId , url} = await imageKit.upload({
        file:file.data,
        fileName : modifiedFile
    })

    employe.organistionlogo = {
        fileId,
        url
    }
    await employe.save()
    res.status(200).json({success:true,message:"organistionlogo added !!"})

})

exports.employeDelete = asyncErrors(async (req,res,next)=>{
     await Employee.findByIdAndDelete(req.id).exec()
     res.clearCookie("token")

})











// ----------------------Internships----------------------


exports.createInternship = asyncErrors(async (req,res)=>{
    const employe = await Employee.findById(req.id).exec()
    const internship = await new Internship(req.body)
    internship.employes.push( employe._id)
    employe.internships.push(internship._id)
    await internship.save()
    await employe.save()

    res.status(200).json({
        seccess:true,
        message:"job created !!",
        internship

    });

});





exports.findInternship = asyncErrors(async (req,res)=>{

    const {internships} = await Employee.findById(req.id).populate("internships").exec()
   
    res.status(200).json({
        seccess:true,
        message:" All internships are there !!",
        internships

    });

});


exports.findOneInternship = asyncErrors(async (req,res)=>{

    const internship = await Internship.findById(req.params.id).exec()

    
    res.status(200).json({
        seccess:true,
        message:" One internship is there !!",
        internship

    });

});


// ----------------------JOBS------------------------------------


exports.createJob = asyncErrors( async (req,res)=>{
    const employe = await Employee.findById(req.id).exec()
    const job = await new Job(req.body)
    job.employes.push(employe._id)
    employe.jobs.push(job._id)
    await job.save()
    await employe.save()

    res.status(200).json({
        seccess:true,
        message:"job created !!",
        job

    });

});


exports.findJob = asyncErrors(async (req,res)=>{

    const {jobs} = await Employee.findById(req.id).populate("jobs").exec()
   
    res.status(200).json({
        seccess:true,
        message:" All jobs are there !!",
        jobs

    });

});


exports.findOneJob = asyncErrors(async (req,res)=>{

    const job = await Job.findById(req.params.id).exec()

    
    res.status(200).json({
        seccess:true,
        message:" One job is there !!",
        job

    });

});



















// exports.studentSendmail = asyncErrors(async (req,res,next)=>{

//     const student = await Student.findOne({email:req.body.email}).exec();

//     if(!student) return next(new errorHandler("user not exists" , 404))

//     const url = `${req.protocol}://${req.get("host")}/student/forget/${student._id}`
//     sendMail(req,res,next , url );
//     student.flag = true
//     await student.save()

//     res.json({student, url})



    

// });

// exports.sudentForgetLink = asyncErrors(async (req,res , next )=>{

//     const student = await Student.findById(req.params.id).exec()
//     if(!student) return next(new errorHandler("user not exists" , 404))

//     if(student.flag===true){
//         student.flag= false;
//         student.password = req.body.password

//     }else{
//         return next(new errorHandler("This link is expired, please try again !!"))
//     }

//     await student.save()
//     res.status(200).json({success : true , 
//     message:"Password changed Successfuly !!"})

// })






// exports.sudentResatePass = asyncErrors(async (req,res,next)=>{
    
//     const student = await Student.findById(req.id).select("+password").exec()

//     student.password = req.body.password
//     await student.save()

//     sendJwt(student , 201 , res)

//     // res.status(200).json({success : true , student})

// })

// exports.sudentUpdate = asyncErrors(async (req,res,next)=>{
    
//     const student = await Student.findByIdAndUpdate(req.id , req.body).exec()

//     res.status(200).json({success : true , message:'sudent updated !!' ,  student})

// })


// exports.sudentAddProfile = asyncErrors(async (req,res,next)=>{

//     const std = await Student.findById(req.params.id);

//     let file = req.files.profile;
//     let modifiedFile = `internshala-by-prashhh${Date.now()}${path.extname(file.name)}`

//     // if(std.profile.fileId){
//     //     await imageKit.deleteFile(std.profile.fileId)
//     // }

//     const {fileId , url} = await imageKit.upload({
//         file:file.data,
//         fileName : modifiedFile
//     })

//     std.profile = {
//         fileId,
//         url
//     }
//     await std.save()
//     res.status(200).json({success:true,message:"profile added !!"})

// })

