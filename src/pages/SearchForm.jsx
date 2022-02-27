import { useState } from "react";
//import { useSearchParams } from "react-router-dom";

function SearchForm({setUrl}) {
  const [search, setSearch] = useState("");
  //const [queryParams,setQueryParams] = useSearchParams();

  const handleClick = () => {
    //setQueryParams({rarity:search})
    const searchUrl = `https://api.magicthegathering.io/v1/cards?rarity=${search}`
    console.log(search);
    setUrl(searchUrl)
  };

  return (
    <>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={handleClick}>Search</button>
    </>
  );
}

export default SearchForm;
