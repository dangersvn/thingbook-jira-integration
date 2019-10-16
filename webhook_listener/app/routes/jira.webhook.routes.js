module.exports = function (app) {

    var webhooks = require('../controllers/jira.webhook.controller.js');

    // health check endpoint
    app.get('/health', (req, res) => {
        res.json({ status: 'UP' });
    });

    // Jira issue created: version register via App Connect (atlassian-connect.json)
    app.post('/api/webhook/issue-created', webhooks.issueCreated);

    // Jira issue created: version register via webhook management thttps://dangersvn.atlassian.net/plugins/servlet/webhooks
    app.post('/api/webhooks/issues', webhooks.issues);
}