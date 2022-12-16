/* ================================================== Input Form ==================================================
Import  modules */
import React, { useState, useEffect } from 'react';

 // Import external files 
 import {ExtTableBodyView, ExtTableHead, ExtStyleMainContentView } from '../../Data/PathForFilesFolder';
 import { muiSurface, muiLayot, muiComponents  } from '../../Data/muiHandler';
 import { axiosGet } from '../../Data/Axios';
 
// --------------------------- Using Instruction ------------------------------
// Import file "PropsHandler" 
import { outgoingSqlgData$ } from '../../Data/PropsHandler';

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
export let TransactionsView = () =>{
    let [tableHeadLinesArr, updateTableHeadLinesArr ] = useState(undefined);
    let [tableCalcArr, updateTableCalcArr ] = useState(undefined);
    let [helpListsObj, updatehHelpListsObj ] = useState(undefined);
    let [newAddedObj, updateNewAddedObj ] = useState(undefined);

    useEffect(() => {
        outgoingSqlgData$.subscribe((sqlData) => {
            
            if(sqlData.defaultDataReady === true) saveSqlData(sqlData);
        })
    
    },[ ]);

let saveSqlData = (sqlData) => {
    console.log(sqlData);
    updateTableHeadLinesArr();
    updateTableCalcArr();
    updatehHelpListsObj();

}
    
    return(
        <muiLayot.Container maxWidth="xl2" sx={ExtStyleMainContentView.CompilationContainer}>
            {/*<muiComponents.TableStyling.Table sx={ ExtStyleMainContentView.TableContainer1 } id="T1">
            {(catHeadlines !== undefined ) && 
                monthHeadlines.map((item, index) => {
                const monthId = `month${item.id}`;

                return (
                    <muiComponents.TableStyling.TableCell sx={ ExtStyleMainContentView.TableHead.TableHeaderMonthContainer} key={`${monthId}`}>
                        <muiComponents.TableStyling.Table>
                            <muiComponents.TableStyling.TableBody>
                                <muiComponents.TableStyling.TableRow key={`row1_month${monthId}`}>
                                    <muiComponents.TableStyling.TableCell sx={ index === monthHeadlines.length ? ExtStyleMainContentView.TableHead.TableMonthLastHeadlines : ExtStyleMainContentView.TableHead.TableMonthHeadlines } key={`col${index}`} colSpan="3">
                                        {item.monthName_sv}
                                    </muiComponents.TableStyling.TableCell>
                                </muiComponents.TableStyling.TableRow>
                            </muiComponents.TableStyling.TableBody>
                        </muiComponents.TableStyling.Table>
                    </muiComponents.TableStyling.TableCell>
                );
            })}
            </muiComponents.TableStyling.Table>*/}
        </muiLayot.Container>
    );
}