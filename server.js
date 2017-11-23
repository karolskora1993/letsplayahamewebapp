var express = require("express");
bodyParser = require("body-parser")
app.use(bodyParser.json());


var app = express();
var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
  });
