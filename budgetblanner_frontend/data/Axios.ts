/* ================================================== HeadBar ==================================================
Imports module */
import axios from 'axios';
import { updateIncommingSqlData } from './PropsHandler';

// Import inportant components for the specific page
let backendURL: string;

backendURL = "http://Asset01:3001";
export function AxiosGet (requestType: string, payload: string){
    axios.get(backendURL + requestType, {
            params: {requestType, payload}
        }
        //, {headers: {Authorization: `bearer ????????`}}
    ).then(res => {
        console.log(res);
        //  If incomming status of 201 = Created: The Data i push into a arry that is holding the data until the webbbrowser is closed 
        if (res.status === 200) {
            updateIncommingSqlData(true, res.data);
        }
        //if (res.status === 403) updateIncommingSqlData(res.data);
    }).catch(error => {});
}