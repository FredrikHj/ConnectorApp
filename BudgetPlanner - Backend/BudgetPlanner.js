// Creates a Express server in Node JS and use diff... modules    
const express = require('express');
const app = express();
app.use(
    express.urlencoded({
        extended: true
    })
)
    
app.use(express.json());  
    
let cors = require('cors');
app.use(cors());
// ----------------------------------------------------------------------------
let incommingSQLQueries = require('./Data/SQLQueries');
 
// The server config
const serverConfig = require('./Data/ConnectorConfigPath');
const port = serverConfig.configBackendPort;
app.listen(port, () => console.log(`MediaVisare is listening on port ${port}!`)); 

//Get Connection Data
const runConnection = require('./Functions/ReqConnection');

// Middleware to running when the request accour 
    // Reloads the data for the compilationsView
    let reqConnectionData = (req, res, next) => {
        let getResponseRequestType = req.query.requestType;
        console.log(getResponseRequestType);
        let SQLQuery = incommingSQLQueries.runQuery(getResponseRequestType);
        runConnection.runMariaDbConnect(SQLQuery);

        next();
    }
app.get('/Reload_compilations', reqConnectionData, (req, res) => {
    setTimeout(() => { 
        // Gets and sending the data 1 sekund after the request   
        res.status(200).send(runConnection.getConnectionData());
    }, 1000);
    // Emtying the requested data  
    runConnection.resetConnectionData();
});  