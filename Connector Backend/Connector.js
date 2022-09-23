
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
    
// Functions for the Mediavisare backend
//const getConnectionData = require('/Functions/ReqConnection');
  
// The server config
const serverConfig = require('./Data/ConnectorConfig');
const port = serverConfig.connectorConfig.backend.port;
app.listen(port, () => console.log(`MediaVisare is listening on port ${port}!`)); 

//Get Connection Data
const runConnection = require('./Functions/ReqConnection');

// Middleware
let reqConnectionData = (req, res, next) => {
    runConnection.runConnect("SQLData")
    setTimeout(() => { 
        res.status(200).send(runConnection.getConnectionData()); 
    }, 1000);
    
    next();
}
app.get('/ReqConnectionData', reqConnectionData, (req, res) => {
});  