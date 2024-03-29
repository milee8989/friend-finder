var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var path = require("path");

var PORT = process.env.PORT || 8000;


app.use(bodyParser.urlencoded({ exptended: true }));


app.use(bodyParser.json({ type: 'application/*+json'}));
app.use(bodyParser.raw({ type: 'application/vnd.custom-type'}));

app.use(bodyParser.text({ type: 'text/html'}));

require('./app/routing/api-routes.js')(app);
require('./app/routing/html-routes.js')(app);

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});