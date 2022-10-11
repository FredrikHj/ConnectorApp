const backend: { port: number, host: string } = {
    port: 3001,
    host: "TESTSRV01"
};

//const connectingTo:
const sqlServer: { instanceWinServ: string, instanceWinClient: string, trustedConnection: boolean, integratedSecurity: boolean, multipleStatements: boolean } = {
    instanceWinServ: "",
    instanceWinClient: "\\SQLEXPRESS",
    trustedConnection: true,
    integratedSecurity: true,
    multipleStatements: true,
};


const database: {name: string, port: number, table:string, user:string, password: string}= {
    name: "budgetplanner",
    port: 3306,
    table: "OrderTestFredrikHj",
    user: "adminBPlanner",
    password: "dwqe76uumyJYUT"

};

const dbTable: {tableExpen: string, tableIncome: string, tablePaymentOp: string, tableName: string} = {
    tableName: "tablename",
    tableExpen: "categoryexpenditure",
    tableIncome: "categoryincome",
    tablePaymentOp: "paymentoptions"
};

export let connectorConfig: {backend: object, sqlServer: object, database: object, dbTable: object} = { 
    backend, sqlServer, database, dbTable
}