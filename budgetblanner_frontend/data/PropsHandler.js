"use strict";
exports.__esModule = true;
exports.updateSelected_DataArrItem = exports.updateSelectList_DataArr = exports.updateInputForm_Test = exports.updateIncommingSqlData = exports.updateLoadPath = exports.selected_DataArrItem$ = exports.selectList_DataArr$ = exports.inputForm_Test$ = exports.incommingHeaderNavlinks$ = exports.outgoingSqlgData$ = exports.loadPath$ = void 0;
/* ==================================================  Props handler ==================================================
Imports module */
var rxjs_1 = require("rxjs");
/*  Varables and function to use as bellow:
        Variables   = where the data is from_
        Prefix      = _DataType

    Functions = updateVariables_DataType
*/
var loadPath;
loadPath = "/Compilation";
var isIncommingSqlData;
isIncommingSqlData = {};
var incommingHeaderNavlinks;
incommingHeaderNavlinks = [];
var inputForm_Test;
inputForm_Test = '';
var selectList_DataArr;
selectList_DataArr = [];
var selected_DataArrItem;
selected_DataArrItem = "";
/* New Constructor ===============================================
Using in files:
       import { ImportVariable´s$ } from 'The props file handler';
       Insert into useffect:
            ImportVariables$.subscribe( ) => {
          
            });
*/
exports.loadPath$ = new rxjs_1.BehaviorSubject(loadPath);
exports.outgoingSqlgData$ = new rxjs_1.BehaviorSubject(isIncommingSqlData);
exports.incommingHeaderNavlinks$ = new rxjs_1.BehaviorSubject(incommingHeaderNavlinks);
exports.inputForm_Test$ = new rxjs_1.BehaviorSubject(inputForm_Test);
exports.selectList_DataArr$ = new rxjs_1.BehaviorSubject(selectList_DataArr);
exports.selected_DataArrItem$ = new rxjs_1.BehaviorSubject(selected_DataArrItem);
// Functions ===============================================
function updateLoadPath(incommingPath) {
    if (loadPath)
        exports.loadPath$.next(incommingPath);
}
exports.updateLoadPath = updateLoadPath;
function updateIncommingSqlData(isSqlDataIncomming, incommingSqlData) {
    console.log(incommingSqlData);
    if (isSqlDataIncomming === true) {
        console.log(isSqlDataIncomming);
        exports.outgoingSqlgData$.next(incommingSqlData);
        exports.incommingHeaderNavlinks$.next(incommingSqlData.navLinks);
    }
}
exports.updateIncommingSqlData = updateIncommingSqlData;
function updateInputForm_Test(inputForm_Test) {
    if (inputForm_Test)
        exports.inputForm_Test$.next(inputForm_Test);
}
exports.updateInputForm_Test = updateInputForm_Test;
function updateSelectList_DataArr(selectList_DataArr) {
    if (selectList_DataArr)
        exports.selectList_DataArr$.next(selectList_DataArr);
}
exports.updateSelectList_DataArr = updateSelectList_DataArr;
function updateSelected_DataArrItem(selected_DataArrItem) {
    if (selected_DataArrItem)
        exports.selected_DataArrItem$.next(selected_DataArrItem);
}
exports.updateSelected_DataArrItem = updateSelected_DataArrItem;
