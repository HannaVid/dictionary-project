import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
    // console.log(props.photos);
    return (
      <section className="Photos">
        <div className="row">
          {props.photos.map(function (photo, index) {
            return (
              <div className="col-lg-3 col-md-6" key={index}>
                <a href={photo.src.original} target="_blank" rel="noreferrer">
                  <img
                    src={photo.src.landscape}
                    alt={photo.alt}
                    title={photo.alt}
                    className="img-fluid shadow-sm"
                  ></img>
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else return null;
}
