/* ================================================== label Form ==================================================
Import  modules */
 import React, { useState, useEffect } from 'react';
 
 // Import external files 
 
 // --------------------------- Using Instruction ------------------------------
 // Import file "PropsHandler" 
 import { updatelabel } from '../../Data/PropsHandler.js';
 
/* Perferm the following tasks in [PathForFilesFolder]:
    1 - Add --> import { .... } from 'Path to file Filename';
        :1 Add export const ... according the other lines;
    
    2 - Add 1:1 varables in the file you are importing the component through
   
    3 - Add        
            <1:1 varable´s
                prop 1={ }
                prop 2={ }
                ....
            />
*/

 let labelStyle = {
    fontSize: "0.8em",
    width: "200px"
}

export let Label = (props) =>{
    let [name, updateName ] = useState();    
    let [ labelStyle, updateLabelStyle ] = useState({});

    const { labelName, labelBellongsTo, labelId } = props;
    
    useEffect(() => {
        updateName(labelName);
        updateLabelStyle(labelStyle);
    }, [name, labelStyle]);
    
    return(
        <>
            <label htmlFor={ labelBellongsTo } id={ labelId } style={ labelStyle }>
                { name }
            </label>  
                
        </>          
    );
}