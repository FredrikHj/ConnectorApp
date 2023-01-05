/* ================================================== Input Form ==================================================
Import  modules */
import React, { useState, useEffect } from 'react';

 // Import external files 
 import {ExtStyleTransactionView } from '../data/PathForFilesFolder';
 import {muiLayot, muiComponents, muiIcons } from '../data/muiHandler';

// --------------------------- Using Instruction ------------------------------
// Import file "PropsHandler" 
import { outgoingSqlgData$ } from '../data/PropsHandler';

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
export default function TransactionsView () {
    let [tableHeadLinesArr, updateTableHeadLinesArr ] = useState(undefined);
    let [tableCalcArr, updateTableCalcArr ] = useState(undefined);
    let [tableCalcCols, updateTableCalcCols ] = useState(undefined);
    let [dropDownListsObj, updateDropDownListsObj ] = useState(undefined);
    let [newAddedObj, updateNewAddedObj ] = useState(undefined);
    let [mordlanPopup, updateMordlanPopup ] = useState(false);
    
    useEffect(() => {
        outgoingSqlgData$.subscribe((sqlData: any) => {
            console.log(sqlData);
            if(tableHeadLinesArr === undefined) saveSqlData(sqlData);
            if(tableCalcArr !== undefined) createTableCalcCols(); 
        })
        
        
    }, [tableHeadLinesArr, tableCalcArr, dropDownListsObj, newAddedObj, mordlanPopup ]);
    
    let saveSqlData = (sqlData: any) => {
        // Run the sql request

        console.log(sqlData);
        updateTableHeadLinesArr(sqlData["transactions"].transactions_header);
        updateTableCalcArr(sqlData["transactions"]["transactions_calcdata"]);
        updateDropDownListsObj([
            sqlData["compilationView"]["categorieListsArr"][0], 
            sqlData["compilationView"]["categorieListsArr"][1], 
            sqlData["compilationView"]["categorieListsArr"][2], 
        ]);
        updateNewAddedObj({});
    }
    let createTableCalcCols = () => {
        let colsArr: string[];
        colsArr = [];
        console.log(colsArr);
            
        for (const iterator in tableCalcArr[0]) {
            colsArr.push(iterator);
        }
        console.log(colsArr);
        
        updateTableCalcCols(colsArr);
    }
    let RunAddTransactionMordal = () => {updateMordlanPopup(true);}

    // Felet mer map = Löses senare --> Inte akut
    return(
        <>
            <button onClick={RunAddTransactionMordal}>
                <muiIcons.icons sx={{ color: muiIcons.colors.green[500], marginTop: 2}}>add_circle</muiIcons.icons>
            </button>
            {(mordlanPopup === true)
                ?
                    <section>
                        rdeg
                    </section>
                 : ""}           
            <muiLayot.Container maxWidth="xl2" sx={ExtStyleTransactionView.ViewContainer}>
                <muiComponents.TableStyling.TableContainer>
                    <muiComponents.TableStyling.Table sx={ ExtStyleTransactionView.TableContainer } id="T1">
                        <muiComponents.TableStyling.TableHead sx={ ExtStyleTransactionView.TableHead.TableHeaderContainer }>
                            <muiComponents.TableStyling.TableRow> 
                                {(tableHeadLinesArr !== undefined ) &&
                                    tableHeadLinesArr.map((item: any, index: number) => {
                                        return(
                                            <muiComponents.TableStyling.TableCell 
                                            sx={[ 
                                                (index === 0 && ExtStyleTransactionView.TableHead.TableHeaderId),
                                                        (index === 1 && ExtStyleTransactionView.TableHead.TableHeaderDate),
                                                        (index === 2 && ExtStyleTransactionView.TableHead.TableHeaderPp),
                                                        (index === 3 && ExtStyleTransactionView.TableHead.TableHeaderCat),
                                                        (index === 4 && ExtStyleTransactionView.TableHead.TableHeaderCompany),
                                                        (index === 5 && ExtStyleTransactionView.TableHead.TableHeaderPop),
                                                        (index === 6 && ExtStyleTransactionView.TableHead.TableHeaderNotes),
                                                        (index === 7 && ExtStyleTransactionView.TableHead.TableHeaderQue),
                                                        (index === 8 && ExtStyleTransactionView.TableHead.TableHeaderSum)
                                                    ]} key={`headerCell${index}`}>
                                                {item.name_Sv}
                                            </muiComponents.TableStyling.TableCell>
                                        );
                                    })
                                    
                                }
                                <muiComponents.TableStyling.TableCell sx={ ExtStyleTransactionView.TableHead.TableHeaderTool } key={`headerCell`}>
                                    Verktyg
                                </muiComponents.TableStyling.TableCell>
                            </muiComponents.TableStyling.TableRow> 
                        </muiComponents.TableStyling.TableHead>
                        <muiComponents.TableStyling.TableBody sx={ ExtStyleTransactionView.TableBody.TableBodyContainer }>
                        {(tableHeadLinesArr !== undefined ) &&
                            tableCalcArr.map((itemRowCalc: any, indexRowCalc: number) => {
                                return(
                                    <muiComponents.TableStyling.TableRow> 
                                    {tableHeadLinesArr.map((itemColCalc: any, indexColCalc: number) => {                                           
                                        return(
                                            <muiComponents.TableStyling.TableCell 
                                            sx={[ 
                                                (indexColCalc === 0 && ExtStyleTransactionView.TableHead.TableHeaderId),
                                                (indexColCalc === 1 && ExtStyleTransactionView.TableHead.TableHeaderDate),
                                                    (indexColCalc === 2 && ExtStyleTransactionView.TableHead.TableHeaderPp),
                                                    (indexColCalc === 3 && ExtStyleTransactionView.TableHead.TableHeaderCat),
                                                    (indexColCalc === 4 && ExtStyleTransactionView.TableHead.TableHeaderCompany),
                                                    (indexColCalc === 5 && ExtStyleTransactionView.TableHead.TableHeaderPop),
                                                    (indexColCalc === 6 && ExtStyleTransactionView.TableHead.TableHeaderNotes),
                                                    (indexColCalc === 7 && ExtStyleTransactionView.TableHead.TableHeaderQue),
                                                    (indexColCalc === 8 && ExtStyleTransactionView.TableHead.TableHeaderSum)
                                                    ]} key={`headerCell${indexColCalc}`}>
                                                {tableCalcCols != undefined && tableCalcArr[0][tableCalcCols[indexColCalc]]}
                                            </muiComponents.TableStyling.TableCell>
                                        );
                                    })}
                                    <muiComponents.TableStyling.TableCell sx={ ExtStyleTransactionView.TableHead.TableHeaderTool } key={`headerCell`}>
                                        Verktyg
                                    </muiComponents.TableStyling.TableCell>
                                </muiComponents.TableStyling.TableRow> 
                                )
                            })                               
                        }

                        </muiComponents.TableStyling.TableBody>
                    </muiComponents.TableStyling.Table>
                </muiComponents.TableStyling.TableContainer>
            </muiLayot.Container>
           </>
        );
}