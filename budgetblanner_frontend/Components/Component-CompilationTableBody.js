/* ================================================== Input Form ==================================================
Import  modules */
import React, { useState, useEffect } from 'react';

 // Import external files 
import { ExtStyleCompilationView } from '../data/PathForFilesFolder';
import { muiComponents } from '../data/muiHandler';

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
    let [ monthCatDiffSum, updateMonthCatDiffSum ] = useState(undefined);
    let [fixNrFormat] = useState({
        addCommas: num => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "),
        removeNonNumeric: num => num.toString().replace(/[^0-9]/g, "")
    });
    useEffect(() => {                
        if(firstLoad === true) {
            updateFirstLoad(false);
        }
        if(categorieList === undefined) loadSqlDataLists(props);
    }, [firstLoad, props, categorieList, categorieMonthCalc, tableNr, monthArr]);
    
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
        let calcedDiffMonthSum = 0;

        for (let index = 0; index < categorieMonthCalc.length; index++) {
            colCurrent = categorieMonthCalc[index][`month${monthNr}.budget_current`];             
            colOutcome = categorieMonthCalc[index][`month${monthNr}.budget_outcome`];

            // Budget Currrent
            calcedColCurrent += colCurrent;             
            
            //Budget Outcome
            calcedColOutcome += colOutcome;

            // Calculation the month diff or monthsum of the diffs 
            calcedDiffMonthSum += colOutcome - colCurrent;
        }             

        return [calcedColCurrent, calcedColOutcome, calcedDiffMonthSum]; 
    }
    // Calculation of month category diff of each months 
    let calcMonthCatDiff = (catRow, monthNr) => {
        let colCurrent = 0;
        let colOutcome = 0;
        let sum = 0;

        colCurrent = categorieMonthCalc[catRow][`month${monthNr}.budget_current`];
        colOutcome = categorieMonthCalc[catRow][`month${monthNr}.budget_outcome`];
        sum = colOutcome - colCurrent;
        
        return sum; 
    }
    // Calculation of month diff total
    let calcMonthCatDiffTot = (currentBudgetTot, outcomeBudgetTot) => {
        let sum = currentBudgetTot - outcomeBudgetTot;
        let diffSum = "";
        
        // Fixed spaces in the diff Tot int
            diffSum = fixNrFormat.addCommas(fixNrFormat.removeNonNumeric(sum));
        if (outcomeBudgetTot < currentBudgetTot) return " +" + diffSum;       
        else return "-" + diffSum; 
    }
    // Check if there should be the character of + or next to the sum
    let checkCatDiffCharPosNeg = (catRow, monthNr) => {
        let colCurrent = 0;
        let colOutcome = 0;
        let whatDiff = "";

        colCurrent = categorieMonthCalc[catRow][`month${monthNr}.budget_current`];             
        colOutcome = categorieMonthCalc[catRow][`month${monthNr}.budget_outcome`];
        whatDiff = colCurrent === colOutcome ? " " : (colCurrent > colOutcome ? "+" : "-");
        
        return whatDiff;
    }
    return(       
        <>
        {(categorieList !== undefined) &&
            categorieMonthCalc.map((catItem, catIndex) => {
                // Catergory rows and the names
                let catRow = catItem.name_sv;
                let catItemNr = `${catRow}_catItem${catItem.id}`;
                
                return(
                    <muiComponents.TableStyling.TableRow key={catRow}>
                        <muiComponents.TableStyling.TableCell 
                            sx={[tableNr === 1 && ExtStyleCompilationView.TableBody.TableCatSubHeadlinesT1, tableNr === 2 && ExtStyleCompilationView.TableBody.TableCatSubHeadlinesT2]} id={catItemNr}>
                            {catItem.name_sv}
                        </muiComponents.TableStyling.TableCell>  
                    
                        {(categorieMonthCalc !== undefined) &&
                            monthArr.map((inMonth) => {
                                //Months and its cols
                                let monthsContainerNr = `${catRow}_monthsContainer${inMonth}`;
                                
                                // Fixed spaces in a int
                                    let currentCorrectFormat = fixNrFormat.addCommas(fixNrFormat.removeNonNumeric(catItem[`month${inMonth}.budget_current`]));
                                    let outcomeCorrectFormat = fixNrFormat.addCommas(fixNrFormat.removeNonNumeric(catItem[`month${inMonth}.budget_outcome`]));
                                
                                    // Check if there are are diff sum
                                        let colsDiffValues = calcMonthCatDiff(catIndex, inMonth);
                                            let diffCorrectFormat = fixNrFormat.addCommas(fixNrFormat.removeNonNumeric(colsDiffValues));
                                    
                                // Get correct character next to the dif callculation
                                    let diffSumPosNeg = checkCatDiffCharPosNeg(catIndex, inMonth);
                                
                                //currency for the amounts
                                    let currency = " Kr";
                                                        
                                return(                                      
                                    <muiComponents.TableStyling.TableCell sx={ExtStyleCompilationView.TableBody.TableCalcContainer} key={monthsContainerNr} id={monthsContainerNr}>
                                        <muiComponents.TableStyling.Table>

                                            <muiComponents.TableStyling.TableBody>
                                                <muiComponents.TableStyling.TableRow>
                                                    <muiComponents.TableStyling.TableCell
                                                        sx={ExtStyleCompilationView.TableBody.TableCalcMonthCols} id={`tb${monthsContainerNr}_Col1`}>
                                                        {currentCorrectFormat + currency}
                                                    </muiComponents.TableStyling.TableCell> 
                                                    <muiComponents.TableStyling.TableCell
                                                        sx={ExtStyleCompilationView.TableBody.TableCalcMonthCols} key={`tb${monthsContainerNr}_Col2`} id={`tb${monthsContainerNr}_Col2`}>
                                                        {outcomeCorrectFormat + currency}
                                                    </muiComponents.TableStyling.TableCell>
                                                    <muiComponents.TableStyling.TableCell 
                                                        sx={[
                                                            (diffSumPosNeg === "+" ? ExtStyleCompilationView.TableBody.TableCalcMonthCol3DiffPos : ExtStyleCompilationView.TableBody.TableCalcMonthCol3DiffNeg),
                                                            diffSumPosNeg === " " && ExtStyleCompilationView.TableBody.TableCalcMonthCols
                                                            
                                                        ]} key={`tb${monthsContainerNr}_Col3`} id={`tb${monthsContainerNr}_Col3`}>
                                                            {diffSumPosNeg + diffCorrectFormat + currency}
                                                    </muiComponents.TableStyling.TableCell>  
                                                </muiComponents.TableStyling.TableRow>
                                            </muiComponents.TableStyling.TableBody>

                                        </muiComponents.TableStyling.Table>              
                                    </muiComponents.TableStyling.TableCell>                                               
                                );
                            })
                        }

                    </muiComponents.TableStyling.TableRow>
                );
            })
        }
        {
        <muiComponents.TableStyling.TableRow>
            <muiComponents.TableStyling.TableCell 
                sx={[
                    tableNr === 1 ? ExtStyleCompilationView.TableBody.TableCatSubTotHeadlineT1 : ExtStyleCompilationView.TableBody.TableCatSubHeadlinesT1,
                    tableNr === 2 ? ExtStyleCompilationView.TableBody.TableCatSubTotHeadlineT2 : ExtStyleCompilationView.TableBody.TableCatSubHeadlinesT2
                ]} key="compilation" id="compilation">
                Månadssammanställning 
            </muiComponents.TableStyling.TableCell>  
                {(categorieMonthCalc !== undefined)  &&
                    monthArr.map((inMonth) => {
                        let colsValues = calcMonthSumCol(inMonth);

                        // Fixed spaces in a number int
                            let currentSumCorrectFormat = fixNrFormat.addCommas(fixNrFormat.removeNonNumeric(colsValues[0]));
                            let outcomeSumCorrectFormat = fixNrFormat.addCommas(fixNrFormat.removeNonNumeric(colsValues[1]));
                            
                        let monthCatDiffSumCorrectFormat = calcMonthCatDiffTot(colsValues[0], colsValues[1]);
                        
                        // Get correct character next to the dif callculation


                        // Adds currency for the amounts
                        let currency = " Kr";
                        return(
                            <muiComponents.TableStyling.TableCell 
                            sx={ExtStyleCompilationView.TableBody.TableCalcTotContainer} key={`monthCalc${inMonth++}`} id={`month_${inMonth}`}>
                               
                                <muiComponents.TableStyling.Table>
                                    <muiComponents.TableStyling.TableBody>
                                        <muiComponents.TableStyling.TableRow>
                                            <muiComponents.TableStyling.TableCell
                                                sx={ExtStyleCompilationView.TableBody.TableCalcTotMonthCol} key={`monthCalc${inMonth}_col1`} id={`monthCalc${inMonth}_col1`}>
                                                    {currentSumCorrectFormat + currency}
                                            </muiComponents.TableStyling.TableCell>  
                                            <muiComponents.TableStyling.TableCell
                                                sx={ExtStyleCompilationView.TableBody.TableCalcTotMonthCol} key={`monthCalc${inMonth}_col2}`} id={`monthCalc${inMonth}_col2`}>
                                                    {outcomeSumCorrectFormat + currency}
                                            </muiComponents.TableStyling.TableCell>  
                                            <muiComponents.TableStyling.TableCell 
                                                sx={ExtStyleCompilationView.TableBody.TableCalcTotMonthCol} key={`monthCalc${inMonth}_col3}`} id={`monthCalc${inMonth}_col3`}>
                                                    { monthCatDiffSumCorrectFormat + currency}
                                            </muiComponents.TableStyling.TableCell>  
                                        </muiComponents.TableStyling.TableRow>
                                    </muiComponents.TableStyling.TableBody>
                                </muiComponents.TableStyling.Table>         
                                
                                
                            </muiComponents.TableStyling.TableCell>      
                        );
                    })
                }
                </muiComponents.TableStyling.TableRow>
            }
        </>     
    );
}