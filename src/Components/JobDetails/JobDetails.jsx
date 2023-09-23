import { useLoaderData, useParams } from "react-router-dom";
import { CiDollar } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../SetLocalStorage/LocalStorage";
const JobDetails = () => {

    const jobs = useLoaderData();
    const { jobId } = useParams();
    const intJObId = parseInt(jobId)
    const job = jobs.find(job => job.id === intJObId);
    const { salary, job_title, id, job_description, job_responsibility, educational_requirements, experiences} = job;
    // const { phone, email, address } = contact_information;
    const handleToast = () => {
        saveJobApplication(intJObId);
        toast('You have successfully applied')
    }

    return (
        <div>
            <h2 className="text-4xl text-center p-6">Job details of : {id}</h2>
            <div className="grid grid-cols-4 gap-5">
                <div className="col-span-3">
                    <p className="mb-8"><span className="font-bold">Job Description:</span>{job_description}</p>
                    <p className="mb-8"><span className="font-bold">Job Responsibility:</span>{job_responsibility}</p>
                    <p className="font-bold mb-4">Educational Requirements</p>
                    <p>{educational_requirements}</p>
                    <p className="my-8 font-bold">Experiences</p>
                    <p>{experiences}</p>


                </div>
                <div className="col-span-1">
                    <div className="bg-[#7E90Fe] p-8">
                        <h2 className="font-bold border-b pb-4"> Job Details</h2>
                        <div className="my-8">
                            <h2 className="flex items-center gap-3"><span className="text-2xl"><CiDollar></CiDollar></span>Salary:{salary}</h2>
                            <h2 className="flex items-center gap-3"><span className="text-2xl"><IoLocationOutline></IoLocationOutline></span>Job Title:{job_title}</h2>
                        </div>
                        <div>
                            <h2 className="font-bold border-b pb-6">Contact Information</h2>

                        </div>
                    </div>
                    <div className="flex justify-center p-4">
                        <button onClick={handleToast} className="btn-primary px-4 py-3 rounded-lg">Apply Now</button>
                    </div>
                </div>
                <ToastContainer></ToastContainer>

            </div>
        </div>
    );
};

export default JobDetails;