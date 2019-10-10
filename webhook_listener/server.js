var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json())
app.use(express.static('public'))


require('./app/routes/jira.webhook.routes.js')(app);

// Create a Server
var server = app.listen(8000, function () {

  var host = server.address().address;
  var port = server.address().port

  console.log("App listening at http://%s:%s", host, port)

})