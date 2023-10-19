

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#202020] text-white">
      <div className="text-center">
        <h1 className="text-6xl font-bold">404</h1>
        <p className="text-2xl font-semibold">Oops! Page not found.</p>
        <p className="text-lg my-4">
          The page you are looking for might have been removed or does not exist. Do not worry, lets get you back on track!
        </p>
        <a href="/" className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full inline-block text-lg">
          Go Home
        </a>
      </div>
    </div>
  );
};

export default ErrorPage;
