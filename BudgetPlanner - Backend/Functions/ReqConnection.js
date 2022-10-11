// ==================================== SQLfunctions handling ====================================

//SQL Module
let mySql = require('mysql');

// Import the Connection config
let serverConfig = require('../Data/ConnectorConfigPath');

// Import the Database´s tables


// Some useful variables used in the functions bellow 
let sendSqlData = [];

/* =======================================================================================================================
Headfunction for Connetions*/
exports.runMariaDbConnect = (getSqlQuery) => {
    // Creates a connection between the server and my client and listen for SQL changes    
    let SQLConn = mySql.createConnection({
        host: serverConfig.configHost,
        user: serverConfig.configUser,
        password: serverConfig.configPassword,
        port: serverConfig.configSqlDbPort,
        database: serverConfig.configdDtabase,
        multipleStatements: serverConfig.configMultipleStatements,
    });
    SQLConn.connect(function(err) {
        if (err) throw err;        
        SQLConn.query(getSqlQuery, function (error, sqlResult) {
            console.log("Connect for the MariaDB :)");
            // Sort the incomming data and save it by the namse of the index from the incomming data
            //incommingSQLDataArr.push(sqlResult);
            console.log("runMariaDbConnect"); 
            sendSqlData.push(sqlResult[0]);
            sendSqlData.push(sqlResult[1]);
            sendSqlData.push(sqlResult[2]);
            sendSqlData.push(sqlResult[3]);           
            
            
            if (err) {
                return;
            }
        }); 
        // Closing the connection
        SQLConn.end(); 
    });
}
// Exported functions running when called from runSQLConn 
exports.getConnectionData = () => {
    console.log("fewas\n",sendSqlData.length);
    return sendSqlData;
};
exports.resetConnectionData = () => {
    sendSqlData = [];
}