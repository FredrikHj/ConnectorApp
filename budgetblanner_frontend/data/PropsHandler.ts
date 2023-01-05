/* ==================================================  Props handler ==================================================
Imports module */
import {BehaviorSubject} from "rxjs";

/*  Varables and function to use as bellow:
        Variables   = where the data is from_
        Prefix      = _DataType

    Functions = updateVariables_DataType
*/
let loadPath: string;
loadPath = "/Compilation";

let isIncommingSqlData: object;
isIncommingSqlData = {};

let incommingHeaderNavlinks: Array<string>;
incommingHeaderNavlinks = [];

let inputForm_Test: string;
inputForm_Test = '';

let selectList_DataArr: Array<any>;
selectList_DataArr = [];

let selected_DataArrItem: string;
selected_DataArrItem = "";

/* New Constructor ===============================================
Using in files:
       import { ImportVariable´s$ } from 'The props file handler';
       Insert into useffect:  
            ImportVariables$.subscribe( ) => {
          
            }); 
*/
export let loadPath$ = new BehaviorSubject(loadPath);

export let outgoingSqlgData$ = new BehaviorSubject(isIncommingSqlData);
export let incommingHeaderNavlinks$ = new BehaviorSubject(incommingHeaderNavlinks);

export let inputForm_Test$ = new BehaviorSubject(inputForm_Test);
export let selectList_DataArr$ = new BehaviorSubject(selectList_DataArr);
export let selected_DataArrItem$ = new BehaviorSubject(selected_DataArrItem);

// Functions ===============================================

export function updateLoadPath(incommingPath: string){
    if (loadPath) loadPath$.next(incommingPath);
}
export function updateIncommingSqlData(isSqlDataIncomming: boolean, incommingSqlData: any ){
    console.log(incommingSqlData);
    if (isSqlDataIncomming === true) {
        console.log(isSqlDataIncomming);
        
        outgoingSqlgData$.next(incommingSqlData);
        incommingHeaderNavlinks$.next(incommingSqlData.navLinks);
    }
}
export function updateInputForm_Test(inputForm_Test: any ){
    if (inputForm_Test) inputForm_Test$.next(inputForm_Test);
}
export function updateSelectList_DataArr(selectList_DataArr: any ){
    
    if (selectList_DataArr) selectList_DataArr$.next(selectList_DataArr);
}
export function updateSelected_DataArrItem(selected_DataArrItem: any ){
    
    if (selected_DataArrItem) selected_DataArrItem$.next(selected_DataArrItem);
}