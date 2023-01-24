import { useState } from "react";
import { useEffect } from "react";
import { getGifs } from "../helpers/getGifs";
import GifItem from "./GifItem";

function GifGrid({ searchTerm }) {
  const [gifs, setGifs] = useState([]);

  const getImages = async () => {
    const gifsFound = await getGifs(searchTerm);
    setGifs(gifsFound);
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <>
      <h3>{searchTerm}</h3>

      <div className="card-grid">
        {gifs.map((image) => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
}

export default GifGrid;
