var appRoot = require('app-root-path');
var QBconfig = {
    credentials: {
        appId: 67934,
        authKey: '',
        authSecret: ''
    },
    appConfig: {
        chatProtocol: {
            active: 2
        },
        streamManagement: {
            enable: false
        },
        debug: {
            mode: 1,
            file: `${appRoot}/logs/quickblox_debug.log`
        }
    }
};
module.exports = Object.assign({}, { QBconfig  })
