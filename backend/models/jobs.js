const mongoose = require("mongoose");

const jobModel = new mongoose.Schema(
    {
        employes:[{type:mongoose.Schema.Types.ObjectId , ref:'employes'}],
        students:[{type:mongoose.Schema.Types.ObjectId , ref:'students'}],
        application: [{ type: mongoose.Schema.Types.ObjectId, ref: "applications" }],
        title : String,
        skills : String,
        joblocation : String,
        openings : Number,
        prefrences : String,
        salary : String,
        perks : String,
        assessments : String,
        description : String,
        jobtype : {
            type:String,
            enum:["In office" , "Remote"],
        },
        
    },{timestamps:true ,strict: false}
)


const Job = mongoose.model("jobs" , jobModel)

module.exports = Job;