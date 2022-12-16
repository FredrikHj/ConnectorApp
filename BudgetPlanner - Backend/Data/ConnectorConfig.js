"use strict";
exports.__esModule = true;
exports.connectorConfig = void 0;
// Configuration for SQL and computer connections
var backend = {
    port: 3001,
    host: "Asset01"
};
//const connectingTo:
var sqlServer = {
    instanceWinServ: "",
    instanceWinClient: "\\SQLEXPRESS",
    trustedConnection: true,
    integratedSecurity: true,
    multipleStatements: true
};
var database = {
    name: "budgetplanner",
    port: 3306,
    table: "OrderTestFredrikHj",
    user: "adminBPlanner",
    password: "dwqe76uumyJYUT"
};
// Add a new row for each new tables    
var dbTable = {
    tableHeadlines_texts: "headlines_texts",
    tableExpen: "category_expenditure",
    tableIncome: "category_income",
    tablePaymentOp: "paymentoptions",
    tableNavbarlinks: "navbarlinks",
    tableMonths_header: "months_header",
    tableTransactions_header: "transactions_tableheadines",
    tableTransactions_calcdata: "transactions_tablecalculation",
    tableCalc_expenditure_yy: "calc_category_expenditure_yy",
    tableCalc_income_yy: "calc_category_income_yy"
};
exports.connectorConfig = {
    backend: backend,
    sqlServer: sqlServer,
    database: database,
    dbTable: dbTable
};
