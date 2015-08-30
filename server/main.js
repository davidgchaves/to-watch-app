var express = require('express'),
    app     = express(),
    parser  = require('body-parser');

app
  .get('/', function (req, res) {
    res.render('./../app/index.ejs', {});
  })
  .use(express.static(__dirname + './../build'))
  .listen(3000);

app.use(parser.json());
app.use(parser.urlencoded({ extended: false }));

require('./routes/flicks')(app);
