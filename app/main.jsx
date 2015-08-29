var React     = require('react'),
    FlickList = require('./components/FlickList.jsx');

var fakeData = [
  { id: 1, title: "Mauvais sang", watched: true },
  { id: 2, title: "Pure Vice", watched: true },
  { id: 3, title: "Los Hongos" }
];

React.render(<FlickList flicks={fakeData} />, app);
