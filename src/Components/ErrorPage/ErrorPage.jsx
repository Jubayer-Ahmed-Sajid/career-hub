import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <h3>Oops!! Content did not found.</h3>
            <Link to = '/'>Go back to home</Link>
        </div>
    );
};

export default ErrorPage;