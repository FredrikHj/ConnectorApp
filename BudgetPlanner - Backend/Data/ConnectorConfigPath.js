// Import the Connection config
let incommingConfig = require('./ConnectorConfig');
const serverConfig = incommingConfig.connectorConfig;

// Tables
exports.tableName = serverConfig.dbTable.tableName;
exports.tableExpen = serverConfig.dbTable.tableExpen;
exports.tableIncome = serverConfig.dbTable.tableIncome;
exports.tablePaymentOpt = serverConfig.dbTable.tablePaymentOp;
exports.tableNavBarHeadlines = serverConfig.dbTable.tableNavbarlinks;

// Config
exports.configBackendPort = serverConfig.backend.port;
exports.configHost = serverConfig.backend.host;
exports.configUser = serverConfig.database.user;
exports.configPassword = serverConfig.database.password;
exports.configSqlDbPort = serverConfig.database.port;
exports.configdDtabase = serverConfig.database.name;
exports.configMultipleStatements = serverConfig.sqlServer.multipleStatements;