module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');
  const Tweet = Nodal.require('app/models/tweet.js');

  class V1TweetsController extends Nodal.Controller {

    index() {

      Tweet.query()
        .where(this.params.query)
        .end((err, models) => {

          this.respond(err || models, ['id','user_id','body','username','created_at']);

        });

    }

    show() {

      Tweet.find(this.params.route.id, (err, model) => {

        this.respond(err || model, ['id','user_id','body','username','created_at']);

      });

    }

    create() {

      Tweet.create(this.params.body, (err, model) => {

        this.respond(err || model, ['id','user_id','body','username','created_at']);

      });

    }

    update() {

      Tweet.update(this.params.route.id, this.params.body, (err, model) => {

        this.respond(err || model, ['id','user_id','body','username','created_at']);

      });

    }

    destroy() {

      Tweet.destroy(this.params.route.id, (err, model) => {

        this.respond(err || model, ['id','user_id','body','username','created_at']);

      });

    }

  }

  return V1TweetsController;

})();
