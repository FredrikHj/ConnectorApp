"use strict";
exports.__esModule = true;
exports.connectorConfig = void 0;
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
    tableExpen: "categoryexpenditure",
    tableIncome: "categoryincome",
    tablePaymentOp: "paymentoptions",
    tableNavbarlinks: "navbarlinks",
    tableMonths_header: "months_header"
};
exports.connectorConfig = {
    backend: backend,
    sqlServer: sqlServer,
    database: database,
    dbTable: dbTable
};
