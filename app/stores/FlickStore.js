var dispatcher = require('./../dispatcher'),
    restHelper = require('./../helpers/RestHelper');

function FlickStore() {
  var flicks    = [],
      listeners = [];

  restHelper
    .get("api/flicks")
    .then(function (data) {
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
    flicks.push(flick);
    _triggerListeners();

    //TODO: Manage the case where the Promise returns with error
    // https://www.joyent.com/developers/node/design/errors
    restHelper.post("api/flicks", flick);
  }

  function _deleteFlick(flick) {
    var flickIndex;
    flicks.filter(function (_flick, _flickIndex) {
      if (_flick._id === flick._id)
        flickIndex = _flickIndex;
    });

    flicks.splice(flickIndex, 1);
    _triggerListeners();

    restHelper.del("api/flicks/" + flick._id);
  }

  function _watchFlick(flick) {
    var _flick = _get(flick);
    _flick.watched = true;
    _triggerListeners();

    restHelper.patch("api/flicks/" + flick._id);
  }

  function _unwatchFlick(flick) {
    var _flick = _get(flick);
    _flick.watched = false;
    _triggerListeners();

    restHelper.patch("api/flicks/" + flick._id, flick);
  }

  function _triggerListeners() {
    listeners.forEach(function (listener) {
      listener(flicks);
    });
  }

  function _get(flick) {
    return flicks.filter(function (f) { return f.title === flick.title; })[0];
  }

  dispatcher.register(function (event) {
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
          _watchFlick(event.payload);
          break;
        case "unwatch":
          _unwatchFlick(event.payload);
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
