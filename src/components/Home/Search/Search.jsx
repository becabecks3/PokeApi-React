import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../../../context/userContext";

const Search = () => {
  const [input, setInput] = useState("");
  const [name, setName] = useState("");
  const { list, setList } = useContext(UserContext);

  useEffect(() => {
    let debounceTimer;

    const getPokemon = async () => {
      try {
        if (name.length > 0) {
          const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${name}`
          );
          const data = await response.json();
          const info = {
            img: data.sprites.front_default,
            ability: data.abilities[0].ability.name,
            name: data.name
          };

          const pokemonExists = list.find(pokemon => pokemon.name === name);
          if (!pokemonExists) {
            setList([...list, info]);
          }
        }
      } catch (error) {
        console.log(error);
      }
    };

   
    if (name.length > 0) {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        getPokemon();
      }, 1500);
    }

    return () => {
      clearTimeout(debounceTimer);
    };
  }, [name]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const filter = event.target.name.value;
    setName(filter);
    setInput("");
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <>
      <section >
        <form onSubmit={handleSubmit} className="form-container">
          <input
            type="text" name="name" placeholder="Ex: Bulbasaur" onChange={handleInputChange} value={input}/>
          <button className="form-button">Search</button>
        </form>
      </section>
    </>
  );
};

export default Search;
