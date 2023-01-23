import { useState } from "react";
import AddSearchTerm from "./components/AddSearchTerm";
import GifGrid from "./components/GifGrid";

export const GifApp = () => {
  const [gifsToSearch, setGifsToSearch] = useState(["anime", "scifi"]);

  const onAddNewTerm = (newTerm) => {
    if (gifsToSearch.includes(newTerm)) return;
    // console.log(newTerm);
    setGifsToSearch([...gifsToSearch, newTerm]);
  };

  return (
    <>
      <h1>GifLurker</h1>

      <AddSearchTerm
        // setGifsToSearch={setGifsToSearch}
        onAddNewTerm={onAddNewTerm}
      />

      {gifsToSearch.map((searchTerm, index) => (
        <GifGrid key={searchTerm} searchTerm={searchTerm} />
      ))}
    </>
  );
};
