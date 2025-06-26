import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { useGetFilmsQuery } from "../api/ghibliApi";
import FilmCard from "../components/film/FilmCard";
import Spinner from "../components/common/Spinner";
import { container, gridLayout } from "../styles/reusableStyles";

const SearchResults = () => {
  const { query } = useParams();
  const { data: allFilms, error, isLoading } = useGetFilmsQuery();

  const filteredFilms = useMemo(() => {
    if (!allFilms) return [];
    return allFilms.filter((film) =>
      film.title.toLowerCase().includes(query.toLowerCase())
    );
  }, [allFilms, query]);

  if (isLoading) return <Spinner />;
  if (error) return <p className={container}>Error searching for films.</p>;

  return (
    <div className={container}>
      <h1 className="text-3xl font-bold mb-8">
        Results for: <span className="text-cyan-400">{query}</span>
      </h1>
      {filteredFilms.length > 0 ? (
        <div className={gridLayout}>
          {filteredFilms.map((film) => (
            <FilmCard key={film.id} film={film} />
          ))}
        </div>
      ) : (
        <p>No films found matching your search.</p>
      )}
    </div>
  );
};

export default SearchResults;
