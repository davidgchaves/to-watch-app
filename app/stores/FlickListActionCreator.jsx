import dispatcher from './../dispatcher';

module.exports = {
  add (flick) {
    dispatcher.dispatch({
      payload: flick,
      type: "flick:add"
    });
  },

  remove (flick) {
    dispatcher.dispatch({
      payload: flick,
      type: "flick:remove"
    });
  },

  watch (flick) {
    dispatcher.dispatch({
      payload: flick,
      type: "flick:watch"
    });
  },

  unwatch (flick) {
    dispatcher.dispatch({
      payload: flick,
      type: "flick:unwatch"
    });
  }
}
