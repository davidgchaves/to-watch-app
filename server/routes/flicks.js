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

  app
  .route('/api/flicks/:id')
    .delete(function (req, res) {
      FlickModel
        .findOne({ _id: req.params.id })
        .remove();
    })
    .patch(function (req, res) {
      FlickModel.findOne({ _id: req.body._id },
                         function (error, dbDoc) {
                           for (var key in req.body) { dbDoc[key] = req.body[key]; };
                           dbDoc.save();
                           res.status(200).send();
                          })
    });
}
