var appRoot = require('app-root-path');

var QBconfig = {
    credentials: {
        appId: 5,
        authKey: '',
        authSecret: ''
    },
    appConfig: {
        endpoints: {
            api: ``, // set custom API endpoint
            chat: `` // set custom Chat endpoint
        },
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
