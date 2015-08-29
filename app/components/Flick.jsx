var React = require('react');

module.exports = React.createClass({
  watched: function () {
    const flick = this.props.flick;
    return (flick.watched ? "strikethrough" : "");
  },

  render: function () {
    return (
      <div className="row">
        <div className="col-md-6">
          <h4 className={this.watched()}>
            {this.props.flick.title}
          </h4>
        </div>
      </div>
    );
  }
});
