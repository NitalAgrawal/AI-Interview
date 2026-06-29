const pdfParse = require("pdf-parse")
const generateInterViewReport = require("../services/ai.service")

async function generateInterViewReportController(req, res){
    const resumefile = req.file

    const resumeContent = pdfParse(req.file.buffer)
    const { selfDescription, jobDescription} = req.body

    const interViewReportByAi = await generateInterViewReport({
        resume: resumeContent,
        selfDescription,
        jobDescription
    })
}


module.exports = { generateInterViewReportController }