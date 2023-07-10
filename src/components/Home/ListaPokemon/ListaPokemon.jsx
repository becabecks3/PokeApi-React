import React, { useContext } from "react";
import { UserContext } from "../../../context/userContext";
import { v4 as uuidv4 } from "uuid";
import Card from "./Card/Card";

const ListaPokemon = () => {
  const { list } = useContext(UserContext);

  return (
    <section>
      {list.map((pokemon) => <Card key={uuidv4()} pokemon={pokemon} />)}
    </section>
  );
};

export default ListaPokemon;

