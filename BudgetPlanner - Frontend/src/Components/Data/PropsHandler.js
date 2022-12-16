/* ==================================================  Props handler ==================================================
Imports module */
import {BehaviorSubject} from "rxjs";

/*  Varables and function to use as bellow:
        Variables   = where the data is from_
        Prefix      = _DataType

    Functions = updateVariables_DataType
*/
const loadPath = "/Compilation";
const isIncommingSqlData = false;
const incommingHeaderNavlinks = [];

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
export const loadPath$ = new BehaviorSubject(loadPath);

export const outgoingSqlgData$ = new BehaviorSubject(isIncommingSqlData);
export const incommingHeaderNavlinks$ = new BehaviorSubject(incommingHeaderNavlinks);


export const inputForm_Test$ = new BehaviorSubject(inputForm_Test);
export const selectList_DataArr$ = new BehaviorSubject(selectList_DataArr);
export const selected_DataArrItem$ = new BehaviorSubject(selected_DataArrItem);

// Functions ===============================================

export function updateLoadPath(incommingPath){
    if (loadPath) loadPath$.next(incommingPath);
}
export function updateIncommingSqlData(isSqlDataIncomming, incommingSqlData){
    console.log(incommingSqlData);
    if (isSqlDataIncomming === true) {
        outgoingSqlgData$.next(incommingSqlData);
        incommingHeaderNavlinks$.next(incommingSqlData.navLinks);
    }
}
export function updateInputForm_Test(inputForm_Test){
    if (inputForm_Test) inputForm_Test$.next(inputForm_Test);
}
export function updateSelectList_DataArr(selectList_DataArr){
    
    if (selectList_DataArr) selectList_DataArr$.next(selectList_DataArr);
}
export function updateSelected_DataArrItem(selected_DataArrItem){
    
    if (selected_DataArrItem) selected_DataArrItem$.next(selected_DataArrItem);
}