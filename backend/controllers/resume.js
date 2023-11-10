const e = require("express");
const { asyncErrors } = require("../middlewares/asyncErrors");
const Student = require("../models/students");
const { v4: uuidv4 } = require("uuid");
// uuidv4();

exports.resume = asyncErrors(async (req, res) => {
  const { resume } = await Student.findById(req.id).exec();
  res
    .status(200)
    .json({ success: true, message: "this is resume page ", resume });
});

//-------------------------EDUCATION-------------------------
// status
// year
// board
// performance
// school
exports.addEdu = asyncErrors(async (req, res) => {
  const student = await Student.findById(req.id).exec();
  student.resume.education.push({ ...req.body, id: uuidv4() });
  await student.save();
  res
    .status(200)
    .json({ success: true, message: "education adedd !! " });
});

exports.editEdu = asyncErrors(async (req, res) => {
  const student = await Student.findById(req.id).exec();
  const eduIdx = student.resume.education.findIndex(
    (edu) => edu.id === req.params.eduid
  );
  student.resume.education[eduIdx] = { ...req.body, id: req.params.eduid };
  await student.save();

  res
    .status(200)
    .json({ success: true, message: "education updated !! ", student });
});

exports.deleteEdu = asyncErrors(async (req, res) => {
  const student = await Student.findById(req.id).exec();
  const filteredEdu = student.resume.education.filter(
    (edu) => edu.id !== req.params.eduid
  );
  student.resume.education = filteredEdu;
  await student.save();

  res
    .status(200)
    .json({ success: true, message: "education Deleted  !! ", student });
});


//-------------------------JOBS-------------------------
// profile
// organisation
// location
// start-date

// end-date
// description

exports.addJob = asyncErrors(async (req, res) => {
  const student = await Student.findById(req.id).exec();
  student.resume.jobs.push({ ...req.body, id: uuidv4() });
  await student.save();
  res
    .status(200)
    .json({ success: true, message: "Job added successfuly !! ", student });
});

exports.editJob = asyncErrors(async (req, res) => {
  const student = await Student.findById(req.id).exec();
  const idx = student.resume.education.findIndex((e) => e.id === req.params.id);
  student.resume.jobs[idx] = { ...req.body, id: req.params.id };
  await student.save();

  res.status(200).json({ success: true, message: "Job  updated !! ", student });
});

exports.deleteJob = asyncErrors(async (req, res) => {
  const student = await Student.findById(req.id).exec();
  const filtered = student.resume.jobs.filter(
    (e) => e.id !== req.params.id
  );
  student.resume.jobs = filtered;
  await student.save();

  res
    .status(200)
    .json({ success: true, message: "job Deleted  !! ", student });
});



//-------------------------INTERNSHIPS-------------------------
// profile
// organisation
// location
// start-date

// end-date
// description

exports.addInternship = asyncErrors(async (req, res) => {
  const student = await Student.findById(req.id).exec();
  student.resume.internships.push({ ...req.body, id: uuidv4() });
  await student.save();
  res
    .status(200)
    .json({ success: true, message: "internship added successfuly !! ", student });
});

exports.editInternship = asyncErrors(async (req, res) => {
  const student = await Student.findById(req.id).exec();
  const idx = student.resume.internships.findIndex((e) => e.id === req.params.id);
  student.resume.internships[idx] = { ...req.body, id: req.params.id };
  await student.save();

  res.status(200).json({ success: true, message: "internship  updated !! ", student });
});

exports.deleteInternships = asyncErrors(async (req, res) => {
  const student = await Student.findById(req.id).exec();
  const filtered = student.resume.internships.filter(
    (e) => e.id !== req.params.id
  );
  student.resume.internships = filtered;
  await student.save();

  res
    .status(200)
    .json({ success: true, message: "internship Deleted  !! ", student });
});



//-------------------------positionofresponsiblity-------------------------
exports.addPositionOfResponsiblity = asyncErrors(async (req, res) => {
  const student = await Student.findById(req.id).exec();
  student.resume.positionofresponsiblity.push({ ...req.body, id: uuidv4() });
  await student.save();
  res
    .status(200)
    .json({ success: true, message: "positionofresponsiblity added successfuly !! ", student });
});


exports.editPositionOfResponsiblity = asyncErrors(async (req, res) => {
  const student = await Student.findById(req.id).exec();
  const idx = student.resume.positionofresponsiblity.findIndex((e) => e.id === req.params.id);
  student.resume.positionofresponsiblity[idx] = { ...req.body, id: req.params.id };
  await student.save();

  res.status(200).json({ success: true, message: "positionofresponsiblity  updated !! ", student });
});


exports.deletePositionOfResponsiblity = asyncErrors(async (req, res) => {
  const student = await Student.findById(req.id).exec();
  const filtered = student.resume.positionofresponsiblity.filter(
    (e) => e.id !== req.params.id
  );
  student.resume.positionofresponsiblity = filtered;
  await student.save();

  res
    .status(200)
    .json({ success: true, message: "positionofresponsiblity Deleted  !! ", student });
});



//-------------------------courses-------------------------

// title
// organisation
// location
// start
// end
// description


exports.addCourse = asyncErrors(async (req, res) => {
  const student = await Student.findById(req.id).exec();
  student.resume.courses.push({ ...req.body, id: uuidv4() });
  await student.save();
  res
    .status(200)
    .json({ success: true, message: "courses added successfuly !! ", student });
});

exports.editCourse = asyncErrors(async (req, res) => {
  const student = await Student.findById(req.id).exec();
  const idx = student.resume.courses.findIndex((e) => e.id === req.params.id);
  student.resume.courses[idx] = { ...req.body, id: req.params.id };
  await student.save();

  res.status(200).json({ success: true, message: "courses  updated !! ", student });
});

exports.deleteCourse = asyncErrors(async (req, res) => {
  const student = await Student.findById(req.id).exec();
  const filtered = student.resume.courses.filter(
    (e) => e.id !== req.params.id
  );
  student.resume.courses = filtered;
  await student.save();

  res
    .status(200)
    .json({ success: true, message: "courses Deleted  !! ", student });
});


//--------------------PROJECTS-----------------------------

// TITLE
// START
// END
// DESCREPTION
// LINK


exports.addProject = asyncErrors(async (req, res) => {
  const student = await Student.findById(req.id).exec();
  student.resume.projects.push({ ...req.body, id: uuidv4() });
  await student.save();
  res
    .status(200)
    .json({ success: true, message: "project added successfuly !! ", student });
});

exports.editProject = asyncErrors(async (req, res) => {
  const student = await Student.findById(req.id).exec();
  const idx = student.resume.projects.findIndex((e) => e.id === req.params.id);
  student.resume.projects[idx] = { ...req.body, id: req.params.id };
  await student.save();

  res.status(200).json({ success: true, message: "project  updated !! ", student });
});

exports.deleteProject = asyncErrors(async (req, res) => {
  const student = await Student.findById(req.id).exec();
  const filtered = student.resume.projects.filter(
    (e) => e.id !== req.params.id
  );
  student.resume.projects = filtered;
  await student.save();

  res
    .status(200)
    .json({ success: true, message: "project Deleted  !! ", student });
});




//------------------------------SKILLS---------------------------------------

//skill

exports.addSkill = asyncErrors(async (req, res) => {
  const student = await Student.findById(req.id).exec();
  student.resume.skills.push({ ...req.body, id: uuidv4() });
  await student.save();
  res
    .status(200)
    .json({ success: true, message: "skill added successfuly !! ", student });
});

exports.editSkill = asyncErrors(async (req, res) => {
  const student = await Student.findById(req.id).exec();
  const idx = student.resume.skills.findIndex((e) => e.id === req.params.id);
  student.resume.skills[idx] = { ...req.body, id: req.params.id };
  await student.save();

  res.status(200).json({ success: true, message: "skill  updated !! ", student });
});

exports.deleteSkill = asyncErrors(async (req, res) => {
  const student = await Student.findById(req.id).exec();
  const filtered = student.resume.skills.filter(
    (e) => e.id !== req.params.id
  );
  student.resume.skills = filtered;
  await student.save();

  res
    .status(200)
    .json({ success: true, message: "skill Deleted  !! ", student });
});



//------------------------------achievements---------------------------------------

//achievement

exports.addAchievement = asyncErrors(async (req, res) => {
  const student = await Student.findById(req.id).exec();
  student.resume.achievements.push({ ...req.body, id: uuidv4() });
  await student.save();
  res
    .status(200)
    .json({ success: true, message: "achievement added successfuly !! ", student });
});

exports.ediAchievement = asyncErrors(async (req, res) => {
  const student = await Student.findById(req.id).exec();
  const idx = student.resume.achievements.findIndex((e) => e.id === req.params.id);
  student.resume.achievements[idx] = { ...req.body, id: req.params.id };
  await student.save();

  res.status(200).json({ success: true, message: "achievement  updated !! ", student });
});

exports.deleteAchievement = asyncErrors(async (req, res) => {
  const student = await Student.findById(req.id).exec();
  const filtered = student.resume.achievements.filter(
    (e) => e.id !== req.params.id
  );
  student.resume.achievements = filtered;
  await student.save();

  res
    .status(200)
    .json({ success: true, message: "achievement Deleted  !! ", student });
});


