/* ================================================== MainApp ==================================================
Imports modules */
import React, { useEffect } from 'react';

// React Router - ES6 modules
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Import external files 
import { ExtStyleBody, ExtHeaderView, ExtMainContentView } from './Components/Data/PathForFilesFolder';
import { muiLayot } from './Components/Data/muiHandler';

// Import file "PropsHandler" 
 
// Run axiosGetSQL
import { axiosGet } from './Components/Data/Axios';
axiosGet();
function MainPage(){
  return (
      <BrowserRouter>
       <muiLayot.Container maxWidth='xl1' sx={ ExtStyleBody }>
          <ExtHeaderView/>
          <Routes>
            <Route path="/" element={ <Navigate to={ "/Compilation"}/>} />
            <Route path="/Compilation" element={<ExtMainContentView />}/>
          </Routes>
       </muiLayot.Container>
      </BrowserRouter>
  );
}

export default MainPage;