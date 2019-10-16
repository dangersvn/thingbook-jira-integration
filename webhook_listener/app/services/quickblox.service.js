// libs
const {
    Observable
} = require('rxjs');
const request = require('request');

// app
const {
    getEndpoint
} = require('../config');

function createMessage(qbToken, dialogId, message) {
    const messageBody = {
        "chat_dialog_id":dialogId,
        "message": message,
        "send_to_chat": 1
    }
    return Observable.create(function (observer) {
        if (qbToken) {
            let qbUrl = "https://api-boschthingbook.quickblox.com/chat/Message.json";
            console.log("getQuickBloxSession URL: ", qbUrl);
            console.log("=============== Call createMessage ===============");

            request.post({
                url: qbUrl,
                headers: {
                    "QB-Token": qbToken
                },
                form:messageBody
            }, function (err, httpResponse, body) {
                console.log("============= CreateMessage response ========== \n", body);
                if (err) {
                    console.log("Can't create qb message. Err: ", err);
                    observer.error(err);
                } else {
                    console.log("Create message succesful");
                    observer.next(body);
                }
            });
        } else {}
    });
}

module.exports = Object.assign({}, {
    createMessage
});
