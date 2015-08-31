var React = require('react'),
   action = require('./../actions/FlickListActionCreator');

module.exports = React.createClass({
  getInitialState: function () {
    return { flickTitle: "" };
  },
  handleFlickTitle: function (event) {
    this.setState({
      flickTitle: event.target.value
    });
  },
  addFlick: function (event) {
    event.preventDefault();
    action.add({
      title: this.state.flickTitle,
      watched: false
    });
    this.setState({ flickTitle: '' });
  },
  render: function () {
    return (
      <div className='add-flick form-group'>
        <form onSubmit={this.addFlick}>
          <input value={this.state.flickTitle} type='text' onChange={this.handleFlickTitle} />
          <button type="submit" className="btn btn-default"> Add Flick </button>
        </form>
      </div>
    );
  }
});
