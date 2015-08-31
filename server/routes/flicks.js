module.exports = function (app) {
  var FlickModel = require('./../models/FlickModel');

  app.route('/api/flicks')
    .get(function (req, res) {
      FlickModel.find(function (error, dbDoc) { res.send(dbDoc); });
    })
    .post(function (req, res) {
      var flickModel = new FlickModel(req.body);

      flickModel.save(function (error, data) {
        if (error) { res.status(501).send(); }
        else       { res.status(300).send(data); };
      });
    });

  app.route('/api/flicks/:id')
    .get(function(req, res) {
      FlickModel.find({ _id: req.params.id}, function(error, dbDoc) {
        if (error) { res.status(404).send(); }
        else       { res.status(200).send(dbDoc); };
      });
    })
    .delete(function (req, res) {
      FlickModel.find({ _id: req.params.id })
        .remove(function () { res.status(202).send(); });
    })
    .patch(function (req, res) {
      FlickModel.findOne(
        { _id: req.body._id },
        function (error, dbDoc) {
          if (!dbDoc){ res.status(404).send(); }
          else {
            for (var key in req.body) { dbDoc[key] = req.body[key]; };
            dbDoc.save();
            res.status(200).send(dbDoc);
          };
        });
    });
}
