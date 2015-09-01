import React from 'react/addons';
import Flick from './Flick.jsx';
import AddFlick from './AddFlick.jsx';

module.exports = React.createClass({
  renderFlicks () {
    return this.props.flicks.map((flick, i) => {
      return (<Flick key={`flick-${i}`} flick={flick} />);
    });
  },

  render () {
    return (
      <div>
        <div>{this.renderFlicks()}</div>
        <AddFlick />
      </div>
    );
  }
});
