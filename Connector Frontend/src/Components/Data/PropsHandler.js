
/* ==================================================  Props handler ==================================================
Imports module */
import {BehaviorSubject} from "rxjs";

/*  Varables and function to use as bellow:
        Variables   = where the data is from_
        Prefix      = _DataType

    Functions = updateVariables_DataType
*/
const inputForm_Test = '';

/* New Constructor ===============================================
Using in files:
       import { ImportVariable´s$ } from 'The props file handler';
       Insert into useffect:  
            ImportVariable´s$.subscribe( ) => {
          
            }); 
*/
export const inputForm_Test$ = new BehaviorSubject(inputForm_Test);


// Functions ===============================================
export function updateInputForm_Test(inputForm_Test){
    console.log(inputForm_Test);
    if (inputForm_Test) inputForm_Test$.next(inputForm_Test);
}