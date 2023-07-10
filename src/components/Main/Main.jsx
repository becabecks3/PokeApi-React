import React from "react";
import {Routes, Route} from 'react-router-dom'
import Details from '../Details/Details'
import New from '../New/New'
import Home from '../Home/Home'
import Card from '../Home/ListaPokemon/Card/Card'

const Main = () => {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pokemon/:id' element={<Details />}/>
        <Route path='/new' element={<New />}/>

      </Routes>
      </>
  )

}


export default Main;
