import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import SearchIcon from "./images/Search.svg";

export default function Dictionary() {
  let [keyWord, setKeyWord] = useState("");
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);

  function Search(event) {
    event.preventDefault();

    // documentation: https://dictionaryapi.dev
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyWord}`;
    axios.get(apiUrl).then(handleResponse);

    //documentation: https://www.pexels.com/api/documentation/
    let pexelsApiKey =
      "563492ad6f91700001000001bc5440db709f491fb84aa5d279e748d5";
    let headers = { Authorization: `${pexelsApiKey}` };
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyWord}&per_page=8`;
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function handleKeyWordChange(event) {
    setKeyWord(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={Search}>
        <img src={SearchIcon} alt="Search icon"></img>
        <input
          type="search"
          onChange={handleKeyWordChange}
          placeholder="Enter a word..."
        />
      </form>
      <Results results={results} photos={photos} />
    </div>
  );
}
