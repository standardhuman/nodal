module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');

  class Todo extends Nodal.Model {}

  Todo.setDatabase(Nodal.require('db/main.js'));
  Todo.setSchema(Nodal.my.Schema.models.Todo);

  return Todo;

})();
