import { useState } from "react";

export const AddSearchTerm = ({ onAddNewTerm }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const onNewSearchTerm = ({ target }) => {
    // const onNewSearchTerm = (event) => {
    setSearchTerm(target.value);
    // setSearchTerm(event.target.value);
  };

  const onSearch = (event) => {
    event.preventDefault();

    const searchTermClean = searchTerm.trim();
    if (searchTermClean.length == 0) return;

    // console.log(searchTermClean);
    // setGifsToSearch((gifsToSearch) => [...gifsToSearch, searchTerm]);
    // setSearchTerm('');
    onAddNewTerm(searchTermClean);
  };

  return (
    <form onSubmit={onSearch}>
      <input
        placeholder="Buscar GIFs"
        type="text"
        value={searchTerm}
        onChange={onNewSearchTerm}
        //  onChange= { (event) => onNewSearchTerm(event) }
      />
    </form>
  );
};

export default AddSearchTerm;
