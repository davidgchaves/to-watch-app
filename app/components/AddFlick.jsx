import React from 'react/addons';
import action from './../stores/FlickListActionCreator.jsx';

module.exports = React.createClass({
  getInitialState () {
    return { input: "" };
  },

  handleFlickTitle (event) {
    this.setState({
      input: event.target.value
    });
  },

  addFlick (event) {
    event.preventDefault();
    action.add({
      title: this.state.input
      //watched: false
    });
    this.setState({ input: '' });
  },

  render () {
    return (
      <div className='add-flick form-group'>
        <form onSubmit={this.addFlick}>
          <input value={this.state.input} type='text' required onChange={this.handleFlickTitle} />
          <button type="submit" className="btn btn-default"> Add To-Watch Flick </button>
        </form>
      </div>
    );
  }
});
