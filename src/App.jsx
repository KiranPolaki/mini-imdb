import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import FilmDetails from "./pages/FilmDetails";
import SearchResults from "./pages/SearchResults";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <div className="bg-slate-900 text-white min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/film/:id" element={<FilmDetails />} />
            <Route path="/search/:query" element={<SearchResults />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
