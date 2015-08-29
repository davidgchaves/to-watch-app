var express = require('express'),
    app     = express();

app.get('/', function (req, res) {
  res.render('./../app/index.ejs', {});
});

app.use(express.static(__dirname + './../build'));
app.listen(3000);
