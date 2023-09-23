// import { useEffect } from "react";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { storedJobApplication } from "../SetLocalStorage/LocalStorage";

const AppliedJobs = () => {
    const jobs = useLoaderData();
    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);

    const handleFilter = filter => {
        if(filter === 'all')
        setDisplayJobs(appliedJobs);

    
        else if(filter == 'remote'){
            const remote = appliedJobs.filter(job => job.remote_or_onsite == 'Remote')
            setDisplayJobs(remote)
        }
        else if (filter == 'onsite'){
            const onsite = appliedJobs.filter(job => job.remote_or_onsite =='Onsite')
            setDisplayJobs(onsite)
        }
    }


    useEffect(() => {
        const jobId = storedJobApplication();
        if (jobs.length > 0) {
            const jobsApplied = jobs.filter(job => jobId.includes(job.id))
            setAppliedJobs(jobsApplied);
            setDisplayJobs(jobsApplied);
        }
    }, [jobs])

    return (

        <div>
            <details className="dropdown mb-32">
                <summary className="m-1 btn">Filter</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li onClick={()=>handleFilter('all')}><a>All</a></li>
                    <li onClick={()=>handleFilter('remote')}><a>Remote</a></li>
                    <li onClick={()=> handleFilter('onsite')}><a>Onsite</a></li>
                </ul>
            </details>
            <h2 className="text-2xl font-bold p-8 text-center">Applied Jobs: {appliedJobs.length}</h2>
            {
                displayJobs.map(job => <li key={job.id}> job title: {job.job_title} <br /> <span>Company:{job.company_name}:</span>
                    <br />{job.remote_or_onsite}

                </li>)
            }
        </div>
    );
};

export default AppliedJobs;