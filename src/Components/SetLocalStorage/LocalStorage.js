const storedJobApplication = () => {
    const storedApplication = localStorage.getItem('applied-jobs')
    if (storedApplication) {
        return JSON.parse(storedApplication)
    }

    return [];
}
const saveJobApplication = (id) => {
    const storedJobApplications = storedJobApplication();
    const exists = storedJobApplications.find(jobId => jobId === id)
    if(!exists){
        storedJobApplications.push(id)
    }
    localStorage.setItem('applied-jobs', JSON.stringify(storedJobApplications))


}

export {storedJobApplication,saveJobApplication}