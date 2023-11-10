const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const employeeModel = new mongoose.Schema(

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
    organistionname: {
      type: String,
      required: [true, "organistionname is required !!"],
    },
    organistionlogo: {
      type: Object,
      default: {
        fileId: "",
        url: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      },
    },
    organistiondescription: {
      type: String,
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
      default: "0",
    },
  },
  { timestamps: true }
);

employeeModel.pre("save", function () {
  if (!this.isModified("password")) {
    return;
  }

  let salt = bcrypt.genSaltSync(10);
  this.password = bcrypt.hashSync(this.password, salt);
});

employeeModel.methods.comparepassword = function (pass) {
  return bcrypt.compareSync(pass, this.password);
};

employeeModel.methods.getjwt = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRATE, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

const Employee = mongoose.model("employes", employeeModel);
module.exports = Employee;
