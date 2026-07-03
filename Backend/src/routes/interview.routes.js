const express = require("express");
const authMiddleware = require("../middlewares/auth.middleware")
const interviewController = require("../controllers/interview.controller")
const upload = require("../middlewares/file.middleware")

const interviewRouter = express.Router()

/**
 * @route POST/api/interview/
 * @description generate new interview report on the basis of user self 
 *  description,resume pdf, and job descrition
 * @access private
 
*/
interviewRouter.post("/", authMiddleware.authUser, interviewController.generateInterViewReportController)

/**
 * @route GET/api/interview/report/:interviewId
 * @description get interview report by interview id 
 * @access private
 
*/
interviewRouter.get("/report/:interviewId", authMiddleware.authUser, interviewController.generateInterViewReportController)

/**
 * @route GET /api/interiew
 * @description get all interview reports of logged in user
 * @access private
 
 */
interviewRouter.get("/", authMiddleware.authUser, interviewController.getAllInterviewReportsController)

/**
 * @route GET/api/interview/resume/pdf
 * @description generate resume pdf on the basis of user selfdescription, resume, jobdescription
 * @access private 
 */
interviewRouter.post("/resume/pdf/:interviewReportId", authMiddleware.authUser, interviewController.generateResumePdfController )

module.exports = interviewRouter 