/* ================================================== Input Form ==================================================
Import  modules */
import React, { useState, useEffect } from 'react';

// Import external files 
import { ExtDataHeadLinesText, ExtStyleHeader } from '../../Data/PathForFilesFolder';
import { muiLayot, muiHelperObj, muiComponents } from '../../Data/muiHandler';

// --------------------------- Using Instruction ------------------------------
// Import file "" 
import { incommingSqlDataHeadlineTexs$ } from '../../Data/PropsHandler';

/* Perferm the following tasks in the [PathForFilesFolder]:
    1 - Add import { .... } from 'Path to file Filename';
        :1 Add export const ... according the other lines;
    
    2 - Add 1:1 varables in the file you are importing the component through
   
    3 - Add        
            <1:1 varable´s
                prop 1={ }
                prop 2={ }
                ....
            />
*/
export let HeaderView = () =>{
    const [ headLines ]=useState(ExtDataHeadLinesText.appName)
    const [ navBarHeadlines, updateNavBarHeadlines ]=useState();

    useEffect(() => {
      incommingSqlDataHeadlineTexs$.subscribe((sqlDataHeadlineTexs) => {
        console.log(sqlDataHeadlineTexs);
        updateNavBarHeadlines(sqlDataHeadlineTexs.navLinks);
      }); 
    }, [headLines, navBarHeadlines]);

    return(
      <muiLayot.Grid2 sx={ ExtStyleHeader.ContentContainer}>

          <muiHelperObj.gruidItem sx={ ExtStyleHeader.AppName }>{ headLines }</muiHelperObj.gruidItem>
          <muiHelperObj.gruidItem sx={ ExtStyleHeader.HeadEmptySpace }></muiHelperObj.gruidItem>
            <muiHelperObj.gruidItem sx={ExtStyleHeader.NavButtonsGrid }>
              {(navBarHeadlines !== undefined)
                ?
                navBarHeadlines.map((item, index) => {
                  return(
                    <muiComponents.Button sx={ ExtStyleHeader.NavButtons} key={item.id} id={`navLinks${item.id}`}>
                      {item.name_Sv}
                    </muiComponents.Button>
                  );        
                })
                : "......"
              }
            </muiHelperObj.gruidItem>    
      </muiLayot.Grid2>
    );
  }