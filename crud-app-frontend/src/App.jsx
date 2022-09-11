import React, { useState, useEffect } from 'react';
import './App.css';
import './PersonListing.jsx';
import axios from 'axios';
import PersonListing from './PersonListing.jsx';
const backendAdd = `http://localhost:8081/`;


const App = () => {


  const getAllUsers = () => {
    axios.get(`${backendAdd}person/list`)
    .then((response) => {
      console.log(response.data);
    })
    .catch(error => console.error(`Error: ${error}`));
  }

  useEffect(() => {
    getAllUsers();
  }, []);




  return (
    <div className="App">
      <header className="App-header">
        <PersonListing/>

      </header>
    </div>
  );
}

export default App;
