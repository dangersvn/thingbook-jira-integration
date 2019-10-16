// app
const configShared = require('./config.shared');
const configDev = require('./config.dev');
const configPTest = require('./config.ptest');
const configProd = require('./config.prod');

const endpointDev = require("./endpoints.dev");
const endpointQA = require("./endpoints.qa");
const endpointPTest = require("./endpoints.ptest");
const endpointProd = require("./endpoints.prod");

const ENVIRONMENT = {
    FREE: 1,
    DEV: 2,
    QA: 3,
    PTEST: 4,
    PROD: 5,
}
const ACTIVE_ENV = getEnvironmentFromBIC() || ENVIRONMENT.PROD;

function getEnvironmentFromBIC() {
    let activeEnv;
    let environment = process.env.SPRING_PROFILES_ACTIVE;
    console.log("User provided Environment var: ", environment);
    if (environment) {
        switch (environment) {
            case "dev":
                activeEnv = ENVIRONMENT.DEV;
                console.log("Activated Environment: ", "DEV")
                break;
            case "tst":
                activeEnv = ENVIRONMENT.QA;
                console.log("Activated Environment: ", "Q")
                break;
            case "ptst":
                activeEnv = ENVIRONMENT.PTEST;
                console.log("Activated Environment: ", "PTEST")
                break;
            case "prd":
                activeEnv = ENVIRONMENT.PROD;
                console.log("Activated Environment: ", "PROD")
                break;
        }
    }
    return activeEnv;
}
function getConfig() {
    if(ACTIVE_ENV === ENVIRONMENT.DEV ) {
        return configDev
    } else if(ACTIVE_ENV === ENVIRONMENT.QA) {
        return configDev;
    } else if(ACTIVE_ENV === ENVIRONMENT.PTEST) {
        return configPTest;
    } else if(ACTIVE_ENV === ENVIRONMENT.PROD) {
        return configProd;
    } else if(ACTIVE_ENV === ENVIRONMENT.FREE) {
        return configShared
    }
}

function getEndpoint() {
    if(ACTIVE_ENV === ENVIRONMENT.DEV ) {
        return endpointDev
    } else if(ACTIVE_ENV === ENVIRONMENT.QA) {
        return endpointQA;
    } else if(ACTIVE_ENV === ENVIRONMENT.PTEST) {
        return endpointPTest;
    } else if(ACTIVE_ENV === ENVIRONMENT.PROD) {
        return endpointProd;
    }
}

module.exports = Object.assign({}, { ACTIVE_ENV, ENVIRONMENT, getConfig, getEndpoint});
