/* ================================================== Input Form ==================================================
Import  modules */
import React, { useState, useEffect } from 'react';

 // Import external files 
import {ExtTableBody, ExtTableHead, ExtStyleMainContentView } from '../../Data/PathForFilesFolder';
import { muiSurface, muiLayot, muiComponents  } from '../../Data/muiHandler';

// --------------------------- Using Instruction ------------------------------
// Import file "PropsHandler" 
import { incommingSqlData$ } from '../../Data/PropsHandler';

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
export let MainContentView = () =>{
    const [ categorieNames, updateCategorieNames ] =useState(undefined);
    const [ loadData, updateLoadData ] = useState(false);
    const [ noData ]=useState(null);

    useEffect(() => {
        incommingSqlData$.subscribe((loadSqlData) => {
            console.log(loadSqlData);
            if(loadData === false) updateLoadData(loadSqlData);
        });
    }, [categorieNames, loadData, noData]);

    return(
        <muiLayot.Container maxWidth="xl2" sx={ExtStyleMainContentView.CompilationContainer }>
            <muiComponents.TableStyling.TableContainer>
            {(loadData === true)
                ?
                <muiComponents.TableStyling.Table sx={ ExtStyleMainContentView.TableContainer }>
                    <ExtTableHead/>
                    <ExtTableBody/>
                </muiComponents.TableStyling.Table>    
                : noData
            }    
            </muiComponents.TableStyling.TableContainer>
        </muiLayot.Container>
    );
}