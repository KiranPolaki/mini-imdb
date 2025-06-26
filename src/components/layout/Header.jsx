import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import useDebounce from "../../hooks/useDebounce";
import { container } from "../../styles/reusableStyles";

const Header = () => {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 500);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (debouncedQuery) {
      navigate(`/search/${debouncedQuery}`);
    } else if (location.pathname.startsWith("/search/")) {
      navigate("/");
    }
  }, [debouncedQuery, navigate, location.pathname]);

  return (
    <header className="bg-slate-800/80 backdrop-blur-sm sticky top-0 z-50 py-4">
      <div className={`${container} flex justify-between items-center`}>
        <Link to="/" className="text-2xl font-bold text-cyan-400">
          GhibliFilms
        </Link>
        <div className="w-full max-w-xs">
          <input
            type="text"
            placeholder="Search for a film..."
            className="w-full bg-slate-700 text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-cyan-500"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
