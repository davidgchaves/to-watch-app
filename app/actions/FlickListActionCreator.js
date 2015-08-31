var dispatcher = require('./../dispatcher');

module.exports = {
  add: function (flick) {
    dispatcher.dispatch({
      payload: flick,
      type: "flick:add"
    });
  },

  del: function (flick) {
    dispatcher.dispatch({
      payload: flick,
      type: "flick:delete"
    });
  },

  watch: function (flick) {
    dispatcher.dispatch({
      payload: flick,
      type: "flick:watch"
    });
  },

  unwatch: function (flick) {
    dispatcher.dispatch({
      payload: flick,
      type: "flick:unwatch"
    });
  }
}
