import React from "react";
import { Link } from "react-router-dom";
import { card, cardImage } from "../../styles/reusableStyles";
import Rating from "../common/Rating";

const FilmCard = ({ film }) => {
  const placeholderImage = `https://picsum.photos/seed/${film.id}/400/600`;

  return (
    <div className={card}>
      <Link to={`/film/${film.id}`}>
        <img
          src={film.image || placeholderImage}
          alt={film.title}
          className={cardImage}
        />
        <div className="p-4">
          <h3 className="font-bold truncate" title={film.title}>
            {film.title}
          </h3>
          <div className="flex justify-between items-center mt-2 text-sm text-slate-400">
            <span>{film.release_date}</span>
            <Rating score={film.rt_score} />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default React.memo(FilmCard);
