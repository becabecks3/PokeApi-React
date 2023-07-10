import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { UserContext } from "../../../context/userContext";


const Search = () => {

  const [input, setInput] = useState('');
  const [name, setName] = useState('');
  const {list, updateList} = useContext(UserContext);

  useEffect(() => {

    const getPokemon = async () => {
      try{
        if(name.length > 0){
          const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
          const data = await response.json()
          const info = {
            img: data.sprites.front_default,
            ability: data.abilities[0].ability.name,
            name: data.name
          }
          updateList(info);
  
        }
        
      } catch (error) {
        console.log(error);
      }
    }
    getPokemon();
  }, [name])

  const handleSubmit = (event) => {
    event.preventDefault();
    const filter = event.target.name.value
    setName(filter)
    setInput('')
  }


  const handleInputChange = (event) => {
    event.preventDefault();
    setInput(event.target.value);
    if (input !== '') {
      setTimeout(() => {
        const filterName = event.target.value;
        setName(filterName);
        setInput('')
      }, 2000)
    }
  };

 
  return(
    <>
      <section>
        <form onSubmit={handleSubmit}>
          <input type='text' name='name' placeholder="Ex: Bulbasaur" onChange={handleInputChange} value={input}/>
          <button>Search</button>
        </form>
      </section>
    </>
  )
};

export default Search;