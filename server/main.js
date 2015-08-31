var express    = require('express'),
    app        = express(),
    parser     = require('body-parser'),
    React      = require('react'),
    FlickModel = require('./models/FlickModel');

require('./database');
require('babel/register');

app
  .get('/', function (req, res) {
    var reactVirtualApp = React.createFactory(require('./../app/components/FlickList.jsx'));
    FlickModel.find(function (error, dbDoc) {
      var serverGeneratedFlicksComponent = React.renderToString(reactVirtualApp({ flicks: dbDoc }));
      res.render('./../app/index.ejs', { reactOutput: serverGeneratedFlicksComponent });
    });
  })
  .use(express.static(__dirname + './../build'))
  .listen(3000);

app.use(parser.json());
app.use(parser.urlencoded({ extended: false }));

require('./routes/flicks')(app);
