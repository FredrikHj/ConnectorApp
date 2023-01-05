/* ================================================== Input Form ==================================================
Import  modules */
import React, { useState, useEffect } from 'react';

 // Import external files 
import { ExtStyleCompilationView } from '../data/PathForFilesFolder';
import { muiSurface, muiLayot, muiHelperObj, muiComponents  } from '../data/muiHandler';




// --------------------------- Using Instruction ------------------------------
// Import file "PropsHandler" 
//import { incommingSqlDataCategories$, incommingSqlDataCompilation$ } from '../../Data/PropsHandler';

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
export let TableHead = (props: any) =>{
    const [ catHeadlines, updateCatHeadlines ] = useState(undefined);
    const [ monthHeadlines,  updateMonthsHeadlines ] = useState(undefined);
    const [ tableNr, updateTableNr ] = useState(0);


    useEffect(() => {
        if(catHeadlines === undefined || monthHeadlines === undefined) {
            console.log(props);
            updateTableNr(props.whichTable);
            updateCatHeadlines(props["headlinesCat"]);
            updateMonthsHeadlines(props["headlinesMonth"]);
        }
    }, [props, catHeadlines, monthHeadlines]);
    console.log(catHeadlines, monthHeadlines);
    
    return(
        <>
            {(catHeadlines !== undefined || monthHeadlines !== undefined ) &&
            <>
                <muiComponents.TableStyling.TableRow> 
                    <muiComponents.TableStyling.TableCell sx={ ExtStyleCompilationView.TableHead.TableHeaderCatContainer }>
                        <muiComponents.TableStyling.Table sx={ ExtStyleCompilationView.TableHead.TableHeaderCatContainerNestedTable }>
                            <muiComponents.TableStyling.TableBody>
                                <muiComponents.TableStyling.TableRow> 
                                    <muiComponents.TableStyling.TableCell sx={ ExtStyleCompilationView.TableHead.TableCatHeadlines}>
                                        {catHeadlines[4].name_Sv}
                                    </muiComponents.TableStyling.TableCell>
                                </muiComponents.TableStyling.TableRow>
                            </muiComponents.TableStyling.TableBody>
                        </muiComponents.TableStyling.Table>
                    </muiComponents.TableStyling.TableCell>

                    {(catHeadlines !== undefined ) && 
                        monthHeadlines.map((item: any, index: number) => {
                        const monthId = `month${item.id}`;

                        return (
                            <muiComponents.TableStyling.TableCell sx={ ExtStyleCompilationView.TableHead.TableHeaderMonthContainer} key={`${monthId}`}>
                                <muiComponents.TableStyling.Table>
                                    <muiComponents.TableStyling.TableBody>
                                        <muiComponents.TableStyling.TableRow key={`row1_month${monthId}`}>
                                            <muiComponents.TableStyling.TableCell sx={ index === monthHeadlines.length ? ExtStyleCompilationView.TableHead.TableMonthLastHeadlines : ExtStyleCompilationView.TableHead.TableMonthHeadlines } key={`col${index}`} colSpan="3">
                                                {item.monthName_sv}
                                            </muiComponents.TableStyling.TableCell>
                                        </muiComponents.TableStyling.TableRow>
                                    </muiComponents.TableStyling.TableBody>
                                </muiComponents.TableStyling.Table>
                            </muiComponents.TableStyling.TableCell>
                        );
                    })}
                </muiComponents.TableStyling.TableRow>
                <muiComponents.TableStyling.TableRow>
                    <muiComponents.TableStyling.TableCell sx={ ExtStyleCompilationView.TableHead.TableHeaderCatContainer }>
                        <muiComponents.TableStyling.Table sx={ ExtStyleCompilationView.TableHead.TableHeaderCatContainerNestedTable }>
                            <muiComponents.TableStyling.TableBody>
                                <muiComponents.TableStyling.TableRow> 
                                    <muiComponents.TableStyling.TableCell sx={ ExtStyleCompilationView.TableHead.TableFirstSubCatHeadlines }>
                                        {tableNr === 1 && catHeadlines[0].name_Sv}
                                        {tableNr === 2 && catHeadlines[1].name_Sv}

                                    </muiComponents.TableStyling.TableCell>
                                </muiComponents.TableStyling.TableRow> 

                            </muiComponents.TableStyling.TableBody>
                        </muiComponents.TableStyling.Table>
                    </muiComponents.TableStyling.TableCell>

                    {
                        monthHeadlines.map((item: any, index: number) => {
                            let monthId = `month${item.id}`;
                            return (
                                <muiComponents.TableStyling.TableCell sx={ ExtStyleCompilationView.TableHead.TableHeaderMonthContainer} key={monthId}>
                                    <muiComponents.TableStyling.Table>
                                        <muiComponents.TableStyling.TableBody>
                                            <muiComponents.TableStyling.TableRow key={`row2_month${monthId}`}>
                                                <muiComponents.TableStyling.TableCell sx={ ExtStyleCompilationView.TableHead.TableSubMonthHeadlines } key={`${monthId}Row2_col1`}>
                                                    {item.col1Name_sv}
                                                </muiComponents.TableStyling.TableCell>
                                                <muiComponents.TableStyling.TableCell sx={ ExtStyleCompilationView.TableHead.TableSubMonthHeadlines} key={`${monthId}Row2_col2}`}>
                                                    {item.col2Name_sv}
                                                </muiComponents.TableStyling.TableCell>
                                                <muiComponents.TableStyling.TableCell 
                                                sx={ index + 1 === monthHeadlines.length ? ExtStyleCompilationView.TableHead.TableSubLastMonthHeadlines : ExtStyleCompilationView.TableHead.TableSubMonthHeadlines } key={`${monthId}Row2_col3}`}>
                                                    {item.col3Name_sv}
                                                </muiComponents.TableStyling.TableCell>
                                            </muiComponents.TableStyling.TableRow>
                                        </muiComponents.TableStyling.TableBody>
                                    </muiComponents.TableStyling.Table>
                                </muiComponents.TableStyling.TableCell>
                            );
                        })
                    }
                </muiComponents.TableStyling.TableRow>
            </>
            }
       </>
    );
}