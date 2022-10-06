/* ================================================== Input Form ==================================================
Import  modules */
 import React, { useState, useEffect } from 'react';

 // Import external files 

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

 let inputStyle = {
    inputStyleText: {
        fontSize: "0.8em",
        width: "200px"
    },
    inputStyleNumber: {    
        fontSize: "0.8em",
        width: "60px"
    }
}

export let InputForm = (props) =>{
    let [ formType, updateFormType ] = useState();    
    let [ formStyle, updateFormStyle ] = useState();
    let [ valueStr, updateValueStr ] = useState("");
    const { inputType, inputId } = props;
    
    useEffect(() => {
        updateFormType(inputType);
        if (inputType === "text") {
            updateFormStyle(inputStyle.inputStyleText);
        }
        if (inputType === "number")  {
            updateFormStyle(inputStyle.inputStyleNumber);
        }
    }, [valueStr]);
    
    let runInputOnChange = (e) => {
        // Gets the element
        let targetBtnId = e.target.value;     
        updateValueStr(targetBtnId);
        updateInputForm_Test(targetBtnId);
    }
    return(
        <>
            <input 
                type={ formType }
                id={ inputId }
                style={ formStyle }
                onChange={ runInputOnChange }
                value={ valueStr }
            />
        </>          
    );
}