import { useState } from "react";
import { AddSearchTerm, GifGrid } from "./components";

export const GifApp = () => {
  const [gifsToSearch, setGifsToSearch] = useState(["vaporwave", "retrowave"]);

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
