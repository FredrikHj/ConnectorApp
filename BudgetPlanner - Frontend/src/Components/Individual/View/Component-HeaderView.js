/* ================================================== Input Form ==================================================
Import  modules */
 import React, { useState, useEffect } from 'react';

 // Import external files 
 import { ExtDataHeadLinesText, ExtDropDownList, ExtStyleHeadlinesText, ExtStyleMainContentView } from '../../Data/PathForFilesFolder';

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
    const [catIncome, updateCatIncome ]=useState([]);
    const [catExpend, updateCatExpend ]=useState([]);
    const [catPayOpt, updateCatPayOpt ]=useState([]);
    
    useEffect(() => {
      incommingSqlData$.subscribe((incommingSqlData) => {
        console.log(incommingSqlData);
        updateCatIncome(incommingSqlData[0]);
        updateCatExpend(incommingSqlData[1]);
        updateCatPayOpt(incommingSqlData[2]);
      }); 
    }, []);

    return(
      <>
        <ExtStyleHeadlinesText.HeadlinesHeader>
          <section>
            { headLines }
          </section>
          <section>        
            rdfegsrg
          </section>

          <ExtStyleMainContentView.NavBar>        

          </ExtStyleMainContentView.NavBar>
          
          


        </ExtStyleHeadlinesText.HeadlinesHeader>   
      </>
    );
}