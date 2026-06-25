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