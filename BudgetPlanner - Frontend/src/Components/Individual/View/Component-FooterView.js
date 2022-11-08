/* ================================================== Input Form ==================================================
Import  modules */
import React, { useState, useEffect } from 'react';

 // Import external files 
import { ExtStyleFooterView } from '../../Data/PathForFilesFolder';
import { muiLayot, muiHelperObj, muiComponents, muiCSS } from '../../Data/muiHandler';

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


export let FooterView = () =>{
   
    useEffect(() => {

    }, []);

    return(
        <muiLayot.Container maxWidth="lg" position="bottom">
            <muiLayot.Box py={6} display="flex" flexWrap="wrap" alignItems="left">
                <muiCSS.Typography color="textSecondary" component="p" variant="caption" gutterBottom={false}>{`© 2022 Fredrik Hjärpe - All rights reserved`}</muiCSS.Typography>
            </muiLayot.Box>
        </muiLayot.Container>
    );
}