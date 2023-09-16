import React from "react";
import Card from "./Card";

export default function CardSlider({ data, title }) {
  return (
    <div className="flex">
      {data.map((movie, index) => {
        const { id } = movie;
        return <Card movieData={movie} index={index} key={id} />;
      })}
    </div>
  );
}
