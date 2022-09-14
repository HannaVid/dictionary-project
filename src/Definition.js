import React from "react";
import Example from "./Example";
import "./Definition.css";

export default function Definition(props) {
  if (props.definition) {
    return (
      <div className="Definition">
        <ul className="list-unstyled">
          <br />
          {props.definition.map(function (definition, index) {
            return (
              <li key={index}>
                {definition.definition}
                <Example example={definition.example} />
                <div className="definition_end">***</div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
