import { getAllInterviewReports, generateInterViewReport, getInterviewReportById } from "../services/interview.api";
import { useContext } from "react";
import { InterviewContext } from "../interview.context";
import { jsonDescription } from "zod-to-json-schema";

export const useInterview = () => {
    
     const context = useContext(InterviewContext)

     if(!context) {
        throw new Error("useInterview must be used within an InterviewProvider")
     }

     const {loading, setLoading, report, setReport, reports, setReports} = context 

     const generateReport = async ({jobDescription, selfDescription, resumeFile}) => {
        setLoading(true)
        try{
            const response = await generateInterViewReport({ jobDescription, selfDescription, resumeFile})
            setReport(response.interviewReport)
        }catch(error){
           console.log(error);
           
        }finally {
            setLoading(false)
        }
     }
}