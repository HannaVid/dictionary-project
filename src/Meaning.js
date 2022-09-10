import React from "react";
import Synonyms from "./Synonyms";
import Example from "./Example";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>

      <Synonyms synonyms={props.meaning.synonyms} />

      {props.meaning.definitions.map(function (definiton, index) {
        return (
          <div key={index}>
            <strong>Definition: {""}</strong>
            {definiton.definition}
            <br />
            <Example example={definiton.example} />
            <br />
          </div>
        );
      })}
    </div>
  );
}
