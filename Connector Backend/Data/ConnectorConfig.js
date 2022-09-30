exports.connectorConfig = {
    "backend": {
        "port": 3001,
        "host": "TESTSRV01"
    },
    "connectingTo": {
        "msSqlServer": {
            "instanceWinServ": "",
            "instanceWinClient": "\\SQLEXPRESS",
            "trustedConnection": true,
            "integratedSecurity": true,
            "database": {
                "name": "OrderFredrikHj",
                "port": 3306,
                "table": "OrderTestFredrikHj",
                "user": "OH\\Fredrik.Hjarpe",
                "password": ""
            }
        },
        "MariaDb": {
            "multipleStatements": true,
            "database": {
                "name": "budgetPlanner",
                "port": 3306,
                "tableExpen": "categoryexpenditure",
                "tableIncome": "categoryincome",
                "tablePaymentOp": "paymentoptions",
                "user": "budgetPlanner",
                "password": "TGHRgrevbdIO6r5"
            }
        }
    }
}