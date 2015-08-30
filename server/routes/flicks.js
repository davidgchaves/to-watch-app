module.exports = function (app) {
  var flicks = [
    { id: 1, title: "Mauvais sang", watched: true },
    { id: 2, title: "Pure Vice", watched: true },
    { id: 3, title: "Los Hongos" }
  ];

  app
    .route('/api/flicks')
    .get(function (req, res) {
      res.send(flicks);
    })
    .post(function (req, res) {
      var flick = req.body;
      flicks.push(flick);
    });
}
