/* ================================================== Input Form ==================================================
Import  modules */
 import React, { useState, useEffect } from 'react';

 // Import external files 
 import { ExtStyleMainContentView, ExtDropDownList, ExtCategorieHandlerView } from '../../Data/PathForFilesFolder';

// --------------------------- Using Instruction ------------------------------
// Import file "PropsHandler" 
import { updateInputForm_Test } from '../../Data/PropsHandler';

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


export let MainContentView = () =>{
   
    useEffect(() => {

    });

    return(
        <>
            <ExtStyleMainContentView.NavBar>
                <ExtDropDownList
                    listName={ "Mixat" }
                    listId={0}
                />
            </ExtStyleMainContentView.NavBar>
            <ExtStyleMainContentView.ContentContainer>
                <ExtCategorieHandlerView/>
            </ExtStyleMainContentView.ContentContainer>
        </>
    );
}