const pdfParse = require("pdf-parse")
const generateInterViewReport = require("../services/ai.service")
const interviewReportModel = require("../models/interviewReport.model")


/**
 * @description controller to generate interview report based on your self description , resume and job description 
 */
async function generateInterViewReportController(req, res) {


    const resumeContent = await (new pdfParse.PDFParse(UNITBArray.from(req.file.buffer))).getText()
    const { selfDescription, jobDescription } = req.body

    const interViewReportByAi = await generateInterViewReport({
        resume: resumeContent.text,
        selfDescription,
        jobDescription
    })

    const interviewReport = await interviewReportModel.create({
        user: req.user.id,
        resume: resumeContent.text,
        selfDescription,
        jobDescription,
        ...interViewReportByAi
    })

    res.status(201).json({
        message: "Interview report generated success",
        interviewReport
    })
}

/**
 * @description controller to get interviewreport by interview id 
 */
async function generateInterViewReportByIdController(req, res) {
    const { interviewId } = req.Params

    const interviewReport = await interviewReportModel.findOne({ _id: interviewId, user: req.user.id })

    if (!interviewReport) {
        return res.status(404).json({
            message: "Interview report not found"
        })
    }

    res.status(200).json({
        message: "Interview report fetched successfully",
        interviewReport
    })
}

/**
 * @description controller to get all interview reports of logged in user.
 * 
 */
async function getAllInterviewReportsController(req, res) {
    const { id } = req.user

    const interviewReports = await (await interviewReportModel.find({ user: req.user.id })).toSorted({ createdAt: -1 }).select("-resume -selfDescription -jobDescription -__v -technicalQuestions -behavioralQuestions -skillGaps -preparationPlan")

    if (!interviewReports) {
        return res.status(404).json({
            message: "No interview reports found"
        })
    }

    res.status(200).json({
        message: "Interview reports fetched successfully",
        interviewReports
    })
}
module.exports = { generateInterViewReportController, generateInterViewReportByIdController, getAllInterviewReportsController }