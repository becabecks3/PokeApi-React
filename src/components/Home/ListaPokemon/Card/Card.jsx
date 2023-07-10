// Componente Card
import React from "react";
import { Link } from "react-router-dom";

const Card = ({ pokemon }) => {
  if (pokemon) {
    const { name, img, ability } = pokemon;
    const queryString = `name=${name}` 
    const url = `/pokemon/${name}?${queryString}`;
    

    return (
      <section>
        <img src={img} alt={name} />
        <p>{ability}</p>
        <Link to={url}>{name}</Link>
      </section>
    );
  } else {
    return null;
  }
};

export default Card;

