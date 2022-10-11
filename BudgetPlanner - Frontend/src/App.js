/* ================================================== HeadBar ==================================================
Imports modules */
import React, { useState, useEffect } from 'react';

import './App.css';

// Import external files 
import { ExtInputForm, ExtLabel, ExtHeaderView, ExtMainContentView, ExtFooterView, ExtStyleBody  } from './Components/Data/PathForFilesFolder';

// Import file "PropsHandler" 
import { updateSelectList_DataArr } from './Components/Data/PropsHandler';
 

// Run axiosGetSQL
import { axiosGet } from './Components/Data/Axios';
axiosGet();
function App() {
  let [categorieListData] = useState(["Lön","Bidrag","El","TFN","Bredband"]);
  useEffect(() => {
    updateSelectList_DataArr(categorieListData);
  }, [categorieListData]);
  
  
  return (
    <ExtStyleBody.BodyContainer>

      <ExtStyleBody.HeaderContainer>
        <ExtHeaderView/>
      </ExtStyleBody.HeaderContainer>

      <ExtStyleBody.ContentContainer>
        <ExtMainContentView/>
      </ExtStyleBody.ContentContainer>

      <ExtStyleBody.FooterContainer>
        <ExtFooterView/>
      </ExtStyleBody.FooterContainer>
      <br></br>
  </ExtStyleBody.BodyContainer>
  );
}

export default App;
