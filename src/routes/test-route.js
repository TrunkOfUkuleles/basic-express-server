'use strict';

const express = require('express');

const Test = require('../models/TestModel.js');
const tests = new Test();

const testRouter = express.Router();

// RESTful routes

// http://localhost:3333/things
testRouter.get('/books', getIt);
testRouter.get('/books/:id', getOne);
testRouter.post('/books', createThing)
testRouter.put('/books/:id', updateIt);
testRouter.delete('/books/:id', deleteIt);

function getIt(req, res) {
    let getAllOfEm = tests.read();
    res.status(200).json(getAllOfEm);
  }
  
  function getOne(req, res) {
    const id = parseInt(req.params.id);
    let one = tests.read(id);
    res.status(200).json(one);
  }
  
  function createThing(req, res) {
    let content = req.body;
    let testCreation = tests.create(content);
    res.status(201).json(testCreation);
  }
  
  function updateIt(req, res) {
    // placeholder for now
    let updated = req.body;
    let id = parseInt(req.params.id);
    let updatedBook = tests.update(id, updated)
    res.status(202).json(updatedBook)
  }
  
  function deleteIt(req, res) {
    // placeholder for now
    let id = parseInt(req.params.id);
    let deletedBook = tests.delete(id);
    res.status(202).json(deletedBook)
  }
  
  module.exports = testRouter;