import axios from "axios"

const api = axios.create({
    baseURL: "http://localhost:3000",
    withCredentials: true,
})

/**
 * @description service to generate interview report based on user self description , resume and job Description
 */
export const generateInterViewReport = ({ resumeFile, selfDescription, jobDescription }) => {
    const formData = new FormData();// frontend se backend ko file bhejna is done through the form data 
    formData.append("resumeFile", resumeFile);
    formData.append("selfDescription", selfDescription);
    formData.append("jobDescription", jobDescription);

    const response = api.post("/api/interview", formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    })

    return response.data;
}
/**
 * @description service to get interview report by interviewId
 */
export const getInterviewReportById = (interviewId) => {
    const response = api.get(`/api/interview/${interviewId}`)
    return response.data;
}
/**
 * @description service to get all interview reports of logged in user 
 */
export const getAllInterviewReports = () => {
    const response = api.get("/api/interview")
    return response.data;
}