import uuid from 'node-uuid';

let listeners = {};

let dispatcher = {
  register (callback) {
    let id = uuid.v4();
    listeners[id] = callback;
    console.log(`Registering listener with id: ${id}`);
    return id;
  },

  dispatch (payload) {
    console.info("Dispatching...", payload.type);

    for (let id in listeners) {
      let listener = listeners[id];
      listener(payload);
      console.log(`Dispatching to listener with id: ${id}`);
    };
  }
}

export default dispatcher;
