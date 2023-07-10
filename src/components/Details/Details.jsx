// Componente Details
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Details = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const name = searchParams.get("name");
  const [pokemonDetails, setPokemonDetails] = useState(null);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        if (response.ok) {
          const data = await response.json();
          setPokemonDetails(data);
        } else {
          throw new Error("Error al obtener los detalles del Pokémon");
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchPokemonDetails();
  }, [name]);

  return (
    <section>
      <h2>{name}</h2>
      {pokemonDetails && (
        <>
          <img src={pokemonDetails.sprites.front_default} alt={name} />
          <p>{pokemonDetails.abilities[0].ability.name}</p>
          {/* Mostrar más detalles según la estructura de datos de la API */}
        </>
      )}
    </section>
  );
};

export default Details;
