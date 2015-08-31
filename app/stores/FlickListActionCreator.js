import dispatcher from './../dispatcher';

module.exports = {
  add (flick) {
    dispatcher.dispatch({
      payload: flick,
      type: "flick:add"
    });
  },

  del (flick) {
    dispatcher.dispatch({
      payload: flick,
      type: "flick:delete"
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
