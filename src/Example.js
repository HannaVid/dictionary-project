import React from "react";
import "./Example.css";

export default function Example(props) {
  if (props.example) {
    return <div className="Example list-unstyled">{props.example}</div>;
  } else {
    return null;
  }
}
