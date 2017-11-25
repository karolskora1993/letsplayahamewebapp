var express = require("express");
var bodyParser = require("body-parser")
const { Client } = require('pg')

var app = express();
app.use(bodyParser.json());

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});

client.connect();

var server = app.listen(process.env.PORT || 8080, function () {
  var port = server.address().port;
  console.log("App now running on port", port);
});

app.get("/api/user/:id", function(req, res) {
  var id = req.params.id
  var fetched_user = {
    id: 1,
    name: "name",
    surname: "surname",
    age: 22,
    sex: "Female",
    city: "Kraków",
    sports: ["running", "road_cycling"]
  }
  return res.status(200).json({
    status: 200,
    user: fetched_user
  }
)});

app.post("/api/user/register", function(req, res) {
  var registered_user = {
    id: 1,
    name: "name",
    surname: "surname",
    age: 22,
    sex: "Female",
    city: "Kraków",
    sports: ["running", "road_cycling"]
  }

  return res.status(200).json({
    status: 200,
    message: "user registered successfuly",
    user: registered_user
  });
});
