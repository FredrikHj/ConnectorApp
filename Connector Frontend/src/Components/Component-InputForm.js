/* ================================================== Input Form ==================================================
Import  modules */
 import React, { useState, useEffect } from 'react';
 import styled from 'styled-components';
 
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
        console.log(inputType);
        console.log(inputStyle);
        updateFormType(inputType);
        if (inputType === "text") {
            updateFormStyle(inputStyle.inputStyleText);
        }
        if (inputType === "number")  {
            updateFormStyle(inputStyle.inputStyleNumber);
        }
        console.log(formStyle);
});
    
    let runInputOnChange = (e) => {
        // Gets the element
        let targetBtnId = e.target.id;     
        updateValueStr(targetBtnId);
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