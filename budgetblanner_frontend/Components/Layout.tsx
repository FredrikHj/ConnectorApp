/* ================================================== MainApp ==================================================
Imports modules */
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head'

// Import external files 
import { ExtStyleBody, ExtHeaderView, ExtFooterView, ExtBudgetBalancedOverView, ExtTransactionsView } from '../data/PathForFilesFolder';
import { muiLayot } from '../data/muiHandler';

// Import file "PropsHandler" 
import { loadPath$, outgoingSqlgData$ } from '../data/PropsHandler';
//import { whichPath } from '../data/RunPath';

export default function LandingPage({children}: any) {
  const route = useRouter();
  
  const [ appHeadLine ] = useState("Budget planeraren");
  const [ appPath, updateAppPath ] = useState("");
  
  const [ isSqlDataReady, updateIsSqlDataReady ] = useState(false);
  
  useEffect(() => {
    if(route.pathname === "/_error" ) route.push({pathname: `${appPath}`});
    loadPath$.subscribe((whichPath) => {
      console.log(whichPath);
      if(whichPath) updateAppPath(whichPath);
    });
    outgoingSqlgData$.subscribe((isSqlData) => {
        if(isSqlDataReady === false) updateIsSqlDataReady(isSqlData);
    });

  }, [appHeadLine, appPath, isSqlDataReady]);
    console.log(route.pathname);
   
    return (
      <>
      <Head>
        {/* Adds the MUI Icons*/}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />

        <title>{appHeadLine}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <muiLayot.Container maxWidth='xl1' sx={ ExtStyleBody }>
        <ExtHeaderView appName={appHeadLine}/>
        {children}
        <ExtFooterView/>
      </muiLayot.Container>
    </>
  )
}
