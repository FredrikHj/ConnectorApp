/* ================================================== Input Form ==================================================
Import  modules */
import React, { useState, useEffect } from 'react';

// Import external files 
import { ExtDataHeadLinesText, ExtDropDownList, ExtStyleHeader, ExtStyleMainContentView } from '../../Data/PathForFilesFolder';

// --------------------------- Using Instruction ------------------------------
// Import file "PropsHandler" 
import { incommingSqlData$ } from '../../Data/PropsHandler';

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
      incommingSqlData$.subscribe((incommingSqlData) => {
        console.log(incommingSqlData[4]);
        updateNavBarHeadlines(incommingSqlData[4]);


      }); 
    }, []);

    return(
      <>
        <ExtStyleHeader.ContentContainerRow1>
          <ExtStyleHeader.Col1>
           <ExtStyleHeader.AppName>{ headLines }</ExtStyleHeader.AppName>
          </ExtStyleHeader.Col1>
          <ExtStyleHeader.Col2>
            <ExtStyleHeader.NavBarLink>        
              {(navBarHeadlines !== undefined)
                ?
                navBarHeadlines.map((item, index) => {
                  return(
                    <ExtStyleHeader.NavButtons>
                        <button key={index} id={"navLinks" + index}>{item.name_Sv}</button>
                    </ExtStyleHeader.NavButtons>
                  );        
                })
                : "......"
              }
            </ExtStyleHeader.NavBarLink>
          </ExtStyleHeader.Col2>
        </ExtStyleHeader.ContentContainerRow1>
        
        <ExtStyleHeader.ContentContainerRow2>
          <ExtStyleHeader.NavBarButtons>

          </ExtStyleHeader.NavBarButtons>     
        </ExtStyleHeader.ContentContainerRow2>
      </>
    );
}