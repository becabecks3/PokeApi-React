import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Details = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const name = searchParams.get("name");
  const [pokemonDetails, setPokemonDetails] = useState(null);

  useEffect(() => {
    const pokemonDetails = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        if (response.ok) {
          const data = await response.json();
          setPokemonDetails(data);
        } else {
          throw new Error("No encontrado");
        }
      } catch (error) {
        console.log(error);
      }
    };

    pokemonDetails();
  }, [name]);

  return (
    <section>
      <h2>{name}</h2>
      {pokemonDetails && (
        <>
          <img src={pokemonDetails.sprites.front_default} alt={name} />
          <p>{pokemonDetails.abilities[0].ability.name}</p>
        </>
      )}
    </section>
  );
};

export default Details;
