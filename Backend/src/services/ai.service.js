const { GoogleGenAI } = require("@google/genai")
const {z} = require("zod");
const {zodToJsonSchema} = require("zod-to-json-schema")

const ai = new GoogleGenAI({
    apiKey: process.env.GOOGLE_GENAI_API_KEY
});

const interviewReportSchema = z.object({
    technicalQuestions: z.array(z.object({
        question: z.string().description("the technical question can be asked in the interview"),
        intention: z.string().description("the intention of interviewer behind asking this question "),
        answer: z.string().description("How to answer this question, what points to cover,what approaches to take etc. "),
})).description("technical questions that can be asked in the interview along with their intention and how to answer them "),
    behavioralQuestions: z.array(z.object({
         question: z.string().description("the technical question can be asked in the interview"),
        intention: z.string().description("the intention of interviewer behind asking this question "),
        answer: z.string().description("How to answer this question, what points to cover,what approaches to take etc. "),
    })).description("behavioral questions that can be asked in the interview along with their intention and how to answer them "),
    skillGaps: z.array(z.object({
        skill: z.string().description("the skill which the candidate is lacking"),
        severity: z.enum([ "low", "medium", "high"]).description("the severity of this skill gap, i.e. how important  it is for the candidate to improve this skill")
    }))
})

async function generateInterviewReport({ resume, selfDescription, jobDescription }){

}
module.exports = invokeGeminiAi