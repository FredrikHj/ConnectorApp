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
// Run the sql request
axiosGet("/Reload_compilations", "csda");
export let BudgetBalancedOverView = () =>{
    const [ incommingSqlDataReady, updateIsSqlDataReady ] = useState(undefined);
    const [ sqlCatListsTextArr, updateSqlCatListsTextArr ] = useState(undefined);
    const [ sqlCatHeadlineArr, updateSqlCatHeadlineArr ] = useState(undefined);
    const [ sqlMonthsHeadersArr, updateSqlMonthsHeadersArr ] = useState(undefined);
    const [ sqlMonthsCalcIncomeArr, updateSqlMonthsCalcIncomeArr ] = useState(undefined);
    const [ sqlMonthsCalceEpenditureArr, updateSqlMonthsCalcExpenditureArr ] = useState(undefined);

    useEffect(() => {
        outgoingSqlgData$.subscribe((sqlData) => {
            if(sqlData.defaultDataReady === true) saveSqlData(sqlData);
        })
        
    },[incommingSqlDataReady, sqlCatHeadlineArr, sqlMonthsHeadersArr, sqlMonthsCalcIncomeArr, sqlMonthsCalceEpenditureArr ]);
    
    let saveSqlData = (sqlData) => {
        console.log('sqlData :', sqlData );
        updateIsSqlDataReady(sqlData.defaultDataReady);
        updateSqlCatListsTextArr(sqlData["compilationView"].categorieListsArr);
        updateSqlCatHeadlineArr(sqlData["compilationView"]["categorieHeadlinesArr"]);
        updateSqlMonthsHeadersArr(sqlData["compilationView"]["monthHeaders"]);
        updateSqlMonthsCalcIncomeArr(sqlData["compilationView"]["calc_income_yy"]);
        updateSqlMonthsCalcExpenditureArr(sqlData["compilationView"]["calc_expenditure_yy"]);
    }
    
    return(
        <muiLayot.Container maxWidth="xl2" sx={ExtStyleMainContentView.CompilationContainer }>
            <muiComponents.TableStyling.TableContainer>
            {(incommingSqlDataReady === true) &&
            <>
                <muiComponents.TableStyling.Table sx={ ExtStyleMainContentView.TableContainer1 } id="T1">
                    <muiComponents.TableStyling.TableHead>
                        <ExtTableHead
                            whichHead={ "compilationView" }
                            headlinesCat={ sqlCatHeadlineArr }
                            headlinesMonth={ sqlMonthsHeadersArr }
                        />                     
                    </muiComponents.TableStyling.TableHead>
                    <muiComponents.TableStyling.TableBody>
                        <ExtTableBodyView
                            whichTable={1}                          
                            headlinesCat={ sqlCatHeadlineArr }
                            catArrLists={ sqlCatListsTextArr[0] }
                            categoyMonthCalc={ sqlMonthsCalcIncomeArr }
                        />
                    </muiComponents.TableStyling.TableBody>
                </muiComponents.TableStyling.Table>

                <br></br><br></br>

                <muiComponents.TableStyling.Table sx={ ExtStyleMainContentView.TableContainer2 } id="T2">
                    <muiComponents.TableStyling.TableHead>
                        <ExtTableHead
                            whichHead={ "compilationView" }
                            headlinesCat={ sqlCatHeadlineArr }
                            headlinesMonth={ sqlMonthsHeadersArr }
                            />                     
                </muiComponents.TableStyling.TableHead>
                    <muiComponents.TableStyling.TableBody>
                            {
                            /*
                        <ExtTableBodyView
                            whichTable={2}                          
                            headlinesCat={ sqlCatHeadlineArr }
                            catArrLists={ sqlCatListsTextArr[1] }   
                            categoyCalc={ sqlMonthsCalceEpenditureArr }                            
                        />
        */}
            </muiComponents.TableStyling.TableBody>
                </muiComponents.TableStyling.Table>
            </>


            }    
            </muiComponents.TableStyling.TableContainer>
        </muiLayot.Container>
    );
}