/* ================================================== Input Form ==================================================
Import  modules */
import React, { useState, useEffect } from 'react';

 // Import external files 
import { ExtStyleMainContentView } from '../../Data/PathForFilesFolder';
import { muiSurface, muiLayot, muiHelperObj, muiComponents  } from '../../Data/muiHandler';




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
export let TableHead = (props) =>{
    const [ catHeadlines, updateCatHeadlines ] = useState(undefined);
    const [ monthHeadlines,  updateMonthsHeadlines ] = useState(undefined);
    const [ whichHeadView, updateWhichHeadView ] = useState(undefined);


    useEffect(() => {
        if(catHeadlines === undefined || monthHeadlines === undefined) {
            updateWhichHeadView(props.whichHead);
            updateCatHeadlines(props["headlinesCat"]);
            updateMonthsHeadlines(props["headlinesMonth"]);
        }
    }, [props, catHeadlines, monthHeadlines]);
    
    return(
        <>
            {(catHeadlines !== undefined || monthHeadlines !== undefined ) &&
            <>
                <muiComponents.TableStyling.TableRow> 
                    <muiComponents.TableStyling.TableCell sx={ ExtStyleMainContentView.TableHead.TableHeaderCatContainer }>
                        <muiComponents.TableStyling.Table sx={ ExtStyleMainContentView.TableHead.TableHeaderCatContainerNestedTable }>
                            <muiComponents.TableStyling.TableBody>
                                <muiComponents.TableStyling.TableRow> 
                                    <muiComponents.TableStyling.TableCell sx={ ExtStyleMainContentView.TableHead.TableCatHeadlines} key={`row1CatList`}>
                                        {catHeadlines[4].name_Sv}
                                    </muiComponents.TableStyling.TableCell>
                                </muiComponents.TableStyling.TableRow>
                            </muiComponents.TableStyling.TableBody>
                        </muiComponents.TableStyling.Table>
                    </muiComponents.TableStyling.TableCell>

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
                </muiComponents.TableStyling.TableRow>
                <muiComponents.TableStyling.TableRow>
                    <muiComponents.TableStyling.TableCell sx={ ExtStyleMainContentView.TableHead.TableHeaderCatContainer }>
                        <muiComponents.TableStyling.Table sx={ ExtStyleMainContentView.TableHead.TableHeaderCatContainerNestedTable }>
                            <muiComponents.TableStyling.TableBody>
                                <muiComponents.TableStyling.TableRow> 
                                    <muiComponents.TableStyling.TableCell sx={ ExtStyleMainContentView.TableHead.TableFirstSubCatHeadlines } key={`${2}Row2CatListCol1`}>
                                        {catHeadlines[0].name_Sv}
                                    </muiComponents.TableStyling.TableCell>
                                </muiComponents.TableStyling.TableRow> 

                            </muiComponents.TableStyling.TableBody>
                        </muiComponents.TableStyling.Table>
                    </muiComponents.TableStyling.TableCell>

                    {
                        monthHeadlines.map((item, index) => {
                            let monthId = `month${item.id}`;
                    
                            return (
                                <muiComponents.TableStyling.TableCell sx={ ExtStyleMainContentView.TableHead.TableHeaderMonthContainer} key={`${monthId}`}>
                                    <muiComponents.TableStyling.Table>
                                        <muiComponents.TableStyling.TableBody>
                                            <muiComponents.TableStyling.TableRow key={`row2_month${monthId}`}>
                                                <muiComponents.TableStyling.TableCell sx={ ExtStyleMainContentView.TableHead.TableSubMonthHeadlines } key={`${monthId}Row2_col1`}>
                                                    {item.col1Name_sv}
                                                </muiComponents.TableStyling.TableCell>
                                                <muiComponents.TableStyling.TableCell sx={ ExtStyleMainContentView.TableHead.TableSubMonthHeadlines} key={`${monthId}Row2_col2}`}>
                                                    {item.col2Name_sv}
                                                </muiComponents.TableStyling.TableCell>
                                                <muiComponents.TableStyling.TableCell sx={ index+1 === monthHeadlines.length ? ExtStyleMainContentView.TableHead.TableSubLastMonthHeadlines : ExtStyleMainContentView.TableHead.TableSubMonthHeadlines } key={`${monthId}Row2_col3}`}>
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