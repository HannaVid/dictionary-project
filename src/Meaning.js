import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";
import Definition from "./Definition";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3 key={props.meaning.partOfSpeech}>{props.meaning.partOfSpeech}</h3>
      <Synonyms synonyms={props.meaning.synonyms} />
      <Definition definition={props.meaning.definitions} />
    </div>
  );
}
