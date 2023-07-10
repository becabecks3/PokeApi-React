import React from 'react'
import './App.css'
import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/Main'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { UserContext } from './context/userContext';

function App() {

  const [list, setList] = useState([]);

  const data = {
    list,
    setList
  }

  return (
    <>
    <BrowserRouter>
        <Header />
        <UserContext.Provider value={data} >
          <Main />
        </UserContext.Provider>
       <Footer />
      
    </BrowserRouter>
    </>
  )
}

export default App
