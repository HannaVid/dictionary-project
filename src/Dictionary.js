import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyWord, setKeyWord] = useState("");

  function Search(event) {
    event.preventDefault();
    return alert(`Searching ${keyWord}`);
  }

  function handleKeyWordChange(event) {
    setKeyWord(event.target.value);
    console.log(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={Search}>
        <input type="search" onChange={handleKeyWordChange} />
      </form>
    </div>
  );
}
