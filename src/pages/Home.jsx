import { useGetFilmsQuery } from "../api/ghibliApi";
import FilmCard from "../components/film/FilmCard";
import Spinner from "../components/common/Spinner";
import { container, gridLayout } from "../styles/reusableStyles";

const Home = () => {
  const { data: films, error, isLoading } = useGetFilmsQuery();

  if (isLoading) return <Spinner />;
  if (error) return <p className={container}>Error loading films.</p>;

  return (
    <div className={container}>
      <div className="py-4">
        <h1 className="text-3xl font-bold mb-8">Studio Ghibli Films</h1>
        <div className={gridLayout}>
          {films?.map((film) => (
            <FilmCard key={film.id} film={film} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
