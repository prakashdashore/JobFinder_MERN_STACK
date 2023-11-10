const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");



const studentModel = new mongoose.Schema(
  {
    application: [{ type: mongoose.Schema.Types.ObjectId, ref: "applications" }],

    firstname: {
      type: String,
      required: [true, "firstname is required !!"],
      minLength: [4, "atleast 4 chars "],
      maxLength: [15, "maximum 15 chars "],
    },
    lastname: {
      type: String,
      required: [true, "lastname is required !!"],
      minLength: [4, "atleast 4 chars "],
      maxLength: [15, "maximum 15 chars "],
    },
    contect: {
      type: String,
      required: [true, "contect is required !!"],
      minLength: [10, "atleast 10 chars "],
      maxLength: [10, "maximum 10 chars "],
    },
    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
    },
    email: {
      type: String,
      unique: true,
      required: [true, "email is required !!"],
    },
    password: {
      type: String,
      select: false,
      required: [true, "pass is required !!"],
      minLength: [4, "atleast 4 chars "],
      maxLength: [15, "maximum 15 chars "],
    },

    profile: {
      type: Object,
      default: {
        fileId: "",
        url: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      },
    },
  
    country : {
      type : String,
    },
    street: {
      type: String,
    },
    city: {
      type: String,
    },
    state: {
      type: String,
    },
    pincode: {
      type: String,
    },
    about: {
      type: String,
      maxLength: [200, "maximum 200 chars "],
      minLength: [10, "atleast 10 chars "],
    },

    resume: {
      education: [],
      jobs: [],
      internships: [],
      positionofresponsiblity: [],
      courses: [],
      projects: [],
      skills: [],
      achievements: [],
    },

    internships: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "internships",
      },
    ],
    jobs: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "jobs",
      },
    ],

    otp: {
      type: String,
      default: '0',
    },
  },
  { timestamps: true }
);


studentModel.pre("save",  async function (next) {
  if (!this.isModified("password")) {
    return;
  }
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;
  next();

  // let salt = bcrypt.genSaltSync(10);
  // this.password = bcrypt.hashSync(this.password, salt);

});

studentModel.methods.comparepassword = function (pass) {
  return bcrypt.compareSync(pass, this.password);
};

studentModel.methods.getjwt = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRATE, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};


const Student = mongoose.model("students", studentModel);
module.exports = Student;
