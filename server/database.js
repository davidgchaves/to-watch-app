var mongoose   = require('mongoose'),
    FlickModel = require('./models/FlickModel');

mongoose.connect('mongodb://localhost/flicks', function () {
  console.log("Testing mongoDB connection with mongoose.");

  // TODO: I'm not sure about this! Cleaning data!
  mongoose.connection.db.dropDatabase();

  var flicks = [
    { title: "Mauvais sang", watched: true },
    { title: "Pure Vice", watched: true },
    { title: "Los Hongos" }
  ];

  flicks.forEach(function (flick) {
    new FlickModel(flick).save();
  });
})
