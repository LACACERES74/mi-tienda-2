
import './App.css';
import NavBar from './componenst/NavBar';
import {ItenListContainer} from './ItenListContainer/ItenListContainer';
import Button from './ItenListContainer/Button';
import { useState } from 'react';
import count from './componenst/count';

function App() {

  console.log ("rederizar App")
 

  return (
    <>
    
    <NavBar/>

    <ItenListContainer greeting="bienvenidos a Amelia tejidos"/>

    </>
  );
}

export default App;
