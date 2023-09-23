import PropTypes from 'prop-types'
import { IoLocationOutline } from "react-icons/io5";
import { CiDollar } from "react-icons/ci";
import { Link } from 'react-router-dom';

const Job = ({ job }) => {
    const { id, logo, job_title, company_name, remote_or_onsite, location, salary, job_type } = job
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl mt-2">
                <figure><img src={logo} /></figure>
                <div className="card-body mt-4">
                    <h2 className="text-xl font-bold text-center p-2">{job_title}</h2>
                    <p className='text-2xl font-bold text-center p-2'>{company_name}</p>
                    <div className='flex gap-4 p-2'>
                        <button className='py-2 px-4 text-[#7E90FE ] border border-[#7E90FE ] rounded-lg mr-3'>{remote_or_onsite}</button>
                        <button className='py-2 px-4 text-[#7E90FE ] border border-[#7E90FE ] rounded-lg'>{job_type}</button>
                    </div>
                    <div className='flex gap-6 p-2'>
                        <h2 className='text-2xl flex items-center gap-2'> <IoLocationOutline> </IoLocationOutline>{location}</h2>
                        <h2 className='text-2xl flex items-center gap-2'><CiDollar></CiDollar>{salary}</h2>
                    </div>

                    <div className="card-actions">
                        <Link to={ `/job/${id}`}>
                        <button className="btn btn-primary">Job Details</button>

                    </Link>
                </div>
            </div>
        </div>
        </div >
    )
}

Job.propTypes = {
    job: PropTypes.object.isRequired
}

export default Job
