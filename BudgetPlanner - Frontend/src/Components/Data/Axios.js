/* ================================================== HeadBar ==================================================
Imports module */
import axios from 'axios';

// Import inportant components for the specific page
let backendURL = window.location.hostname;
let routes = "ReqConnectionData";
export let axiosGet = (getType, tokenStr) => {

    axios.get(backendURL + routes, {headers: {Authorization: `bearer ????????`}}).then(response => {
        //  If incomming status of 201 = Created: The Data i push into a arry that is holding the data until the webbbrowser is closed 
        if (response.status === 201) {

        }
    }).
    catch(error => {});
}
