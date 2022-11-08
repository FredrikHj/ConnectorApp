/* ================================================== Input Form ==================================================
Import  modules */
import React, { useState, useEffect } from 'react';

 // Import external files 
import { ExtCategorieHandlerView, ExtStyleMainContentView } from '../../Data/PathForFilesFolder';
import { muiSurface, muiLayot, muiHelperObj, muiComponents  } from '../../Data/muiHandler';




// --------------------------- Using Instruction ------------------------------
// Import file "PropsHandler" 
import { incommingSqlDataCategories$, incommingSqlDataCompilation$ } from '../../Data/PropsHandler';

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
export let TableHead = () =>{
    const [ monthsHeader, updateMonthsHeader ]=useState(undefined);
    const [ categorieList, updateCategorieList ]=useState(undefined);
    const [ noData ] = useState(null);

    useEffect(() => {
        console.log(monthsHeader);

            incommingSqlDataCompilation$.subscribe((SqlDataCompilationHeader) => {
                console.log(SqlDataCompilationHeader["compilationCategoriesHeader"][4].name_Sv);
                if(monthsHeader === undefined) {
                    updateCategorieList(SqlDataCompilationHeader["compilationCategoriesHeader"]);
                    updateMonthsHeader(SqlDataCompilationHeader["compilationHeader"]);
                }
            });
    });
    return(
        <muiComponents.TableStyling.TableHead>
            <muiComponents.TableStyling.TableRow> 
                
                {(categorieList !== undefined || monthsHeader !== undefined ) &&
                    <>
                        <muiComponents.TableStyling.TableCell sx={ ExtStyleMainContentView.TableHeaderContainer }>
                            <muiComponents.TableStyling.TableRow key={`row1_catList${1}`}>
                                <muiComponents.TableStyling.TableCell sx={ ExtStyleMainContentView.TableCateHeadlines} key={`row1CatList`}>
                                    {categorieList[4].name_Sv}
                                </muiComponents.TableStyling.TableCell>
                            </muiComponents.TableStyling.TableRow>
                            <muiComponents.TableStyling.TableRow key={`row2_catList${2}`}>
                                <muiComponents.TableStyling.TableCell sx={ ExtStyleMainContentView.TableFirstSubMonthHeadlines } key={`${2}Row2CatListCol1`}>
                                    {categorieList[0].name_Sv}
                                </muiComponents.TableStyling.TableCell>
                            </muiComponents.TableStyling.TableRow>
                        </muiComponents.TableStyling.TableCell>

                        {(categorieList !== undefined ) && 
                            monthsHeader.map((item, index) => {
                            const monthId = `month${item.id}`;
                         
                            return (
                                <muiComponents.TableStyling.TableCell sx={ ExtStyleMainContentView.TableHeaderContainer} key={`${monthId}`}>
                                    <muiComponents.TableStyling.TableRow key={`row1_month${monthId}`}>
                                        <muiComponents.TableStyling.TableCell sx={ index === 11 ? ExtStyleMainContentView.TableMonthLastHeadlines : ExtStyleMainContentView.TableMonthHeadlines } key={`col${index}`} colSpan="3">
                                            {item.monthName_sv}
                                        </muiComponents.TableStyling.TableCell>
                                    </muiComponents.TableStyling.TableRow>
                                    <muiComponents.TableStyling.TableRow key={`row2_month${monthId}`}>
                                        <muiComponents.TableStyling.TableCell sx={ ExtStyleMainContentView.TableSubMonthHeadlines } key={`${monthId}Row2_col1`}>
                                            {item.col1Name_sv}
                                        </muiComponents.TableStyling.TableCell>
                                        <muiComponents.TableStyling.TableCell sx={ ExtStyleMainContentView.TableSubMonthHeadlines} key={`${monthId}Row2_col2}`}>
                                            {item.col2Name_sv}
                                        </muiComponents.TableStyling.TableCell>
                                        <muiComponents.TableStyling.TableCell sx={ index === 11 ? ExtStyleMainContentView.TableSubLastMonthHeadlines : ExtStyleMainContentView.TableSubMonthHeadlines } key={`${monthId}Row2_col3}`}>
                                            {item.col3Name_sv}
                                        </muiComponents.TableStyling.TableCell>
                                    </muiComponents.TableStyling.TableRow>
                                </muiComponents.TableStyling.TableCell>
                            );
                        })}
                    </>
                }
            </muiComponents.TableStyling.TableRow>
        </muiComponents.TableStyling.TableHead>
    );
}