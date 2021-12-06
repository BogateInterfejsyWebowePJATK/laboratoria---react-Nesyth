import React from "react";
import Image from "./Image";
import Description from "./Description";

function Article({ name, src, description }) {
  return (
    <section id={name.toLowerCase().replace(/ /g, "-")}>
      <h1>{name}</h1>
      <Image src={src} />
      <Description description={description} />
    </section>
  );
}

export default Article;