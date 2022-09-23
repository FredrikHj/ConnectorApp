/* ================================================== Input Form ==================================================
Import  modules */
 import React, { useState, useEffect } from 'react';

/* --------------------------- Using Instruction ------------------------------
    Handle the inputs in --> Behavior - Subject from "rxjs"
        Import the file and set the running functions
        

    */
import { updateInputForm_Test } from './Data/PropsHandler';

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
    let [ valueStr, updateValueStr ] = useState();
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
                inputValue={ valueStr }
            />
        </>          
    );
}