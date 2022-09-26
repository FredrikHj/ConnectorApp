/* ================================================== HeadBar ==================================================
Imports modules */
import React, { useState, useEffect } from 'react';

import './App.css';
import { InputForm } from './Components/Component-InputForm';
import { Label } from './Components/Component-Label';
import { getRest } from './Components/Data/MathFunctions';

function App() {
  let [testCategorie] = useState(500);
  useEffect(() => {
    console.log(getRest(testCategorie, 450));
  }, [testCategorie]);
  
  
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
