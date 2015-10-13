var mongoose = require('mongoose');

var profileSchema = new mongoose.Schema({
    name: {
      type: String
    },
    imageLink: {
      type: String
    },
    age: {
      type: Number
    },
    mutualFriends: {
      type: Number
    }
});

module.exports = mongoose.model('Profile', profileSchema)
