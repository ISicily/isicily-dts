var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var baseRouter = require('./routes/base');
var collectionsRouter = require('./routes/collections');
var documentsRouter = require('./routes/documents');


var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/dts/api', baseRouter);
app.use('/dts/api/collections', collectionsRouter);
app.use('/dts/api/documents', documentsRouter);

module.exports = app;
