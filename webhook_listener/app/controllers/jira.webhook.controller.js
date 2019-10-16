const qbWraperService = require("../services/quickblox.wraper.service");
const qbService = require("../services/quickblox.service");

//========================= SHOULD NOT HARD CODED ==========================
const {PA_USERNAME,PA_PASSWORD, DIALOG_ID, JIRA_HOSTNAME } = require("../config/config.prod");
console.log("USER ", PA_USERNAME);
//========================= END ==========================

exports.issueCreated = function(req, res) {
	var body = req.body;
	
	if(body) {
		console.log(JSON.stringify(body, null, 4));
		console.log("================ Webhook info ================");
		console.log("timestamp: ", body.timestamp);
		console.log("webhookEvent: ", body.webhookEvent);
		console.log("issue_event_type_name: ", body.issue_event_type_name);
		console.log("== Issue info == ");
		console.log("issue.id: ", body.issue.id);
		console.log("issue.key: ", body.issue.key);
		console.log("issue.self: ", body.issue.self);
		console.log("issue type: ", body.issue.fields.issuetype.name);
		console.log("issue.summary: ", body.issue.fields.summary);
	} else {
		console.log("No content");
	}
	// 
    res.end("Post Successfully: \n" + JSON.stringify(body, null, 4));
};

function sendMessageToUser(dialogId, message) {
	return qbWraperService.getQuickBloxSession(PA_USERNAME, PA_PASSWORD).subscribe(
		response => {
			let token = response.sessionId;
			qbService.createMessage(token, dialogId, message).subscribe(
				response => {
					console.log("Successfully send message to user.");
				},
				err => {console.log("Can't sendMessageToUser. Error: ", err)}
			)
		},
		err => {
			console.log("Can't get qb session. Error: ", err);
		}
	);
}
exports.issues = function(req, res) {
	var body = req.body;
	if(body) {
		console.log(JSON.stringify(body, null, 4));
		console.log("================ Webhook info ================");
		console.log("timestamp: ", body.timestamp);
		console.log("webhookEvent: ", body.webhookEvent);
		console.log("issue_event_type_name: ", body.issue_event_type_name);
		
		if( body.issue) {
			console.log("== Issue info == ");
			console.log("issue.id: ", body.issue.id);
			console.log("issue.key: ", body.issue.key);
			console.log("issue.self: ", body.issue.self);
			console.log("issue type: ", body.issue.fields.issuetype.name);
			console.log("issue.summary: ", body.issue.fields.summary);
			// todo: call qb wraper service to get session and send message to user
			var date = new Date();
			var h = date.getHours();
			var m = date.getMinutes();
			var s = date.getSeconds();

			var time = `${h}:${m}:${s}`; 
			var linkToIssue = `${JIRA_HOSTNAME}/plugins/servlet/mobile#issue/${body.issue.key}`;
			console.log("Issue detail link: ", linkToIssue);
			const messageTemplate = `${date.toDateString()} ${time}, Event: ${body.webhookEvent}, Message: ${body.issue.fields.summary},Detail: ${linkToIssue}`;
			console.log("Message: ", messageTemplate);

			sendMessageToUser(DIALOG_ID, messageTemplate);

		}
	} else {
		console.log("No content");
	}
    res.end("Post Successfully: \n" + JSON.stringify(body, null, 4));
};