// Import the Database´s config
let incommingConfigTable = require('./ConnectorConfigPath');

// Tables    
let tableExpen = incommingConfigTable.tableExpen;
let tableIncome = incommingConfigTable.tableIncome;
let tablePayment = incommingConfigTable.tablePaymentOpt;


exports.runQuery = (query, columns, table) => {
    // Request categories

    let sqlquery = `SELECT * FROM ${tableExpen}; SELECT * FROM ${tableIncome}; SELECT * FROM ${tablePayment};`
    console.log("Query: " + sqlquery);
    return sqlquery;
}