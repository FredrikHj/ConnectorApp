"use strict";
exports.__esModule = true;
exports.connectorConfig = void 0;
var backend = {
    port: 3001,
    host: "TESTSRV01"
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
var dbTable = {
    tableName: "tablename",
    tableExpen: "categoryexpenditure",
    tableIncome: "categoryincome",
    tablePaymentOp: "paymentoptions"
};
exports.connectorConfig = {
    backend: backend,
    sqlServer: sqlServer,
    database: database,
    dbTable: dbTable
};
