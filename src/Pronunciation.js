import React from "react";
import Language from "./Language";

export default function Pronunciation(props) {
  function playAudio() {
    new Audio(props.url).play();
  }

  if (props.url) {
    return (
      <div className="Pronunciation">
        <Language language={props.url} />
        <button onClick={playAudio}>Listen</button>
        <h4>{props.transcription}</h4>
      </div>
    );
  } else return null;
}
