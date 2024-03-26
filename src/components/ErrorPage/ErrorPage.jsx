import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h1>OPSS!</h1>
            <Link to="/">Back to home page</Link>
        </div>
    );
};

export default ErrorPage;