const express = require('express');
const { resume, addEdu, editEdu, deleteEdu, addJob, editJob, deleteJob, addInternship, editInternship, deleteInternships, addPositionOfResponsiblity, editPositionOfResponsiblity, deletePositionOfResponsiblity, addCourse, editCourse, deleteCourse, addProject, editProject, deleteProject, addSkill, editSkill, deleteSkill, addAchievement, ediAchievement, deleteAchievement } = require('../controllers/resume');
const { isAuthenticated } = require("../middlewares/isAuthenticated")

const router = express.Router();



router.get('/',isAuthenticated ,  resume )


//---------------------------EDUCATION---------------------------
router.post('/add-education',isAuthenticated , addEdu)

router.post('/edit-education/:eduid',isAuthenticated , editEdu)

router.post('/delete-education/:eduid',isAuthenticated , deleteEdu)

//----------------------------JOBS--------------------------------
router.post('/add-job',isAuthenticated , addJob)

router.post('/edit-job/:id',isAuthenticated , editJob)

router.post('/delete-job/:id',isAuthenticated ,deleteJob)

//----------------------------INTERNSHIPS--------------------------------

router.post('/add-internship',isAuthenticated ,addInternship)

router.post('/edit-internship/:id',isAuthenticated , editInternship)

router.post('/delete-internship/:id',isAuthenticated , deleteInternships)


//----------------------------positionofresponsiblity--------------------------

router.post('/add-positionofresponsiblity',isAuthenticated , addPositionOfResponsiblity)

router.post('/edit-positionofresponsiblity/:id',isAuthenticated , editPositionOfResponsiblity)

router.post('/delete-positionofresponsiblity/:id',isAuthenticated , deletePositionOfResponsiblity)


//----------------------------courses--------------------------

router.post('/add-course',isAuthenticated , addCourse)

router.post('/edit-course/:id',isAuthenticated , editCourse)

router.post('/delete-course/:id',isAuthenticated , deleteCourse)


//---------------------------PROJECTS--------------------------------------

router.post('/add-project',isAuthenticated , addProject)

router.post('/edit-project/:id',isAuthenticated , editProject)

router.post('/delete-project/:id',isAuthenticated , deleteProject)

//---------------------------SKILLS--------------------------------------

router.post('/add-skill',isAuthenticated , addSkill)

router.post('/edit-skill/:id',isAuthenticated , editSkill)

router.post('/delete-skill/:id',isAuthenticated , deleteSkill)

//---------------------------achievements--------------------------------------

router.post('/add-achievement',isAuthenticated , addAchievement)

router.post('/edit-achievement/:id',isAuthenticated , ediAchievement)

router.post('/delete-achievement/:id',isAuthenticated , deleteAchievement)



module.exports = router;


