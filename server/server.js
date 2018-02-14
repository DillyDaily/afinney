var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var port = process.env.PORT || 8080;
var cors = require('cors');
var logger = require('morgan');
var knex = require('./db/knex');

var app = express();

app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', require('./config/routes.js'));

app.listen(port, function() {
  console.log("Listening on port: ", port);
})
