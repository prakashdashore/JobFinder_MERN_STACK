const {
     homePage, studentRegister, studentLogin, studentLogout, studentSendmail, student, sudentForgetLink, sudentResatePass, sudentUpdate, sudentAddProfile, applyForInternship, applyForJob, finAllJobs, finAllIntermships,
    

    } = require("../controllers")
const express = require("express")
const { isAuthenticated } = require("../middlewares/isAuthenticated")
const router = express.Router()

router.get('/homepage' ,homePage)

router.post('/student' ,isAuthenticated, student)

router.post('/student/register' ,studentRegister)

router.post('/student/login',studentLogin)

router.get('/student/logout',studentLogout)

router.post('/student/send-mail', studentSendmail)

router.post('/student/forget' , sudentForgetLink)

router.post('/student/resate/password' ,isAuthenticated, sudentResatePass)

router.post('/student/update/:id' ,isAuthenticated, sudentUpdate)

router.post('/student/profile/:id' ,isAuthenticated, sudentAddProfile)

//-----------------------APPLY FOR INTERNSHIP-----------------------//
router.post('/student/apply/internship/:id' ,isAuthenticated, applyForInternship)

// -----------------------APPLY FOR JOB-----------------------//
router.post('/student/apply/job/:id' ,isAuthenticated, applyForJob)

// FINd---------------------------------
router.post('/student/find/alljobs' ,isAuthenticated,finAllJobs )

router.post('/student/find/allinternships' ,isAuthenticated,finAllIntermships )














module.exports = router