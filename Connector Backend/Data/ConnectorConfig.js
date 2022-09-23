exports.connectorConfig = {
    "backend": {
        "port": 3001,
        "winServer": "TESTSRV01"
    },
    "connectingTo": {
        "sqlServer": {
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
        }
    }
}