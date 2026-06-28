const { GoogleGenAI } = require("@google/genai")
const { z } = require("zod");
const { zodToJsonSchema } = require("zod-to-json-schema")

const ai = new GoogleGenAI({
    apiKey: process.env.GOOGLE_GENAI_API_KEY
});

const interviewReportSchema = z.object({
    matchScore: z.number().describe("A score between 0 and 100 indicating how well the candidate's profile matches the job describe"),
    technicalQuestions: z.array(z.object({
        question: z.string().describe("the technical question can be asked in the interview"),
        intention: z.string().describe("the intention of interviewer behind asking this question "),
        answer: z.string().describe("How to answer this question, what points to cover,what approaches to take etc. "),
    })).describe("technical questions that can be asked in the interview along with their intention and how to answer them "),
    behavioralQuestions: z.array(z.object({
        question: z.string().describe("the technical question can be asked in the interview"),
        intention: z.string().describe("the intention of interviewer behind asking this question "),
        answer: z.string().describe("How to answer this question, what points to cover,what approaches to take etc. "),
    })).describe("behavioral questions that can be asked in the interview along with their intention and how to answer them "),
    skillGaps: z.array(z.object({
        skill: z.string().describe("the skill which the candidate is lacking"),
        severity: z.enum(["low", "medium", "high"]).describe("the severity of this skill gap, i.e. how important  it is for the candidate to improve this skill")
    })).describe("list of skill gaps in the candidates profile along with their severity "),
    preparationPlan: z.array(z.object({
        day: z.number().describe("the day number in the preparation plan , startig from 1 "),
        focus: z.string().describe("The main focus of this day in the preparation plan, e.g. data structures, system design, mock interviews etc."),
        tasks: z.array(z.string()).describe("List of tasks to be done on this day to follow the preparation plan, e.g. read a specific book or article, solve a set of problems, watch a video etc.")
    })).describe("A day-wise preparation plan for the candidate to follow in order to prepare for the interview effectively")
});


async function generateInterviewReport({ resume, selfDescription, jobDescription }) {

    const prompt = `generate an interview report for a candidate with the following details:
           Resume: ${resume}
           Self Description: ${selfDescription}
           Job Description: ${jobDescription}
           `

    const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: prompt,
        config: {
            responseMimeType: "application/json",
            responseJsonSchema: zodToJsonSchema(interviewReportSchema)
        }
    })
    return JSON.parse(response.text);

}
module.exports = generateInterviewReport