var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/flicks', function () {
  console.log("Testing mongoDB connection with mongoose.");
})
