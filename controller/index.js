var Profile = require('../models/profiles');

exports.render = function(req, res){
  Profile.find({}, function(err, profiles) {
    console.log(profiles)
    if (err) return res.send(err);
    res.render('index', {data: profiles});
  })
}
