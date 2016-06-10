module.exports = (function() {

  "use strict";

  const Nodal = require('nodal');

  class CreateTodos extends Nodal.Migration {

    constructor(db) {
      super(db);
      this.id = 2016060921172314;
    }

    up() {

      return [
        this.createTable("todos", [{"name":"user_id","type":"int"},{"name":"tasks","type":"json"},{"name":"done","type":"boolean"}])
      ];

    }

    down() {

      return [
        this.dropTable("todos")
      ];

    }

  }

  return CreateTodos;

})();
