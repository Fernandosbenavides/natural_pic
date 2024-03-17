import { createContext, useEffect, useState } from "react";

export const PhotoContext = createContext();

const PhotoProvider = ({ children }) => {
  const [photos, setPhotos] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetch("./photos.json")
      .then((res) => res.json())
      .then(({ photos }) => {
        setPhotos(photos);
      });
  }, []);

  const toggleLike = (id) => {
    const newPhotos = photos.map((photo) => {
      if (photo.id === id) {
        const updatedPhoto = { ...photo, liked: !photo.liked };
        return updatedPhoto;
      }
      return photo;
    });

    setPhotos(newPhotos);
    setFavorites((prevFavorites) => {
      const updatedPhoto = newPhotos.find((photo) => photo.id === id);
      if (updatedPhoto.liked) {
        return [...prevFavorites, updatedPhoto];
      } else {
        return prevFavorites.filter((fav) => fav.id !== id);
      }
    });
  };

  return (
    <PhotoContext.Provider
      value={{
        photos,
        favorites,
        toggleLike,
      }}
    >
      {children}
    </PhotoContext.Provider>
  );
};

export default PhotoProvider;
