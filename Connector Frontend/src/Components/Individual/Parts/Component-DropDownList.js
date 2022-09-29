/* ================================================== list Form ==================================================
Import  modules */
 import React, { useState, useEffect } from 'react';

// Import external files 
import { ExtLabel } from '../../Data/PathForFilesFolder';

// --------------------------- Using Instruction ------------------------------
// Import file "PropsHandler" 
import { selectList_DataArr$, updateSelected_DataArrItem} from '../../Data/PropsHandler';
 
/* Perferm the following tasks in [PathForFilesFolder]:
    1 - Add --> import { .... } from 'Path to file Filename';
        :1 Add export const ... according the other lines;
    
    2 - Add 1:1 varables in the file you are importing the component through
   
    3 - Add        
            <1:1 varable´s
                prop 1={ }
                prop 2={ }
                ....
            />
*/

 let style = {
    fontSize: "0.8em",
    width: "200px",
    textAlign: "left"
}

export let DropDownList = (props) =>{
    let [ name, updateName ] = useState();    
    let [ listStyle, updatelistStyle ] = useState({});
    let [ listData, updateListData ]= useState([]);
    let [ grabedListData, updateGrabedListData ]= useState([]);
    const { listName, listId } = props;
    
    useEffect(() => {
        updateName(listName);
        updatelistStyle(style);
        selectList_DataArr$.subscribe((selectListDataArr) => {
            updateListData(selectListDataArr);
        }); 
    }, [name, listStyle, listName]);

    
    let itemClick = (e) => {updateSelected_DataArrItem(e.target.value);}
    return(
        <form onChange={ itemClick }>
            <ExtLabel
                labelName={ "Välj en kattegorie" }
                labelBellongsTo={""}
                labelId={ 0 }
            />
            <select name={""} id={ listId } style={ listStyle }>
                {
                    listData.map((item, index) => {                        
                        return(
                                <option key={ index } value={ item.toLowerCase() } id={ index }>{item}</option>
                        );
                    })
                }
            </select>
        </form>
    );
}