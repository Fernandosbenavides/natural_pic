import { useContext } from "react";
import { PhotoContext } from "../context/PhotoContext";
import IconHeart from "./IconHeart";
import "./Card.css";

const Card = ({ photo }) => {
  const { toggleLike } = useContext(PhotoContext);
  const handleLikeClick = (e) => {
    e.stopPropagation();
    toggleLike(photo.id);
  };

  return (
    <div className="card" onClick={() => toggleLike(photo.id)}>
      <div className="badge" onClick={handleLikeClick}>
        <IconHeart filled={photo.liked} />
      </div>
      <img className="card-img" src={photo.src.medium} alt={photo.title} />
      <div className="card-body">
        <p className="card-title">{photo.alt}</p>
        <p className="card-text"><strong>📷 Author:</strong> {photo.photographer}</p>
      </div>
    </div>
  );
};

export default Card;
