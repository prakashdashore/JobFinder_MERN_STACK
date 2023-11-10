const mongoose = require("mongoose");
const internshipModel = new mongoose.Schema(
  {
    employes: [{ type: mongoose.Schema.Types.ObjectId, ref: "employes" }],
    students: [{ type: mongoose.Schema.Types.ObjectId, ref: "students" }],
    application: [{ type: mongoose.Schema.Types.ObjectId, ref: "applications" }],

    title: String,
    skills: String,
    internshiptype: {
      type: String,
      enum: ["In office", "Remote"],
    },
    openings: Number,
    from: String,
    to: String,
    duration: String,
    responsibilities: String,
    stipendtype: {
      type: String,
      enum: ["Fixed", "Negotiable", "Performance based", "Unpaid"],
    },
    stipend: String,
    perks: String,
    assessments: String,
  },
  { timestamps: true }
);

const Internship = mongoose.model("internships", internshipModel);
module.exports = Internship;
