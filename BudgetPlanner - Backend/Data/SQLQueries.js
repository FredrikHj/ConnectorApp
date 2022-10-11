// Import the Database´s config
const incommingConfigTable = require('./ConnectorConfigPath');

// Tables    
const tableName = incommingConfigTable.tableName;
const tableExpen = incommingConfigTable.tableExpen;
const tableIncome = incommingConfigTable.tableIncome;
const tablePayOptions = incommingConfigTable.tablePaymentOpt;

exports.runQuery = (query, columns, table) => {
    // Request categories

    const sqlquery = `SELECT * FROM ${tableName}; SELECT * FROM ${tableIncome}; SELECT * FROM ${tableExpen};  SELECT * FROM ${tablePayOptions};`
    console.log("Query: " + sqlquery);
    return sqlquery;
}