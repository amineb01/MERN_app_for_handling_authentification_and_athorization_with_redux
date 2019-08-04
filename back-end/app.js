const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const http = require('http');
var objectId = require('mongodb').objectId;
var cors = require('cors');
const app=express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(cors({credentials: true, origin: true}));

// app.use(express.static('uploads'));
// app.use(express.static('assets'));

const PORT = process.env.PORT || 9999
const server = http.createServer(app);

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.json());

require('./startup/routes')(app)
require('./startup/db')()

server.listen(PORT,()=>console.log("listen to "+PORT));
