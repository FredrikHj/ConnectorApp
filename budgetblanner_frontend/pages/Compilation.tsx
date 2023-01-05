/* ================================================== Input Form ==================================================
Import  modules */
import React, { useState, useEffect } from 'react';

 // Import external files 
import { ExtTableBodyView, ExtTableHead, ExtStyleCompilationView } from '../data/PathForFilesFolder';
import { muiLayot, muiComponents  } from '../data/muiHandler';

// --------------------------- Using Instruction ------------------------------
// Import file "PropsHandler" 
import { outgoingSqlgData$ } from '../data/PropsHandler';

/* Perferm the following tasks in the [PathForFilesFolder]:
    1 - Add import { .... } from 'Path to file Filename';
import { axiosGet } from '../data/Axios';
        :1 Add export const ... according the other lines;
    
    2 - Add 1:1 varables in the file you are importing the component through
   
    3 - Add        
            <1:1 varable´s
                prop 1={ }
                prop 2={ }
                ....
            />
*/
export default function BudgetBalancedOverView () {
    const [ incommingSqlDataReady, updateIsSqlDataReady ] = useState(undefined);
    const [ sqlCatListsTextArr, updateSqlCatListsTextArr ] = useState(undefined);
    const [ sqlCatHeadlineArr, updateSqlCatHeadlineArr ] = useState(undefined);
    const [ sqlMonthsHeadersArr, updateSqlMonthsHeadersArr ] = useState(undefined);
    const [ sqlMonthsCalcIncomeArr, updateSqlMonthsCalcIncomeArr ] = useState(undefined);
    const [ sqlMonthsCalceEpenditureArr, updateSqlMonthsCalcExpenditureArr ] = useState(undefined);

    
    useEffect(() => {
        outgoingSqlgData$.subscribe((sqlData: any) => {
            console.log(sqlData);
            if(sqlData.defaultDataReady === true) saveSqlData(sqlData);
        })
        
    },[incommingSqlDataReady, sqlCatHeadlineArr, sqlMonthsHeadersArr, sqlMonthsCalcIncomeArr, sqlMonthsCalceEpenditureArr ]);
    
    let saveSqlData = (sqlData: any) => {
        
        console.log('sqlData :', sqlData );

        updateIsSqlDataReady(sqlData.defaultDataReady);
        updateSqlCatListsTextArr(sqlData["compilationView"].categorieListsArr);
        updateSqlCatHeadlineArr(sqlData["compilationView"]["categorieHeadlinesArr"]);
        updateSqlMonthsHeadersArr(sqlData["compilationView"]["monthHeaders"]);
        updateSqlMonthsCalcIncomeArr(sqlData["compilationView"]["calc_income_yy"]);
        updateSqlMonthsCalcExpenditureArr(sqlData["compilationView"]["calc_expenditure_yy"]);
    }
    
    return(
        <muiLayot.Container maxWidth="xl2" sx={ExtStyleCompilationView.ViewContainer }>
            <muiComponents.TableStyling.TableContainer>
            {(incommingSqlDataReady === true) &&
            <>
                <muiComponents.TableStyling.Table sx={ ExtStyleCompilationView.TableContainer1 } id="T1">
                    <muiComponents.TableStyling.TableHead>
                        <ExtTableHead
                            whichTable={1} 
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

                <muiComponents.TableStyling.Table sx={ ExtStyleCompilationView.TableContainer2 } id="T2">
                    <muiComponents.TableStyling.TableHead>
                    <ExtTableHead
                        whichTable={2} 
                        headlinesCat={ sqlCatHeadlineArr }
                        headlinesMonth={ sqlMonthsHeadersArr }
                        />                     
                </muiComponents.TableStyling.TableHead>
                    <muiComponents.TableStyling.TableBody>
                        <ExtTableBodyView
                            whichTable={2}                          
                            headlinesCat={ sqlCatHeadlineArr }
                            catArrLists={ sqlCatListsTextArr[1] }   
                            categoyMonthCalc={ sqlMonthsCalceEpenditureArr }                            
                            />
                            {/*
                        */}
                    </muiComponents.TableStyling.TableBody>
                </muiComponents.TableStyling.Table>
            </>
            }
            </muiComponents.TableStyling.TableContainer>
        </muiLayot.Container>
    );
}