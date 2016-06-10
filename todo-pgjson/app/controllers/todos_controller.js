module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');
  const Todo = Nodal.require('app/models/todo.js');

  class TodosController extends Nodal.Controller {

    index() {

      Todo.query()
        .where(this.params.query)
        .end((err, models) => {

          this.respond(err || models, ["id", "tasks"]);

        });

    }

    show() {

      Todo.find(this.params.route.id, (err, model) => {

        this.respond(err || model);

      });

    }

    create() {

      Todo.create(this.params.body, (err, model) => {

        this.respond(err || model);

      });

    }

    update() {

      Todo.update(this.params.route.id, this.params.body, (err, model) => {

        this.respond(err || model);

      });

    }

    destroy() {

      Todo.destroy(this.params.route.id, (err, model) => {

        this.respond(err || model);

      });

    }

  }

  return TodosController;

})();
