var dispatcher = require('./../dispatcher');

function FlickStore() {
  var flicks = [
    { id: 1, title: "Mauvais sang", watched: true },
    { id: 2, title: "Pure Vice", watched: true },
    { id: 3, title: "Los Hongos" }
  ];
  var listeners = [];

  function getFlicks() {
    return flicks;
  }

  function onChange(listener) {
    listeners.push(listener);
  }

  function _addFlick(flick) {
    flicks.push(flick);
    _triggerListeners();
  }

  function _triggerListeners() {
    listeners.forEach(function (listener) {
      listener(flicks);
    });
  }

  dispatcher.register(function (event) {
    var splitEventType = event.type.split(':'),
        eventCategory  = splitEventType[0],
        eventAction    = splitEventType[1];

    if (eventCategory === 'flick') {
      switch (eventAction) {
        case "add": _addFlick(event.payload);
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
