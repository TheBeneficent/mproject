var express = require('express');
var app = express();
var db = require('./db');
var cors = require('cors')

global.__root   = __dirname + '/';

// app.use(cors());

app.get('/api', function (req, res) {
  res.status(200).send('API works.');
});


var UserController = require(__root + 'user/UserController');
app.use('/api/users', UserController); //know usercontrol by this address

app.use(express.static(__dirname + '/public'));

module.exports = app;