var React = require('react'),
   action = require('./../actions/FlickListActionCreator');

module.exports = React.createClass({
  watched: function () {
    const flick = this.props.flick;
    return (flick.watched ? "strikethrough" : "");
  },

  delete: function (event) {
    event.preventDefault();
    action.delete(this.props.flick);
  },

  render: function () {
    return (
      <div className="row">
        <div className="col-md-6">
          <h4 className={this.watched()}>
            {this.props.flick.title}
          </h4>
        </div>
        <form className="col-md-3" onSubmit={this.delete}>
          <button>&times;</button>
        </form>
      </div>
    );
  }
});
