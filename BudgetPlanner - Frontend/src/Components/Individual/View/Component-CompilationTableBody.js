/* ================================================== Input Form ==================================================
Import  modules */
import React, { useState, useEffect } from 'react';

 // Import external files 
import { ExtStyleMainContentView } from '../../Data/PathForFilesFolder';
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
export let TableBody = () =>{
    const [ categorieList, updateCategorieList ]=useState(undefined);
    const [ noData ]=useState(null);

    useEffect(() => {
        incommingSqlDataCategories$.subscribe((SqlDataCategories) => {
            console.log(SqlDataCategories);
            if(categorieList === undefined) updateCategorieList(SqlDataCategories);
        });
    });
    console.log(categorieList);
    return(
        <muiComponents.TableStyling.TableBody>
            {(categorieList !== undefined)
                ?
                categorieList[0].map((item, index) => {
                    const monthId = `month${item.id}`;
                    
                    return(
                        <muiComponents.TableStyling.TableRow sx={ index === 6 ? ExtStyleMainContentView.TableLastRow : ExtStyleMainContentView.TableRow}>  

                            <muiComponents.TableStyling.TableCell sx={ ExtStyleMainContentView.TableCateSubHeadlines } key={`col${index}`}>
                                {item.name_sv}
                            </muiComponents.TableStyling.TableCell>                           
                            {             
                                ["","","","","","","","","","","",""].map((item, index) => {
                                    const monthId = `month${item.id}`;
                                    
                                    console.log(index);
                                    return(
                                        <muiComponents.TableStyling.TableCell sx={ ExtStyleMainContentView.TableCalcContainer}>
                                            <muiComponents.TableStyling.TableCell sx={ ExtStyleMainContentView.TableCalcMonthContainer } key={`${monthId}Row2_col1`}>
                                                1
                                            </muiComponents.TableStyling.TableCell>
                                            <muiComponents.TableStyling.TableCell sx={ ExtStyleMainContentView.TableCalcMonthContainer } key={`${monthId}Row2_col2}`}>
                                                2
                                            </muiComponents.TableStyling.TableCell>
                                            <muiComponents.TableStyling.TableCell sx={ index === 11 ? ExtStyleMainContentView.TableCalcMonthLastContainerCol3 : ExtStyleMainContentView.TableCalcMonthContainer } key={`${monthId}Row2_col3}`}>
                                                3
                                            </muiComponents.TableStyling.TableCell>
                                        </muiComponents.TableStyling.TableCell>
                                    );
                                })
                            }
                             
                        </muiComponents.TableStyling.TableRow>
                    );
                })
                : noData
            }
        </muiComponents.TableStyling.TableBody>
    );
}