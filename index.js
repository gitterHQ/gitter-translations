'use strict';

var path = require('path');

module.exports = {
  getMessagesPath: function() {
    return path.join(__dirname, 'messages');
  },
  getHomePagePath: function() {
    return path.join(__dirname, 'homepage');
  },
}
