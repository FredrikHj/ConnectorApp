/* ================================================== label Form ==================================================
Import  modules */
 import React, { useState, useEffect } from 'react';

/* --------------------------- Using Instruction ------------------------------
    Handle the labels in --> Behavior - Subject from "rxjs"
        Import the file and set the running functions
        

    */
import { updatelabel } from './Data/PropsHandler';

 let labelStyle = {
    fontSize: "0.8em",
    width: "200px"
}

export let Label = (props) =>{
    let [name, updateName ] = useState();    
    let [ labelStyle, updateLabelStyle ] = useState({});

    const { labelName, labelId } = props;
    
    useEffect(() => {
        updateName(labelName);
        updateLabelStyle(labelStyle);
    }, [name, labelStyle]);
    
    return(
        <>
            <label id={ labelId } style={ labelStyle }>
                { name }
            </label>  
                
        </>          
    );
}