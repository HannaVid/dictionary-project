import React from "react";
import Language from "./Language";
import "./Pronunciation.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeHigh } from "@fortawesome/free-solid-svg-icons";

export default function Pronunciation(props) {
  function playAudio() {
    new Audio(props.url).play();
  }

  if ((props.url !== "") & (props.transcription !== "")) {
    return (
      <div className="Pronunciation">
        <Language language={props.url} />
        <button onClick={playAudio}>
          <span className="icon">
            <FontAwesomeIcon icon={faVolumeHigh} />
          </span>
        </button>
        <h4>{props.transcription}</h4>
      </div>
    );
  } else return null;
}
