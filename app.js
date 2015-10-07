var app = require('express')();
var http = require('http').createServer(app);
var path = require('path');
var swig = require('swig');
var moment = require('moment');
var port = process.env.PORT || '3000';


app.get('/', function(req, res){
  res.render('index', {});
});




app.set('views', path.join(__dirname, 'views'));
app.set('port', port);
app.set('view engine', 'html');
app.engine('html', swig.renderFile);



http.listen(port);