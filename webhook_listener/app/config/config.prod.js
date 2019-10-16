var appRoot = require('app-root-path');

var QBconfig = {
    credentials: {
        appId: process.env.QB_APP_ID || '',
        authKey: process.env.QB_AUTH_KEY || '',
        authSecret: process.env.QB_AUTH_SECRET || ''
    },
    appConfig: {
        endpoints: {
            api: 'api-boschthingbook.quickblox.com',
            chat: 'chat-boschthingbook.quickblox.com',
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

const API_KEY = process.env.API_KEY || "";
const PA_USERNAME = process.env.PA_USERNAME || "";
const PA_PASSWORD = process.env.PA_PASSWORD || "";
const DIALOG_ID = process.env.DIALOG_ID || "";
const JIRA_HOSTNAME = process.env.JIRA_HOSTNAME || "";

module.exports = Object.assign({}, { QBconfig, API_KEY, PA_USERNAME, PA_PASSWORD, DIALOG_ID, JIRA_HOSTNAME })
