/* ================================================== Input Form ==================================================
Import  modules */
import React, { useState, useEffect } from 'react';

 // Import external files 
import { ExtStyleMainContentView } from '../../Data/PathForFilesFolder';
import { muiComponents } from '../../Data/muiHandler';

// --------------------------- Using Instruction ------------------------------
// Import file "PropsHandler" 

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
            

export let TableBodyView = (props) =>{

    let [ firstLoad, updateFirstLoad ] = useState(true);
    let [ categorieList, updateCatgorieList ] = useState(undefined);
    let [ categorieMonthCalc, updateCategorieMonthCalc ] = useState(undefined);
    let [ tableNr, updateTableNr ] = useState(0);
    let [ monthArr ] = useState([1,2,3,4,5,6,7,8,9,10,11,12]);
    let [ categorieMonthSumCalc, updateCategorieMonthSumCalc ] = useState([0,0]);

    useEffect(() => {                
        if(firstLoad === true) {
            updateFirstLoad(false);
        }
        if(categorieList === undefined) loadSqlDataLists(props);
    }, [firstLoad, props, categorieList, categorieMonthCalc, tableNr, monthArr, categorieMonthSumCalc]);
    
    let loadSqlDataLists = (props) => {
        console.log(props);
        updateTableNr(props.whichTable);
        updateCatgorieList(props.catArrLists);

        let catListArr = props.categoyMonthCalc;
        updateCategorieMonthCalc(catListArr);
        
    }
    // Send both category object and the current months to be calculated into current and outcome budget / category row and months!
    let calcMonthSumCol = (monthNr) => {
        let colCurrent = 0;
        let colOutcome = 0;
        let calcedColCurrent = 0;
        let calcedColOutcome = 0;

        for (let index = 0; index < categorieMonthCalc.length; index++) {
            colCurrent = categorieMonthCalc[index][`month${monthNr}.budget_current`];             
            colOutcome = categorieMonthCalc[index][`month${monthNr}.budget_outcome`];

            // Budget Currrent
            calcedColCurrent += colCurrent;             
            
            //Budget Outcome
            calcedColOutcome += colOutcome;
        }             
        return [calcedColCurrent, calcedColOutcome]; 
    }
    let checkDiffSum = (catRow, monthNr) => {
        let colCurrent = 0;
        let colOutcome = 0;
        let colDiffSum = 0;

        colCurrent = categorieMonthCalc[catRow][`month${monthNr}.budget_current`];             
        colOutcome = categorieMonthCalc[catRow][`month${monthNr}.budget_outcome`];
        colDiffSum = colOutcome - colCurrent;
        
        return colDiffSum; 
    }
    
    let checkDiffSumPosNeg = (catRow, monthNr) => {
        let colCurrent = 0;
        let colOutcome = 0;
        let colDiffSum = 0;
        let whatDiff;
        colCurrent = categorieMonthCalc[catRow][`month${monthNr}.budget_current`];             
        colOutcome = categorieMonthCalc[catRow][`month${monthNr}.budget_outcome`];
                    
        whatDiff = colCurrent === colOutcome ? " " : (colCurrent > colOutcome ? "+" : "-");
        return whatDiff;
    }
    return(       
        <>
        {(categorieList !== undefined) &&
            categorieMonthCalc.map((catItem, catIndex) => {
                return(
                    <muiComponents.TableStyling.TableRow>
                        <muiComponents.TableStyling.TableCell 
                            sx={[tableNr === 1 && ExtStyleMainContentView.TableBody.TableCatSubHeadlinesT1, tableNr === 2 && ExtStyleMainContentView.TableBody.TableCatSubHeadlinesT2]} key={`cat_${catIndex}`} id={`cat_${catItem.name_sv}`}>
                            {catItem.name_sv}
                        </muiComponents.TableStyling.TableCell>  
                        {(categorieMonthCalc !== undefined) &&
                            monthArr.map((inMonth) => {

                                // Fixed spaces in a int
                                const addCommas = num => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
                                const removeNonNumeric = num => num.toString().replace(/[^0-9]/g, "");
                                
                                    let currentCorrectFormat = addCommas(removeNonNumeric(catItem[`month${inMonth}.budget_current`]));
                                    let outcomeCorrectFormat = addCommas(removeNonNumeric(catItem[`month${inMonth}.budget_outcome`]));
                                    
                                    let colsDiffValues = checkDiffSum(catIndex, inMonth);
                                    let diffCorrectFormat = addCommas(removeNonNumeric(colsDiffValues));

                                // Get correct character next to the dif callculation
                                let diffSumPosNeg = checkDiffSumPosNeg(catIndex, inMonth);
                                //currency for the amounts
                                let currency = " Kr";
                                
                                // Creates the connection for the sum in the sql table
                                return(
                                    <>
                                    <muiComponents.TableStyling.TableCell 
                                        sx={ExtStyleMainContentView.TableBody.TableCalcContainer} key={`month_${inMonth}`} id={`month_${inMonth}`}>
                                        <muiComponents.TableStyling.Table>
                                            <muiComponents.TableStyling.TableBody>
                                                <muiComponents.TableStyling.TableCell
                                                    sx={ExtStyleMainContentView.TableBody.TableCalcMonthCols} key={`month_${inMonth}_col1`} id={`month_${inMonth}_col1`}>
                                                    {currentCorrectFormat + currency}
                                                </muiComponents.TableStyling.TableCell>  
                                                <muiComponents.TableStyling.TableCell
                                                    sx={ExtStyleMainContentView.TableBody.TableCalcMonthCols} key={`month_${inMonth}_col2}`} id={`month_${inMonth}_col2`}>
                                                    {outcomeCorrectFormat + currency}
                                                </muiComponents.TableStyling.TableCell>  
                                                <muiComponents.TableStyling.TableCell 
                                                    sx={[
                                                        (diffSumPosNeg === "+" ? ExtStyleMainContentView.TableBody.TableCalcMonthCol3DiffPos : ExtStyleMainContentView.TableBody.TableCalcMonthCol3DiffNeg),
                                                        diffSumPosNeg === " " && ExtStyleMainContentView.TableBody.TableCalcMonthCols

                                                    ]} key={`month_${inMonth}_col3}`} id={`month_${inMonth}_col1`}>
                                                    {diffSumPosNeg + diffCorrectFormat + currency}
                                                </muiComponents.TableStyling.TableCell>  
                                            </muiComponents.TableStyling.TableBody>
                                        </muiComponents.TableStyling.Table>              
                                    </muiComponents.TableStyling.TableCell> 
                                    </>                                                       
                                );
                            })
                        }
                    </muiComponents.TableStyling.TableRow>
                );
            })
        }
        <muiComponents.TableStyling.TableRow>
            <muiComponents.TableStyling.TableCell 
                sx={[
                    tableNr === 1 ? ExtStyleMainContentView.TableBody.TableCatSubTotHeadlineT1 : ExtStyleMainContentView.TableBody.TableCatSubHeadlinesT1,
                    tableNr === 2 ? ExtStyleMainContentView.TableBody.TableCatSubTotHeadlineT2 : ExtStyleMainContentView.TableBody.TableCatSubHeadlinesT2
                ]} id="compilation">
                Sammanställning
            </muiComponents.TableStyling.TableCell>  
                {(categorieMonthCalc !== undefined && categorieMonthSumCalc !== undefined)  &&
                    monthArr.map((inMonth) => {
                        let colsValues = calcMonthSumCol(inMonth);
                               // Fixed spaces in a number int
                               const addCommas = num => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
                               const removeNonNumeric = num => num.toString().replace(/[^0-9]/g, "");
                               
                               let currentCorrectFormat = addCommas(removeNonNumeric(colsValues[0]));
                               let outcomeCorrectFormat = addCommas(removeNonNumeric(colsValues[1]));

                        // Adds currency for the amounts
                        let currency = " Kr";
        
                        // Creates the connection for the sum in the sql table
                        return(
                            <muiComponents.TableStyling.TableCell 
                                sx={[(tableNr === 1 && ExtStyleMainContentView.TableBody.TableCalcTotContainerT1), (tableNr === 2 && ExtStyleMainContentView.TableBody.TableCalcTotContainerT2)]} key={`month_${inMonth++}`} id={`month_${inMonth}`}>
                                <muiComponents.TableStyling.Table>
                                    <muiComponents.TableStyling.TableBody>
                                        <muiComponents.TableStyling.TableCell
                                            sx={ExtStyleMainContentView.TableBody.TableCalcTotMonthCol} key={`month_${inMonth}_col1`} id={`month_${inMonth}_col1`}>
                                            {currentCorrectFormat + currency}
                                        </muiComponents.TableStyling.TableCell>  
                                        <muiComponents.TableStyling.TableCell
                                            sx={ExtStyleMainContentView.TableBody.TableCalcTotMonthCol} key={`month_${inMonth}_col2}`} id={`month_${inMonth}_col2`}>
                                            {outcomeCorrectFormat + currency}
                                        </muiComponents.TableStyling.TableCell>  
                                        <muiComponents.TableStyling.TableCell 
                                            sx={ExtStyleMainContentView.TableBody.TableCalcTotMonthCol} key={`month_${inMonth}_col3}`} id={`month_${inMonth}_col1`}>
                                            {"0 " + currency}
                                        </muiComponents.TableStyling.TableCell>  
                                    </muiComponents.TableStyling.TableBody>
                                </muiComponents.TableStyling.Table>              
                            </muiComponents.TableStyling.TableCell>      
                        );
                    })
                }
            </muiComponents.TableStyling.TableRow>
        </>     
    );
}