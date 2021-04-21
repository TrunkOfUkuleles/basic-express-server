'use strict';

const express = require('express');

const SnackModel = require('../models/SnackModel.js');
const books = new SnackModel();

const snackRouter = express.Router();

// RESTful routes

// http://localhost:3333/things
router.get('/books', getBooks);
router.get('/books/:id', getOneBook);
router.post('/books', createBook)
router.put('/books/:id', updateBook);
router.delete('/books/:id', deleteBook);

// RESTful route handlers

function getSnacks(req, res) {
  let getAllSnacks = books.read();
  res.status(200).json(getAllBooks);
}

function getOneSnack(req, res) {
  const id = parseInt(req.params.id);
  let theSnack = books.read(id);
  res.status(200).json(theSnack);
}

function createSnack(req, res) {
  let content = req.body;
  let createdSnack = books.create(content);
  res.status(201).json(createdSnack);
}

function updateSnack(req, res) {
  // placeholder for now
  let update = req.body;
  let id = parseInt(req.params.id);
  let updatedSnack = books.update(id, update)
  res.status(202).send(updatedSnack)
}

function deleteSnack(req, res) {
  // placeholder for now
  let id = parseInt(req.params.id);
  let deletedSnack = books.delete(id);
  res.status(202).send(deletedSnack)
}

module.exports = snackRouter;