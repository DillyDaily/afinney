const knex = require("../db/knex.js");

module.exports = {

    redirect: function(req, res) {
      res.redirect('/projects');
    },

    getAll: function(req, res) {
        knex('projects')
          .then(project => res.json(project))
    },
    
    getOne: function(req, res) {
        knex('projects')
            .where('id', req.params.id)
            .then(project => res.json(project))
    },
}