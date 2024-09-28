const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const Book = require('../models/Book'); // Ensure you have this if using Mongoose

// GET /api/books - Retrieve all books
router.get('/', async (req, res) => {
    try {
        const books = await Book.find(); // Fetch all books from the database
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ message: "Error fetching books from the database." });
    }
});

// POST /api/books - Create a new book
router.post('/', [
    body('title').isLength({ min: 3 }).trim().escape(), // Validate and sanitize title
    body('author').isLength({ min: 2 }).trim().escape() // Validate and sanitize author
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    // Destructure sanitized data from request body
    const { title, author } = req.body;
    try {
        const newBook = new Book({ title, author });
        await newBook.save(); // Save new book to database
        res.status(201).json(newBook);
    } catch (error) {
        res.status(500).json({ message: "Error adding book to the database." });
    }
});

module.exports = router;
