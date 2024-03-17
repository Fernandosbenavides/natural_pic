import { useContext } from "react";
import { PhotoContext } from "../context/PhotoContext";
import Card from "./Card";

const Gallery = () => {
  const { photos } = useContext(PhotoContext);
  return (
    <div className="gallery grid-columns-5 m-4">
      {photos.map((photo) => (
        <Card key={photo.id} photo={photo} />
      ))}
    </div>
  );
};

export default Gallery;
