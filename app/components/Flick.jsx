import React from 'react';
import action from './../stores/FlickListActionCreator';

module.exports = React.createClass({
  toggleWatched (event) {
    event.preventDefault();
    this.props.flick.watched ? action.unwatch(this.props.flick) : action.watch(this.props.flick);
  },

  del (event) {
    event.preventDefault();
    action.del(this.props.flick);
  },

  render () {
    return (
      <div className="row">
        <div className="col-md-4">
          <h4 className={this.flickStyle()}>
            {this.props.flick.title}
          </h4>
        </div>
        <form className="col-md-2" onSubmit={this.toggleWatched}>
          <button className={this.watchUnwatchButtonStyle()}>
            {this.watchUnwatchButtonText()}
          </button>
        </form>
        <form className="col-md-1" onSubmit={this.del}>
          <button className="btn">&times;</button>
        </form>
      </div>
    );
  },

  flickStyle () { return (this.props.flick.watched ? "strikethrough" : ""); },
  watchUnwatchButtonStyle () { return (this.props.flick.watched ? "btn btn-default" : "btn btn-primary"); },
  watchUnwatchButtonText () { return (this.props.flick.watched ? "Unwatch" : "Watch"); }
});
