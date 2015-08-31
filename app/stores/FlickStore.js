import dispatcher from './../dispatcher';
import { get, post, patch, del } from './../RestHelper';

function FlickStore() {
  let flicks    = [],
      listeners = [];

  get("api/flicks")
    .then((data) => {
      flicks = data;
      _triggerListeners();
    });

  function getFlicks() {
    return flicks;
  }

  function onChange(listener) {
    listeners.push(listener);
  }

  function _addFlick(flick) {
    let flickIndex = flicks.push(flick);
    _triggerListeners();

    post("api/flicks", flick)
      .then((data) => { flick._id = data._id; })
      .catch(() => { flicks.splice(flickIndex, 1); });
  }

  function _deleteFlick(flick) {
    let flickIndex = flicks.findIndex((x) => { x._id === flick._id; });
    let removed = flicks.splice(flickIndex, 1)[0];
    _triggerListeners();

    del(`api/flicks/${flick._id}`)
      .catch(()=>{
        flicks.splice(flickIndex, 0, removed);
        _triggerListeners();
      });
  }

  function _watchUnwatchFlick(flick, watched) {
    let _flick = flicks.find((x) => { return x._id === flick._id; });
    _flick.watched = watched || false;
    _triggerListeners();

    patch(`api/flicks/ ${flick._id}`, flick);
  }

  function _triggerListeners() {
    listeners.forEach((l) => { l(flicks); });
  }

  dispatcher.register((event) => {
    var splitEventType = event.type.split(':'),
        eventCategory  = splitEventType[0],
        eventAction    = splitEventType[1];

    if (eventCategory === 'flick') {
      switch (eventAction) {
        case "add":
          _addFlick(event.payload);
          break;
        case "delete":
          _deleteFlick(event.payload);
          break;
        case "watch":
          _watchUnwatchFlick(event.payload, true);
          break;
        case "unwatch":
          _watchUnwatchFlick(event.payload, false);
          break;
      }
    }
  });

  return {
    getFlicks: getFlicks,
    onChange: onChange
  }
}

module.exports = new FlickStore();
