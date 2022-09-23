// ==================================== SQLfunctions handling ====================================

//SQL Module
let sql = require("mssql/msnodesqlv8");
let sql1 = require("msnodesqlv8");

// Import the Connection config
let incommingConfig = require('../Data/ConnectorConfig');
const serverConfig = incommingConfig.connectorConfig;

    
let dbConfigString = "server=" + serverConfig.backend.winClient + serverConfig.connectingTo.sqlServer.instanceWinClient + ";port=" + serverConfig.connectingTo.sqlServer.database.port + ";Database=" + serverConfig.connectingTo.sqlServer.database.name +";Trusted_Connection=Yes;Driver={SQL Server Native Client 11.0};";
let query = "SELECT * FROM " + serverConfig.connectingTo.sqlServer.database.table;

// Some useful variables used in the functions bellow 
let incommingConnectionData = [];


// Exported functions running when called from runSQLConn 
exports.getConnectionData = () => {
    return incommingConnectionData[0];
}

/* =======================================================================================================================
Headfunction for Connetions*/
exports.runConnect = (optional, incommingData) => {
    if (optional === "SQLData") {
        // Creates a connection between the server and my client 
        sql1.query(dbConfigString, query, (err, res) =>{
            console.log(err);
            if (res) {    
                incommingConnectionData.push(res);
            }
        })
    }
    setTimeout(() => { 
        console.log(incommingConnectionData);
    }, 1000);
}
