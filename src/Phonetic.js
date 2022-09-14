import React from "react";
import Pronunciation from "./Pronunciation";
import "./Phonetic.css";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <Pronunciation
        url={props.phonetic.audio}
        transcription={props.phonetic.text}
      />
    </div>
  );
}
