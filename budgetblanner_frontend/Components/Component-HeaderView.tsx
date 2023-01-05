/* ================================================== Input Form ==================================================
Import  modules */
import React, { useState, useEffect } from 'react';
import Link from 'next/link';


// Import external files 
import { useRouter } from 'next/router';
import { ExtStyleHeader } from '../data/PathForFilesFolder';
import { muiLayot, muiHelperObj, muiComponents } from '../data/muiHandler';

// --------------------------- Using Instruction ------------------------------
// Import file "" 
import { updateLoadPath, incommingHeaderNavlinks$ } from '../data/PropsHandler';
import { whichPath } from '../data/RunPath';6


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
export let HeaderView = (props: any) =>{
  const route = useRouter();

    const [ headLines ] = useState(props.appName);
    const [ navBarHeadlines, updateNavBarHeadlines ] = useState(Array<20>);

    useEffect(() => {
      incommingHeaderNavlinks$.subscribe((sqlDataHeadlineTexts: any) => {
        updateNavBarHeadlines(sqlDataHeadlineTexts);
      }); 
    }, [headLines, navBarHeadlines]);
    return(
      <muiLayot.Container sx={ ExtStyleHeader.Container }>
        <muiLayot.Grid2 sx={ ExtStyleHeader.ContentContainer}>

          <muiHelperObj.gruidItem sx={ ExtStyleHeader.AppName} id={ whichPath.sv.home.loadView }><Link href={ whichPath.sv.home.loadView }> { headLines }</Link></muiHelperObj.gruidItem>
          <muiHelperObj.gruidItem sx={ExtStyleHeader.NavButtonsGrid}>
          {(navBarHeadlines !== undefined)
            ?
            navBarHeadlines.map((item: any, index: number) => {
              return(
                <muiComponents.Button sx={ ExtStyleHeader.NavButtons }key={item.loadView}>
                  <Link href={{pathname: item.loadView}} id={ item.loadView }>{item.nameLong_Sv}</Link>
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