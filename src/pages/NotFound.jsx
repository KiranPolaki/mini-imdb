import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-900 text-white text-center p-6">
      <img
        src="/totoro-404.png"
        alt="Totoro waiting at a bus stop in the rain"
        className="w-64 h-auto mb-8"
      />
      <h1 className="text-6xl font-bold text-cyan-400">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold mt-4 mb-2">
        Looks like you're a little lost.
      </h2>
      <p className="text-slate-400 max-w-md mb-8">
        The page you’re looking for seems to have wandered off into the spirit
        world. Don't worry, we can get you back on track.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-cyan-500 text-slate-900 font-bold rounded-full hover:bg-cyan-400 transition-colors duration-300"
      >
        Return to Home
      </Link>
    </div>
  );
};

export default NotFound;
