const { asyncErrors } = require("../middlewares/asyncErrors");
const errorHandler = require("../utils/errorHandler");
const { sendMail } = require("../utils/nodemailer");
const { sendJwt } = require("../utils/sendJwt");
const path = require('path')
const { profileUploader } = require("../utils/profileUploader");
const Student = require("../models/students");
const Internship = require("../models/internships");
const Job = require("../models/jobs");
const imageKit = profileUploader() 




exports.homePage = asyncErrors(async (req,res)=>{

    res.status(200).json({success : true , message:"this is home page "})

})

exports.findStudent = asyncErrors(async (req,res,next)=>{
    const student = await Student.findById(req.id)
    res.status(200).json({success : true , student})

})

exports.studentRegister = asyncErrors(async (req,res)=>{

    const student = await new Student(req.body).save()
    sendJwt(student , 201 , res)

    // res.send("studentRegistered !!")

});


exports.studentLogin = asyncErrors(async (req,res,next)=>{

    const student =  await Student.findOne({email:req.body.email}).select("+password").exec()

    if(!student) return next(new errorHandler("user not exists" , 404))

    let passChek = student.comparepassword(req.body.password)
    console.log("passChek" , passChek)
    if(!passChek) return next(new errorHandler("innvalid email or password" , 500))

    sendJwt(student , 201 , res)

    // res.send("login succes")
    
})

exports.studentLogout = asyncErrors(async (req,res)=>{
    res.clearCookie("token")
    res.json({
        message:"Successfuly Logged Out !!"
    });
    
})

exports.student = asyncErrors(async (req,res)=>{
    // console.log(req.id)
    const student = await Student.findById(req.id)
    .populate("jobs")
    .populate("internships")

    res.status(200).json({
        seccess:true,
        student
        
    });

});

exports.studentSendmail = asyncErrors(async (req,res,next)=>{

    const student = await Student.findOne({email:req.body.email}).exec();

    if(!student) return next(new errorHandler("user not exists with this email" , 404))

    // const url = `${req.protocol}://${req.get("host")}/student/forget/${student._id}`

    const otp = Math.floor(Math.random() * 899999 + 100000)
    sendMail(req,res,next,otp );
    student.otp = `${otp}`
    await student.save()
    // res.json({student, otp})



    

});

exports.sudentForgetLink = asyncErrors(async (req,res , next )=>{

    const student = await Student.findOne({email:req.body.email}).exec()
    if(!student) return next(new errorHandler("user not exists" , 404))

    if(student.otp===req.body.otp){
        student.otp= '0'
        student.password = req.body.password

    }else{
        return next(new errorHandler("This link is expired, please try again !!"))
    }

    await student.save()
    // res.status(200).json({success : true , 
    // message:"Password changed Successfuly !!"})

})






exports.sudentResatePass = asyncErrors(async (req,res,next)=>{
    
    const student = await Student.findById(req.id).exec()
    // const validetePass = await student.comparepassword(req.body.oldpassword)
    // console.log("passChek Huaa" , validetePass)
      
    // if(!validetePass) return next(new errorHandler("innvalid email or password" , 500))
    student.password = req.body.password
    await student.save()
    sendJwt(student , 201 , res)

    // res.status(200).json({success : true})

})

exports.sudentUpdate = asyncErrors(async (req,res,next)=>{
    
    const student = await Student.findByIdAndUpdate(req.id , req.body).exec()

    res.status(200).json({success : true , message:'sudent updated !!' ,  student})

})

exports.sudentAddProfile = asyncErrors(async (req,res,next)=>{

    const std = await Student.findById(req.params.id);

    let file = req.files.profile;
    let modifiedFile = `internshala-by-prashhh${Date.now()}${path.extname(file.name)}`

    // if(std &&  std.profile.fileId){
    //     await imageKit.deleteFile(std.profile.fileId)
    // }

    const {fileId , url} = await imageKit.upload({
        file:file.data,
        fileName : modifiedFile
    })

    std.profile = {
        fileId,
        url
    }
    await std.save()
    res.status(200).json({success:true,message:"profile added !!"})

})

// -----------------------APPLY FOR INTERNSHIP-----------------------//

exports.applyForInternship = asyncErrors(async (req,res,next)=>{

    const student = await Student.findById(req.id).exec();
    const internship = await Internship.findById(req.params.id).exec();

    student.internships.push(internship._id);
    internship.students.push(student._id);
    internship.application.push(student._id);
    student.application.push(internship._id);

    await student.save();
    await internship.save();

    res.status(200).json({success:true , message:"applied for internship !!"})

})

// -----------------------APPLY FOR JOB-----------------------//

exports.applyForJob = asyncErrors(async (req,res,next)=>{

    const student = await Student.findById(req.id).exec();
    const job = await Job.findById(req.params.id).exec();
    
    student.jobs.push(job._id);
    job.students.push(student._id);
    job.application.push(student._id);
    student.application.push(job._id);

    await student.save();
    await job.save();

    res.status(200).json({success:true , message:"applied for job !!"})

})


exports.finAllJobs = asyncErrors(async (req,res,next)=>{

    const jobs = await Job.find()
    .populate({
        path:"students",

    })
    .populate("employes")
    .exec()

    res.status(200).json({success:true , jobs})
})
exports.finAllIntermships = asyncErrors(async (req,res,next)=>{

    const internships = await Internship.find()
    .populate({path:"students" , select:"firstname lastname email "})
    .populate({path:"employes" , select:"firstname lastname email"})
    .exec()

    res.status(200).json({success:true , internships})

})

