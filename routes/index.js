'use strict';
const jsonfile = require('jsonfile');
const express = require('express');

module.exports = function() {
  let router = express.Router();

  // Setup
  router.use((req, res, next) => {
    res.locals.title = 'The List Lover Loves Lists';
    res.locals.pageClass = 'Page-index';
    next();
  });

  // Routes
  router.get('/', index);

  // Actions
  function index(req, res, next) {
    res.render('index');
  }

  return router;
}; 
