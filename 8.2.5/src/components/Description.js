import React from "react";
import '../styles/Description.scss';

function Description({ description }) {
  return (
    <div className="description">
      {description}
    </div>
  );
}

export default Description;