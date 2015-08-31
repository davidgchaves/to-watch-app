module.exports = function (app) {
  var FlickModel = require('./../models/FlickModel');

  app
    .route('/api/flicks')
    .get(function (req, res) {
      FlickModel.find(function (error, dbDoc) {
        res.send(dbDoc);
      });
    })
    .post(function (req, res) {
      var flickModel = new FlickModel(req.body);

      flickModel.save(function (error, data) {
        res.status(300).send();
      });
    });
}
