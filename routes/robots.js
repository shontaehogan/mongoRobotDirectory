const express = require('express');
const routes = express.Router();
const db = require('../db');


routes.get('/', (req, res) => {
  let collection1 = db.get().collection('robot');

console.log("test")

    collection1.find({}).toArray(function(err, robot) {
    res.render('index', { robot: robot });
  });
});


console.log("test2")

routes.get('/:search', (req, res) => {
  let collection2 = db.get().collection('robot');

  collection2.findOne({username: req.params.search}, (err, robot) => {
    res.render('userInfo', robot);
  });
});
console.log("test3")

module.exports = routes;
