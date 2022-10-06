// Import the Connection config
let incommingConfig = require('./ConnectorConfig');
const serverConfig = incommingConfig.connectorConfig;

// Tables
exports.tableExpen = serverConfig.connectingTo.MariaDb.database.tableExpen;
exports.tableIncome = serverConfig.connectingTo.MariaDb.database.tableIncome;
exports.tablePaymentOpt = serverConfig.connectingTo.MariaDb.database.tablePaymentOp;

// Config
exports.configBackendPort = serverConfig.backend.port;
exports.configHost = serverConfig.backend.host;
exports.configUser = serverConfig.connectingTo.MariaDb.database.user;
exports.configPassword = serverConfig.connectingTo.MariaDb.database.password;
exports.configSqlDbPort = serverConfig.connectingTo.MariaDb.database.port;
exports.configdDtabase = serverConfig.connectingTo.MariaDb.database.name;
exports.configMultipleStatements = serverConfig.connectingTo.MariaDb.multipleStatements;