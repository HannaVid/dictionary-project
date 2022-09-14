import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms.length) {
    // console.log(props.synonyms);
    return (
      <div className="Synonyms">
        <div className="row">
          {props.synonyms.map(function (synonym, index) {
            return (
              <div className="col-lg-2 col-md-3 col-sm-4" key={index}>
                {synonym}
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div className="horizontal_line">
        <hr />
      </div>
    );
  }
}
