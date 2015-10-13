var mongoose = require('mongoose');
var Profile = require('../models/profiles');
var async = require('async');

exports.connect = function() {
    mongoose.connect(process.env.mongoURI || "mongodb://austin809:147159aa@ds031903.mongolab.com:31903/tinder", function(err){
        if(err) throw err
          exports.connection = mongoose;
    });
    mongoose.connection.on('connected', function() {
      async.eachLimit(require('../seed').profiles, 1, function(obj, next) {
        var profile = new Profile(obj);
        profile.save(function(err, savedProfile){
          console.log(err || savedProfile);
          next();
        });
      }, function(err) {
        console.log(err || "Mongo successfully connected at", process.env.mongoURI || "mongodb://austin809:147159aa@ds031903.mongolab.com:31903/tinder");
      })
    });

    mongoose.connection.on('disconnected', function(){
        console.log('Mongo has disconnected');
    })
}
