const express = require('express');
const router = express.Router();
const users = require("../controllers/users.js");
const admin = require("../controllers/admin.js");

//User routes
router.get('/', users.redirect);
router.get('/projects', users.getAll);
router.get('/project/:id', users.getOne);

//Admin routes
router.get('/admin', admin.redirect);
router.get('/admin/projects', admin.getAll);
router.get('/admin/project/:id', admin.getOne);
router.post('/admin/projects', admin.createOne);
router.patch('/admin/project/:id', admin.updateOne);
router.delete('/admin/project/:id', admin.deleteOne);

module.exports = router;