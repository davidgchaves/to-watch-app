var React = require('react'),
   action = require('./../actions/FlickListActionCreator');

module.exports = React.createClass({
  flickStyle: function () {
    const flick = this.props.flick;
    return (flick.watched ? "strikethrough" : "");
  },

  watchUnwatchButtonStyle: function () {
    const flick = this.props.flick;
    return (flick.watched ? "btn btn-default" : "btn btn-primary")
  },

  watchUnwatchButtonText: function () {
    const flick = this.props.flick;
    return (flick.watched ? "Unwatch" : "Watch");
  },

  delete: function (event) {
    event.preventDefault();
    action.delete(this.props.flick);
  },

  toggleWatched: function (event) {
    event.preventDefault();
    this.props.flick.watched ? action.unwatch(this.props.flick) : action.watch(this.props.flick);
  },

  render: function () {
    return (
      <div className="row">
        <div className="col-md-6">
          <h4 className={this.flickStyle()}>
            {this.props.flick.title}
          </h4>
        </div>
        <form className="col-md-3" onSubmit={this.toggleWatched}>
          <button className={this.watchUnwatchButtonStyle()}>
            {this.watchUnwatchButtonText()}
          </button>
        </form>
        <form className="col-md-3" onSubmit={this.delete}>
          <button className="btn">&times;</button>
        </form>
      </div>
    );
  }
});
