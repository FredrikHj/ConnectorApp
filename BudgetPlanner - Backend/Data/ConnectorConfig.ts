import { ServerStreamFileResponseOptionsWithError } from "http2";
// Configuration for SQL and computer connections
const backend: { port: number, host: string } = {
    port: 3001,
    host: "Asset01"
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

// Add a new row for each new tables    
const dbTable: {
                    tableExpen: string, tableIncome: string, tablePaymentOp: string,
                    tableHeadlines_texts: string, tableNavbarlinks: string,
                    tableMonths_header: string, tableTransactions_header: string,
                    tableTransactions_calcdata: string, tableCalc_expenditure_yy: ServerStreamFileResponseOptionsWithError,
                    tableCalc_income_yy: string
               } = {
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

export let connectorConfig: {
    backend: object, sqlServer: object, database: object, 
    dbTable: object} = { 
        backend, sqlServer, database, dbTable
}