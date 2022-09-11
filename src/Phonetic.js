import React from "react";
import Pronunciation from "./Pronunciation";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      {/* <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
        Listen
      </a> */}

      <Pronunciation
        url={props.phonetic.audio}
        transcription={props.phonetic.text}
      />
      {/* <h1>{props.phonetic.text}</h1> */}
    </div>
  );
}
