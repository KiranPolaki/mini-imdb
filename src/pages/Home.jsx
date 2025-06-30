import { useGetFilmsQuery } from "../api/ghibliApi";
import FilmCard from "../components/film/FilmCard";
import Spinner from "../components/common/Spinner";
import { container, gridLayout } from "../styles/reusableStyles";

const Home = () => {
  // TODO: HARD : implemention of the virtualization too for lists which are big.
  const { data: films, error, isLoading } = useGetFilmsQuery();

  // TODO: HARD Key stroke search option

  // TODO: maybe try adding a shimmmers - let me google that for you too what is a shimmer and how to create it https://medium.com/lattice-what-is/shimmer-ui-a-better-way-to-show-loading-states-aa1f4e563d17

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
