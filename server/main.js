var express    = require('express'),
    app        = new express(),
    parser     = require('body-parser'),
    React      = require('react/addons'),
    FlickModel = require('./models/FlickModel');

require('./database');
require('babel/register');

app.use(parser.urlencoded({ extended: false }))
  .use(parser.json())
  .get('/', function (req, res) {
    var reactVirtualApp = React.createFactory(require('./../app/components/FlickList.jsx'));
    FlickModel.find(function (error, dbDoc) {
      var serverGeneratedFlicksComponent = React.renderToString(reactVirtualApp({ flicks: dbDoc }));
      res.render('./../app/index.ejs', { reactOutput: serverGeneratedFlicksComponent });
    });
  })
  .use(express.static(__dirname + './../build'))
  .listen(3000);

require('./routes/flicks')(app);

module.exports = app;
