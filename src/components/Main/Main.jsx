import React from "react";
import React, { useState, useEffect } from 'react'
import Search from './components/Search/Search';
import Card from './components/Card/Card';
import ListaPokemon from './components/ListaPokemon/ListaPokemon'

const Main = () => {
  const [search, setSearch] = useState('');
  const [list, setList] = useState({});

  useEffect(() => {

    const getPokemon = async () => {
      try{
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/`)
        const data = await response.json()
        setSearch(data)

      } catch (error) {
        console.log(error);
      }
    }
    getPokemon();
  }, [search])

}


  return (
    <>
      <Search setSearch={setSearch} />
      <Card />
      <ListaPokemon list={list} />
    </>
  )

export default Main;
