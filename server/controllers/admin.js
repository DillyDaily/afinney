const knex = require("../db/knex.js");

module.exports = {

    redirect: function(req, res) {
      res.redirect('/admin/projects');
    },

    getAll: function(req, res) {
        knex('projects')
          .then(project => res.json(project))
    },
    
    // getOne: function(req, res) {
    //     knex('projects')
    //         .where('id', req.params.id)
    //         .then(project => res.json(project))
    // },

    createOne: function(req, res) {
        kenx('projects').insert(req.body).then(() => {
            knex('projects').select().then(projects => res.json(projects))
            });
    },

    updateOne: function(req, res) {
        knex('projects').update(req.body).where('id', req.params.id).then(function () {
            knex('projects').select().then(projects => res.json(projects))
        });
    },

    deleteOne: function(req, res) {
        knex('projects').del().where('id', req.params.id).then(function () {
            knex('projects').select().then(projects => res.json(projects))
        })
    },
    
}