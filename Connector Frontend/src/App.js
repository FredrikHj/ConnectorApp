/* ================================================== HeadBar ==================================================
Imports modules */
import React, { useState, useEffect } from 'react';

import './App.css';
import { InputForm } from './Components/Component-InputForm';

function App() {
  useEffect(() => {
  }, []);

  return (
    <div className="App">
      <InputForm
        inputType={ "text" }
        inputId={ 0 }
      /> 
    </div>
  );
}

export default App;