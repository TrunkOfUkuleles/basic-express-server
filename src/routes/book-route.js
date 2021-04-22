'use strict';

const express = require('express');

const BookModel = require('../models/BookModel.js');
const books = new BookModel();

const bookRouter = express.Router();

// RESTful routes

// http://localhost:3333/things
router.get('/books', getBooks);
router.get('/books/:id', getOneBook);
router.post('/books', createBook)
router.put('/books/:id', updateBook);
router.delete('/books/:id', deleteBook);

// RESTful route handlers

function getBooks(req, res) {
  let getAllBooks = books.read();
  res.status(200).json(getAllBooks);
}

function getOneBook(req, res) {
  const id = parseInt(req.params.id);
  let theBook = books.read(id);
  res.status(200).json(theBook);
}

function createBook(req, res) {
  let content = req.body;
  let createdBook = books.create(content);
  res.status(201).json(createdBook);
}

function updateBook(req, res) {
  // placeholder for now
  let update = req.body;
  let id = parseInt(req.params.id);
  let updatedBook = books.update(id, update)
  res.status(202).send(updatedBook)
}

function deleteBook(req, res) {
  // placeholder for now
  let id = parseInt(req.params.id);
  let deletedBook = books.delete(id);
  res.status(202).send(deletedBook)
}

module.exports = bookRouter;