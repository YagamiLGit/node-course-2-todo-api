var mongoose = require('mongoose');

var Users = mongoose.model('User', {
  name: {
    type: String,
    required: true,
    trim: true,
    minleghth: 1
  },
  email: {
    type: String,
    required: true,
    trim: true,
    minleghth: 1
  },
  contact: {
    type: Number,
    reqired: true,
    trim: true,
    minleghth: 10
  }
});

module.exports = {Users};
