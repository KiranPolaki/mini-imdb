import { FaStar } from "react-icons/fa";

const Rating = ({ score }) => {
  const displayScore = score ? `${score} / 100` : "N/A";
  return (
    <div className="flex items-center gap-1 text-yellow-400 font-bold">
      <FaStar />
      <span>{displayScore}</span>
    </div>
  );
};

export default Rating;
