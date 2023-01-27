import { useGetGifs } from "../hooks/useGetGifs";
import GifItem from "./GifItem";

function GifGrid({ searchTerm }) {
  const { gifs, isLoading } = useGetGifs(searchTerm);

  return (
    <>
      <h3>{searchTerm}</h3>

      {isLoading && <h4>Loading...</h4>}

      <div className="card-grid">
        {gifs.map((image) => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
}

export default GifGrid;
