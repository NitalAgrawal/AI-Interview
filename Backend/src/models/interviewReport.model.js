const mongoose = require('mongoose');

/**
 * -- what user will give 
 * - job description schema : String
 * - resume text : String
 * - self description : String
 * 
 * -- AI will generate 
 * 
 * - matchScore : Number
 * - technical questions :
 *      [{
 *         question:"",
 *          intention: "",
 *         answer:" ",
 *      }] // in array form
 * - behavioral questions : 
 *       [{
 *         question:"",
 *          intention: "",
 *         answer:" ",
 *      }]
 * - skill gaps : [{
 *       skill : "",
 *       severity : {
 *           type : String,
 *           enum : ["low","medium","high"]
 *         }
 * 
 *      }]
 * - preparation plans : [{
 *         day : number,
 *         focus : string,
 *          tasks : [string]
 *      }] 
 */
const technicalQuestionSchema = new mongoose.Schema({
    question: {
        type: String,
         required: [ true, "technical Question is required"]
    },
    intention: {
        type: String,
         required: [ true, "intention is required"]
    },
    answer: {
        type: String,
         required: [ true, "answer is required"]
    }
}, {
    _id: false
})

const behavioralQuestionSchema = new mongoose.Schema({
     question: {
        type: String,
         required: [ true, "technical Question is required"]
    },
    intention: {
        type: String,
         required: [ true, "intention is required"]
    },
    answer: {
        type: String,
         required: [ true, "answer is required"]
    }
}, {
    _id: false
})

const skillGapSchema = new mongoose.Schema({
    skill: {
        type: String,
         required: [ true, "skill is required"]
    },
    severity: {
        type: String,
        enum: [ "low", "medium", "high"],
         required: [ true, "severity is required"]
    }
}, {
    _id: false
})

const preparationPlanSchema = new mongoose.Schema({
     day: {
        type: Number,
        required: [ true, "Day is required"]
     },
     focus:{
        type: String,
         required: [ true, "focus is required"]
     },
     task: [{
        type: String,
         required: [ true, "Task is required"]
     }]

})

const interviewReportSchema = new mongoose.Schema({
      jobDescription: {
         type: String,
         required: [ true, "Job Description is required"]
      },
      resume: {
        type: String,
      },
      selfDescription: {
        type: String,
      },
      matchScore: {
        type: Number,
        min: 0,
        max: 100,
      },
      technicalQuestions: [ technicalQuestionSchema ],
      behavioralQuestions: [ behavioralQuestionSchema ],
      skillGaps: [skillGapSchema],
      preparationPlan: [ preparationPlanSchema ]

},{
    timestamps: true
})

const interviewReportModel = mongoose.model("InterviewReport", interviewReportSchema);

module.exports = interviewReportModel;