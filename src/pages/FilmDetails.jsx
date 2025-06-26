import { useParams } from "react-router-dom";
import { useGetFilmDetailsQuery } from "../api/ghibliApi";
import Spinner from "../components/common/Spinner";
import Rating from "../components/common/Rating";
import { container } from "../styles/reusableStyles";

const FilmDetails = () => {
  const { id } = useParams();
  const { data: film, error, isLoading } = useGetFilmDetailsQuery(id);

  if (isLoading) return <Spinner />;
  if (error || !film) return <p className={container}>Film not found.</p>;

  const backdropPath = `https://picsum.photos/seed/${film.id}/1280/720`;
  const posterPath = film.image;

  return (
    <div className="film-details-page">
      <div
        className="w-full h-[50vh] min-h-[300px] max-h-[500px] bg-cover bg-center relative"
        style={{ backgroundImage: `url(${backdropPath})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent"></div>
      </div>

      <div className={`${container} relative pb-16 -mt-40 md:-mt-80`}>
        <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
          <div className="w-full md:w-1/3 flex-shrink-0">
            <img
              src={posterPath}
              alt={film.title}
              className="w-full max-w-sm mx-auto rounded-lg shadow-2xl border-4 border-slate-700/60 transform transition-all duration-300 hover:scale-100 hover:shadow-cyan-400/20"
            />
          </div>

          <div className="md:w-2/3 text-white flex flex-col gap-y-6 md:bg-slate-800/50 md:backdrop-blur-lg md:p-8 md:rounded-lg">
            <div>
              <h1 className="text-3xl lg:text-5xl font-bold tracking-tight">
                {film.title}
              </h1>
              <p className="text-lg lg:text-xl text-slate-300 italic mt-1">
                {film.original_title}
              </p>
            </div>

            <div className="flex items-center gap-x-4 text-slate-300">
              <Rating score={film.rt_score} />
              <span className="text-2xl font-thin">|</span>
              <span>{film.release_date}</span>
            </div>
            <div>
              <h2 className="text-2xl font-semibold border-b-2 border-slate-700 pb-2 mb-3">
                Description
              </h2>
              <p className="text-slate-300 leading-relaxed">
                {film.description}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-slate-700">
              <div>
                <p className="text-sm text-slate-400">Director</p>
                <p className="text-lg font-semibold">{film.director}</p>
              </div>
              <div>
                <p className="text-sm text-slate-400">Producer</p>
                <p className="text-lg font-semibold">{film.producer}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilmDetails;
