let $ = require('jquery');

module.exports = {
  get (url) {
    return new Promise((success, error) => {
      $.ajax({
        url,
        dataType: "json",
        success,
        error
      });
    });
  },

  post (url, data) {
    return new Promise((success, error) => {
      $.ajax({
        url,
        type: 'POST',
        data,
        success,
        error
      });
    });
  },

  patch (url, data) {
    return new Promise((success, error) => {
      $.ajax({
        url,
        type: 'PATCH',
        data,
        success,
        error
      });
    });
  },

  del (url) {
    return new Promise((success, error) => {
      $.ajax({
        url,
        type: 'DELETE',
        success,
        error
      });
    });
  }
}
