import Banner from "../Banner/Banner";
import FeaturedJobList from "../FeaturedJobList/FeaturedJobList";
import JobCategory from "../JobCategory/JobCategory";

const Home = () => {
    return (
        <div>
            
                
            <Banner></Banner>
            <JobCategory></JobCategory>
            <FeaturedJobList></FeaturedJobList>
        </div>
    );
};

export default Home;