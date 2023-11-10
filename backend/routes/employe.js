const { homePage, employeRegister, employeLogin, employeLogout, employe,
    createInternship,
    findInternship,
    findOneInternship,
    createJob,
    findJob,
    findOneJob,
    employeForgetLink,
    employeSendmail,
    employeResatePass,
    employeUpdate,
    employeAddProfile,
    employeDelete


} = require("../controllers/employe");

const express = require("express")
const { isAuthenticated } = require("../middlewares/isAuthenticated");
const router = express.Router()



//   GET / , homepage- route
router.get("/" , homePage)

// POST /employe , profile- route
router.post("/employe" , isAuthenticated ,employe)

//   POST /employe/register , register- route
router.post("/employe/register" , employeRegister)

//   POST /employe/login , login- route
router.post("/employe/login" , employeLogin)

//   GET /employe/logout , logout- route
router.get("/employe/logout" , employeLogout) 

router.post('/employe/send-mail' , employeSendmail)

router.post('/employe/forget' , employeForgetLink)

router.post('/employe/resate/password' ,isAuthenticated,employeResatePass )

router.post('/employe/update/:id' ,isAuthenticated,employeUpdate )

router.post('/employe/profile/:id' ,isAuthenticated, employeAddProfile)

router.get('/employe/delete' ,isAuthenticated, employeDelete )

// ---------------------------------internship----------------------------------

// POST  employe/internship/create , create internship- route
router.post("/employe/internship/create" , isAuthenticated ,createInternship)

// POST employe/internship/find , read internship- route
router.post("/employe/internships/find" , isAuthenticated ,findInternship)

// POST employe/internship/findone/:id , findOne internship- route
router.post("/employe/internship/findone/:id" , isAuthenticated, findOneInternship)


// ---------------------------------jobs----------------------------------

// POST  employe/job/create , create job- route
router.post("/employe/job/create" , isAuthenticated ,createJob)

// POST employe/job/find , read job- route
router.post("/employe/job/find" , isAuthenticated ,findJob)

// POST employe/job/findone/:id , findOne job- route
router.post("/employe/job/findone/:id" , isAuthenticated, findOneJob)

module.exports = router; 

