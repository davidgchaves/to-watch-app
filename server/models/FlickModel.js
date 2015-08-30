var mongoose = require('mongoose');

var FlickSchema = {
  id: String,
  title: String,
  watched: Boolean
};

var FlickModel = mongoose.model('Flick', FlickSchema, "flicks");

module.exports = FlickModel;
