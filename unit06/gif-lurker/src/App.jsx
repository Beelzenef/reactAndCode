import { useState } from "react";
import AddSearchTerm from "./components/AddSearchTerm";

export const GifApp = () => {
  const [gifsToSearch, setGifsToSearch] = useState(["anime", "scifi"]);

  const onAddNewTerm = (newTerm) => {
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

      <ol>
        {gifsToSearch.map((c, index) => (
          <li key={index}>{c}</li>
        ))}
      </ol>
    </>
  );
};
//
