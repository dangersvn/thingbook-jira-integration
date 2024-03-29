var appRoot = require('app-root-path');

var QBconfig = {
    credentials: {
        appId: 3,
        authKey: '',
        authSecret: ''
    },
    appConfig: {
        endpoints: {
            api:  '',
            chat: ''
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

var appConfig = {
    dilogsPerRequers: 15,
    messagesPerRequest: 50,
    usersPerRequest: 15,
    typingTimeout: 3 // 3 seconds
};

var CONSTANTS = {
    DIALOG_TYPES: {
        CHAT: 3,
        GROUPCHAT: 2,
        PUBLICCHAT: 1
    },
    ATTACHMENT: {
        TYPE: 'image',
        BODY: '[attachment]',
        MAXSIZE: 2 * 1000000, // set 2 megabytes,
        MAXSIZEMESSAGE: 'Image is too large. Max size is 2 mb.'
    },
    NOTIFICATION_TYPES: {
        NEW_DIALOG: '1',
        UPDATE_DIALOG: '2'
    }
};

module.exports = Object.assign({}, { QBconfig  })
