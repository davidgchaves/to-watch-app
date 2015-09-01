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
        if (error) {
          console.log("Error saving the model");
          res.status(501).send();
        } else {
          console.log("Model saved");
          res.status(300).send(data);
        }
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
                           if (!dbDoc){
                             console.log("Error updating the model");
                             return res.status(404).send();
                           }
                           for (var key in req.body) { dbDoc[key] = req.body[key]; };
                           dbDoc.save();
                           res.status(200).send(dbDoc);
                           console.log("Model Updated");
                         })
    });
}
