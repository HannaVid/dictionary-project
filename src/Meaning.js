import React from "react";
import Synonyms from "./Synonyms";
// import Example from "./Example";
import "./Meaning.css";
import Definition from "./Definition";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3 key={props.meaning.partOfSpeech}>{props.meaning.partOfSpeech}</h3>
      <Synonyms synonyms={props.meaning.synonyms} />
      <Definition definition={props.meaning.definitions} />
      {/* <Example example={props.meaning.definitions} /> */}
    </div>
  );
}
