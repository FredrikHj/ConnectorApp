// ==================================== SQLfunctions handling ====================================

//SQL Module
let mySql = require('mysql');

// Import the Connection config
let incommingConfig = require('../Data/ConnectorConfig');

const serverConfig = incommingConfig.connectorConfig;

//let query = "SELECT * FROM " + serverConfig.connectingTo.sqlServer.database.table;

// Some useful variables used in the functions bellow 
let incommingConnectionData = [];


// Exported functions running when called from runSQLConn 
exports.getConnectionData = () => {
    return incommingConnectionData[0];
}

/* =======================================================================================================================
Headfunction for Connetions*/
exports.runMariaDbConnect = (getSqlQuery) => {
    // Creates a connection between the server and my client and listen for SQL changes    
    console.log("Connect for the MariaDB :)");
    let SQLConn = mySql.createConnection({
        host: serverConfig.backend.host,
        user: serverConfig.connectingTo.MariaDb.database.user,
        password: serverConfig.connectingTo.MariaDb.database.password,
        port: serverConfig.connectingTo.MariaDb.database.sqlPort,
        database: serverConfig.connectingTo.MariaDb.database.name,
        multipleStatements: serverConfig.connectingTo.MariaDb.multipleStatements,
    });
    SQLConn.connect(function(err) {
        if (err) throw err;        
        SQLConn.query(getSqlQuery, function (error, sqlResult) {
        console.log("exports.runSQLConn -> sqlResult", sqlResult[0]);
            //incommingSQLDataArr.push(sqlResult);

            if (err) {
                return;
            }
        }); 
        // Closing the connection
        SQLConn.end();
    });
}
setTimeout(() => { 
    console.log(incommingConnectionData);
}, 1000);
