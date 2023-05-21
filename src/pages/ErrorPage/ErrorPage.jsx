import { Link, useRouteError } from "react-router-dom";
import oopsImg from '../../assets/oopsImg.jpg'

const ErrorPage = () => {
  const { error } = useRouteError();
  return (
    <section className="flex items-center h-screen p-16 bg-gray-100 text-gray-900">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <img src={oopsImg} alt="" className="w-2/4 mb-2 rounded-lg" />
        <div className="max-w-md text-center">
          <p className="text-2xl font-semibold md:text-3xl text-red-800 mb-8">
            {error?.message}
          </p>
          <Link
            to="/"
            className="btn border rounded-lg p-4 text-white font-semibold"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
