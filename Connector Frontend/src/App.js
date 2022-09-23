/* ================================================== HeadBar ==================================================
Imports modules */
import React, { useState, useEffect } from 'react';

import './App.css';
import { InputForm } from './Components/Component-InputForm';
import { Label } from './Components/Component-Label';
import { MathFunctions } from './Components/MathFunctions';
let testArr =[32,34,434,43,324,34,324,34];

function App() {
  useEffect(() => {
  }, []);
  
  console.log(MathFunctions.fullyTotArr(testArr));

  return (
    <div className="App">

      <Label
        labelName={ "Fredrik" }
        labelId={ 0 }
      />
      <br></br>
    <InputForm
        inputType={ "text" }
        inputId={ 0 }
    /> 
  </div>
  );
}

export default App;
