
/* ==================================================  Props handler ==================================================
Imports module */
import {BehaviorSubject} from "rxjs";

/*  Varables and function to use as bellow:
        Variables   = where the data is from_
        Prefix      = _DataType

    Functions = updateVariables_DataType
*/
const incommingSqlData = [];
const inputForm_Test = '';
const selectList_DataArr = [];
const selected_DataArrItem = "";

/* New Constructor ===============================================
Using in files:
       import { ImportVariable´s$ } from 'The props file handler';
       Insert into useffect:  
            ImportVariables$.subscribe( ) => {
          
            }); 
*/
export const incommingSqlData$ = new BehaviorSubject(incommingSqlData);
export const inputForm_Test$ = new BehaviorSubject(inputForm_Test);
export const selectList_DataArr$ = new BehaviorSubject(selectList_DataArr);
export const selected_DataArrItem$ = new BehaviorSubject(selected_DataArrItem);

// Functions ===============================================
export function updateIncommingSqlData(incommingSqlData){
    console.log(incommingSqlData);
    if (incommingSqlData) incommingSqlData$.next(incommingSqlData);
}
export function updateInputForm_Test(inputForm_Test){
    console.log(inputForm_Test);
    if (inputForm_Test) inputForm_Test$.next(inputForm_Test);
}
export function updateSelectList_DataArr(selectList_DataArr){
    console.log(selectList_DataArr);
    if (selectList_DataArr) selectList_DataArr$.next(selectList_DataArr);
}
export function updateSelected_DataArrItem(selected_DataArrItem){
    console.log(selected_DataArrItem);
    if (selected_DataArrItem) selected_DataArrItem$.next(selected_DataArrItem);
}
