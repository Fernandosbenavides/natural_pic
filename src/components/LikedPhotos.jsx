import { useContext } from "react";
import { PhotoContext } from "../context/PhotoContext";
import Card from "./Card";

const LikedPhotos = () => {
  const { favorites } = useContext(PhotoContext);

  return (
    <div>
      {favorites.length === 0 ? (
        <div className="m-5">
          <h5>No hay fotos favoritas</h5>
          <p className="cry">😿</p>
        </div>
      ) : (
        <div className="gallery grid-columns-5 m-4">
          {favorites.map((photo) => (
            <Card key={photo.id} photo={photo} />
          ))}
        </div>
      )}
    </div>
  );
};

export default LikedPhotos;
