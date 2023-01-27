import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useGetGifs = (searchTerm) => {
  const [gifs, setGifs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async () => {
    const gifsFound = await getGifs(searchTerm);
    setGifs(gifsFound);
    setIsLoading(false);
  };

  useEffect(() => {
    getImages();
  }, []);

  return {
    gifs,
    isLoading,
  };
};
