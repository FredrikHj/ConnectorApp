// Import the Connection config
let incommingConfig = require('../Data/ConnectorConfig');
const serverConfig = incommingConfig.connectorConfig;


exports.runQuery = (query, columns, table) => {
    // Tables
    let tableExpen = serverConfig.connectingTo.MariaDb.database.tableExpen;
    let tableIncome = serverConfig.connectingTo.MariaDb.database.tableIncome;
    let tablePaymentOpt = serverConfig.connectingTo.MariaDb.database.tablePaymentOp;
    
    // Request categories

    let sqlquery = `SELECT * FROM ${tableExpen}; SELECT * FROM ${tableIncome}`
console.log("15" + sqlquery);
    return sqlquery;
}