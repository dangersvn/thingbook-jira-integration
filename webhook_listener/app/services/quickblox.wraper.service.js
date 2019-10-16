// libs
const {
    Observable
} = require('rxjs');
const request = require('request');

// app
const {
    getEndpoint
} = require('../config');

const { API_KEY } = require('../config/config.prod');

/**
 * Create QuickBlox Session
 * @param {*} user 
 */
function getQuickBloxSession(username, password) {
    return Observable.create(function (observer) {
        if (username && password) {
            let qbUrl = `${getEndpoint().quickbloxWrapper}/quickblox/sessions?keyId=${API_KEY}`;
            console.log("getQuickBloxSession URL: ", qbUrl);
            request.get({
                url: qbUrl,
                headers: {
                    "USER-ID": username,
                    "PASSWORD": password
                }
            }, function (err, httpResponse, body) {
                console.log("getQuickbloxSession response: ", body);
                if (err) {
                    console.log("Can't create session. Err: ", err);
                    observer.error(err);
                } else {
                    let parsedBody;
                    try {
                        parsedBody = JSON.parse(body);
                        console.log("getQBSession response: ", parsedBody);
                    } catch (err) {
                        console.error("getQBSession - Invalid response data");
                        observer.error(err);
                    }

                    if (!parsedBody || !parsedBody.data || !parsedBody.data.userId || !parsedBody.data.sessionId) {
                        observer.error("getQuickBloxSession: Required fields not found");
                    } else {
                        observer.next(parsedBody.data);
                    }
                }
            });
        } else {
            observer.error("Please provide username and password");
        }
    });
}

module.exports = Object.assign({}, {
    getQuickBloxSession
});
