const {getConfig, getEndpoint, getDBConfig, ENVIRONMENT, ACTIVE_ENV} = require("./app.environment")


module.exports = Object.assign({}, {
    getConfig,
    getEndpoint,
    ENVIRONMENT, 
    ACTIVE_ENV,
    getDBConfig,
})