const pdfParse = require("pdf-parse")
const {generateInterViewReport, generateResumePdf} = require("../services/ai.service")
const interviewReportModel = require("../models/interviewReport.model")


/**
 * @description controller to generate interview report based on your self description , resume and job description 
 */
async function generateInterViewReportController(req, res) {


    const pdfData = await pdfParse(req.file.buffer)
    const resumeContent = { text: pdfData.text }
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
    const { interviewId } = req.params

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

    const interviewReports = await interviewReportModel.find({ user: req.user.id }).sort({ createdAt: -1 }).select("-resume -selfDescription -jobDescription -__v -technicalQuestions -behavioralQuestions -skillGaps -preparationPlan")

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

/**
 * @description controller to generate resume PDF based on user self description , resume and job description 
 * 
 *  */ 
async function generateResumePdfController(req,res) {
    const { interviewReportId } = req.params

    const interviewReport = await interviewReportModel.findById(interviewReportId)

    if(!interviewReport){
        return res.status(404).json({
            message: "Interview report not found."
        })
    }

    const { resume, selfDescription, jobDescription} = interviewReport

    const pdfBuffer = await generateResumePdf({ resume, jobDescription, selfDescription})

    res.set({
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachement; filename=resume_${interviewReportId}.pdf`
    })

    res.send(pdfBuffer);
}


module.exports = { generateInterViewReportController, generateInterViewReportByIdController, getAllInterviewReportsController, generateResumePdfController }