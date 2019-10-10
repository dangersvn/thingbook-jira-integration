ls
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
		}
	} else {
		console.log("No content");
	}
    res.end("Post Successfully: \n" + JSON.stringify(body, null, 4));
};