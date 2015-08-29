var React = require('react'),
    Flick = require('./Flick.jsx');

module.exports = React.createClass({
  renderFlicks: function () {
    const flicks = this.props.flicks;
    return flicks.map(function (flick, i) {
      return <Flick key={flick.id} flick={flick} />;
    })
  },

  render: function () {
    return (
      <div>
        <h1>To-Watch</h1>
        <div>{this.renderFlicks()}</div>
      </div>
    );
  }
});
