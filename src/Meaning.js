import React from "react";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definiton, index) {
        return (
          <div key={index}>
            <p>
              {definiton.definition}
              <br />
              {definiton.example}
            </p>
          </div>
        );
      })}
    </div>
  );
}
