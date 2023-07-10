import React, { useContext, useEffect } from "react";
import { UserContext } from "../../../context/userContext";
import { v4 as uuidv4 } from "uuid";
import Card from "./Card/Card";

const ListaPokemon = () => {

  const {list, updateList} = useContext(UserContext)
  console.log(list);

  

  return (
    <ul>
        {list && list.length > 0 ? list.map(pokemon => {
            return <Card key={uuidv4()}  pokemon={pokemon}/>}
          ): null}
    </ul>
  );
};

export default ListaPokemon;
