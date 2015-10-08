var app = require('express')();
var express = require('express');
var http = require('http').createServer(app);
var path = require('path');
var swig = require('swig');
var moment = require('moment');
var port = process.env.PORT || '3000';
var controller = require('./controller')

app.get('/', controller.render);


app.set('views', path.join(__dirname, 'views'));
app.set('port', port);
app.set('view engine', 'html');
app.engine('html', swig.renderFile);
app.use(express.static(path.join(__dirname, 'public')));


http.listen(port);
