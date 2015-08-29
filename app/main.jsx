var React      = require('react'),
    FlickList  = require('./components/FlickList.jsx'),
    flickStore = require('./stores/FlickStore');

var data = flickStore.getFlicks();

function render() {
  React.render(<FlickList flicks={data} />, app);
}

flickStore.onChange(function (flicks) {
  data = flicks;
  render();
});

render();
