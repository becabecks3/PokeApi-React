import React, { useContext } from "react";
import ListaPokemon from "./ListaPokemon/ListaPokemon";
import Search from "./Search/Search";

const Home = () => {

  return (
    <>
    <Search />
    <ListaPokemon />
    </>
  );
};

export default Home;
