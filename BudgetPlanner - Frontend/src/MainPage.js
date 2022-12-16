/* ================================================== MainApp ==================================================
Imports modules */
import React, { useState, useEffect } from 'react';
import {Helmet} from "react-helmet";

// React Router - ES6 modules & React Router Dom
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Import external files 
import { ExtStyleBody, ExtHeaderView, ExtBudgetBalancedOverView, ExtTransactionsView } from './Components/Data/PathForFilesFolder';
import { muiLayot } from './Components/Data/muiHandler';

// Import file "PropsHandler" 
import { loadPath$, outgoingSqlgData$ } from './Components/Data/PropsHandler';
import { whichPath } from './Components/Data/RunPath';

function MainPage(){
  const [ appHeadLine ] = useState("Budget planeraren");
  const [ appPath, updateAppPath ] = useState("");

  const [ isSqlDataReady, updateIsSqlDataReady ] = useState(false);

  useEffect(() => {
    loadPath$.subscribe((whichPath) => {
      if(whichPath) updateAppPath(whichPath);
    });
    outgoingSqlgData$.subscribe((isSqlData) => {
        if(isSqlDataReady === false) updateIsSqlDataReady(isSqlData);
    });

  }, [appHeadLine, appPath, isSqlDataReady]);
  console.log(whichPath.sv.home.url);
    return (
      <BrowserRouter>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{appHeadLine}</title>
        </Helmet>
        <muiLayot.Container maxWidth='xl1' sx={ ExtStyleBody }>
          <ExtHeaderView
            appName={ appHeadLine }
          />
          <Routes>
               <Route exact path={whichPath.sv.home.url} element={<ExtBudgetBalancedOverView />}/>
               <Route exact path={whichPath.sv.transactions.url} element={<ExtTransactionsView />}/>
          </Routes>
        </muiLayot.Container>
      </BrowserRouter>
  );
}
export default MainPage;