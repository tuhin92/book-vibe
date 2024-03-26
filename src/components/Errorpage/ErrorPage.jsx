import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold text-red-600">Opps !</h1>
          <h2 className="py-6 text-4xl">
            Page Not Found
          </h2>
          <Link className="btn btn-info text-white font-bold text-base"  to="/">
            Back to Home
            </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
