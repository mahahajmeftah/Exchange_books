// controllers/book.controllers.js

import Book from '../models/book.model.js';
import errorHandler from '../dbErrorHandler.js';
import mongoose from 'mongoose';

// Controller function to list books with optional filtering
const listBooks = async (req, res) => {
    try {
        // Create an empty query object
        let query = {};

        // If a genre query parameter is provided and it is not 'all', filter by genre
        if (req.query.genre && req.query.genre !== 'all') {
            query.genre = req.query.genre;
        }

        // If a title query parameter is provided, filter by title using a case-insensitive regex match
        if (req.query.title) {
            query.title = { $regex: req.query.title, $options: 'i' };
        }

        // Use the query object to filter books in the database
        let books = await Book.find(query).select('title author genre image');

        res.json(books);
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        });
    }
};


const getBookImage = async (req, res) => {
    try {
        const book = await Book.findById(req.params.bookId);
        if (!book || !book.image || !book.image.data) {
            return res.status(404).send('No image found');
        }
        res.set('Content-Type', book.image.contentType);
        res.send(book.image.data);
    } catch (err) {
        res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        });
    }
};
// Controller function to get a single book by ID with owner details
const getBookById = async (req, res) => {
    try {
      const book = await Book.findById(req.params.bookId)
        .populate('owner')
        .exec();
  
      if (!book) {
        return res.status(404).json({ message: "Book not found" });
      }
      res.json(book);
  
    } catch (err) {
      res.status(500).json({
        error: errorHandler.getErrorMessage(err)
      });
    }
  };
  

export default {
    listBooks,
    getBookImage,
    getBookById // Export the new controller function
};