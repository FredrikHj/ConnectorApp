// Import the Database´s config
const incommingConfigTable = require('./ConnectorConfigPath');

// Tables    
const incommingDbTables = incommingConfigTable.dbTables;

const tableHeadlinesTexts = incommingDbTables.tableHeadlines_texts;
const tableExpen = incommingDbTables.tableExpen;
const tableIncome = incommingDbTables.tableIncome;
const tablePayOptions = incommingDbTables.tablePaymentOp;
const tableNavBarLinks = incommingDbTables.tableNavbarlinks;
const tableMonthsHeader = incommingDbTables.tableMonths_header;

exports.runQuery = (query, columns, table) => {
    
    /* Request categories according:
        Index 0 - 5
    */
    const sqlquery = `
        SELECT * FROM ${tableHeadlinesTexts};
        SELECT * FROM ${tableIncome};
        SELECT * FROM ${tableExpen};
        SELECT * FROM ${tablePayOptions};
        SELECT * FROM ${tableNavBarLinks};
        SELECT * FROM ${tableMonthsHeader};
    `;
    return sqlquery;
}