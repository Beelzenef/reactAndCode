import { useState } from "react";
import { useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

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

      <ol>
        {gifs.map(({ id, title }) => (
          <li key={id}>{title}</li>
        ))}
      </ol>
    </>
  );
}

export default GifGrid;
