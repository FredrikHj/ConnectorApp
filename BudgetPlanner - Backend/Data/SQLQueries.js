// Import the Database´s config
const incommingConfigTable = require('./ConnectorConfigPath');

// Tables    
const incommingDbTables = incommingConfigTable.dbTables;
console.log("SQL Tables", incommingDbTables);

// Importing the SQL Tables
const tableHeadlinesTexts = incommingDbTables.tableHeadlines_texts;
const tableExpen = incommingDbTables.tableExpen;
const tableIncome = incommingDbTables.tableIncome;
const tablePayOptions = incommingDbTables.tablePaymentOp;
const tableNavBarLinks = incommingDbTables.tableNavbarlinks;
const tableMonthsHeader = incommingDbTables.tableMonths_header;
const tableTransactions_header = incommingDbTables.tableTransactions_header;
const tableTransactions_calcdata = incommingDbTables.tableTransactions_calcdata;
const tableCalc_expenditure_yy = incommingDbTables.tableCalc_expenditure_yy;
const tableCalc_income_yy = incommingDbTables.tableCalc_income_yy;

/* Handle the SQL Queries depp the incomming:
    *   Type
    *   SQL command
    *   From Table
*/
exports.runQuery = (resType) => {
    let sqlQuery = "";
    /* Request categories according:
        Index 0 - 5
    */
    if (resType === "/Reload_compilations")
        sqlQuery = `
            SELECT * FROM ${tableHeadlinesTexts         /*Index = 0*/   };
            SELECT * FROM ${tableIncome                 /*Index = 1*/   };
            SELECT * FROM ${tableExpen                  /*Index = 2*/   };
            SELECT * FROM ${tablePayOptions             /*Index = 3*/   };
            SELECT * FROM ${tableNavBarLinks            /*Index = 4*/   };
            SELECT * FROM ${tableMonthsHeader           /*Index = 5*/   };
            SELECT * FROM ${tableTransactions_header    /*Index = 6*/   };
            SELECT * FROM ${tableTransactions_calcdata  /*Index = 7*/   };
            SELECT * FROM ${tableCalc_expenditure_yy    /*Index = 8*/   };
            SELECT * FROM ${tableCalc_income_yy         /*Index = 9*/   };
        `;

    console.log("Tabels", sqlQuery);    
    return sqlQuery;
}