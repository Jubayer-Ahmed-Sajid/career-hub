import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobList = () => {
    const [jobs,setJobs] = useState([]);
    const [card,setCard] = useState(4);
    useEffect( ()=> {
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    },[])
    return (
        <div>
            <h2 className="text-5xl text-center p-5">Featured Jobs</h2>
            <p className="text-lg text-center ">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="grid grid-cols-2 gap-7 mt-6 px-5">
                {
                    jobs.slice(0,card).map(job => <Job job={job} key={job.id}></Job>)
                }

            </div>
            <div className={` ${card === jobs.length && 'hidden'} flex justify-center`}>
            <button className="btn-primary text-xl py-3 px-4 text-center  rounded-lg" onClick={()=> setCard(6)}>Show All</button>

            </div>
        </div>
        
    );
};

export default FeaturedJobList;