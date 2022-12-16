// ==================================== SQLfunctions handling ====================================

//SQL Module
let mySql = require('mysql');

// Import the Connection config
let serverConfig = require('../Data/ConnectorConfigPath');

// Import the Database´s tables
let incommingDbTables = require('../Data/ConnectorConfigPath').dbTables;
// Some useful variables used in the functions bellow 
let sendSqlData = {};

/* =======================================================================================================================
Headfunction for Connetions*/
exports.runMariaDbConnect = (getSqlQuery) => {
    // Creates a connection between the server and my client and listen for SQL changes 
    console.log("runMariaDbConnect"); 
    let SQLConn = mySql.createConnection({
        host: serverConfig.configHost,
        user: serverConfig.configUser,
        password: serverConfig.configPassword,
        port: serverConfig.configSqlDbPort,
        database: serverConfig.configdDtabase,
        multipleStatements: serverConfig.configMultipleStatements,
    });
    SQLConn.connect(function(err) {
        if (err) throw err;        
        SQLConn.query(getSqlQuery, function (error, sqlResult) {
            
            console.log("Connect for the MariaDB :)");
            console.log("Incomming tableData", sqlResult.length);
            // Sen the incomming data to be sorted in appropiated arraies
                sqlSort(sqlResult);
            
            if (err) {
                return;
            }
        }); 
        // Closing the connection
        SQLConn.end(); 
    });
}
let sqlSort = (sqlData) => {
    sendSqlData = {
        defaultDataReady: true,                 /* Tell the system to load the compilation View data */
        compilationView: {                      /* All table for the differents views */
            categorieHeadlinesArr: sqlData[0],  /* tableHeadlinesTexts = Container for general headlines for the website */
            categorieListsArr: [                /* Container for the categories list */
                sqlData[1],                     /* tableIncome */
                sqlData[2],                     /* tableExpen */
                sqlData[3],                     /* tablePayOptions */
            ],
            monthHeaders: sqlData[5],           /* tableMonthsHeader for the month header */
            calc_expenditure_yy: sqlData[8],    /* tableCalc_expenditure_yy for the "CompilationCatCalcView" and for the year staded later instead of ..._yy */
            calc_income_yy: sqlData[9],         /* tableCalc_income_yy for the "CompilationCatCalcView" and for the year staded later instead of ..._yy */
        },
        transactions: {
            transactions_header: sqlData[6],    /*  */
            transactions_calcdata: sqlData[7],  /*  */
        },
        navLinks: sqlData[4],                   /* tableNavBarLinks with headlines for the app´s headbar */
    };
}

// Exported functions running when called from runSQLConn 
exports.getConnectionData = () => {
    return sendSqlData;
};

// Functions to be running at the end and after the data is sent to frontend. This emtying the array! 
exports.resetConnectionData = () => {
    sendSqlData = [];
}