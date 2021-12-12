import React from "react";
import '../styles/Image.scss';

function Image({ src }) {
  return (
    <img className="image" width="150px" height="auto" src={src} ></img>
  );
}

export default Image;