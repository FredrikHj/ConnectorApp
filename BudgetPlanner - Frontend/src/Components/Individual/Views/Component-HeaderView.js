/* ================================================== Input Form ==================================================
Import  modules */
import React, { useState, useEffect } from 'react';


// React Router - ES6 modules & React Router Dom
import { Link, Navigate } from "react-router-dom";

// Import external files 
import { ExtDataHeadLinesText, ExtStyleHeader } from '../../Data/PathForFilesFolder';
import { muiLayot, muiHelperObj, muiComponents } from '../../Data/muiHandler';

// --------------------------- Using Instruction ------------------------------
// Import file "" 
import { updateLoadPath, incommingHeaderNavlinks$ } from '../../Data/PropsHandler';
import { whichPath } from '../../Data/RunPath';

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
export let HeaderView = (props) =>{
    const [ headLines ] = useState(props.appName);
    const [ navBarHeadlines, updateNavBarHeadlines ] = useState(undefined);

    useEffect(() => {
      incommingHeaderNavlinks$.subscribe((sqlDataHeadlineTexts) => {
        updateNavBarHeadlines(sqlDataHeadlineTexts);
      }); 
    }, [headLines, navBarHeadlines]);
    let openView = (e) => {
      let targetButton = e.target.id;
      
      updateLoadPath(targetButton);

    }
    return(
      <muiLayot.Container sx={ ExtStyleHeader.Container }>
        <muiLayot.Grid2 sx={ ExtStyleHeader.ContentContainer}>

            <muiHelperObj.gruidItem sx={ ExtStyleHeader.AppName} onClick={ openView } id={ whichPath.sv.home.path }><Link to={ whichPath.sv.home.url }> { headLines }</Link></muiHelperObj.gruidItem>
              <muiHelperObj.gruidItem sx={ExtStyleHeader.NavButtonsGrid}>
                {(navBarHeadlines !== undefined)
                  ?
                  navBarHeadlines.map((item, index) => {
                    return(
                      <muiComponents.Button sx={ ExtStyleHeader.NavButtons } onClick={ openView } key={item.id} id={ item.loadView}>
                        <Link to={`/${item.nameShort_Sv}`}>{item.nameLong_Sv}</Link>
                      </muiComponents.Button>
                    );        
                  })
                  : "......"
                }
              </muiHelperObj.gruidItem>    
        </muiLayot.Grid2>
      </muiLayot.Container>
    );
  }