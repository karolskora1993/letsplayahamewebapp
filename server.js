var express = require("express");
var bodyParser = require("body-parser")
var Client = require('pg')
var consts = require('./app_consts.js')

app.use(bodyParser.json());

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});

client.connect();

var app = express();
var server = app.listen(process.env.PORT || 8080, function () {

});
