import React, { useState } from 'react';
import { addBook } from '../api/api';

const AddBookForm = ({ onBookAdded }) => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');

    // Simple Regex pattern examples for validation
    const titlePattern = /^[a-zA-Z0-9 ]{3,100}$/; // Titles with 3 to 100 alphanumeric characters and spaces
    const authorPattern = /^[a-zA-Z ]{2,100}$/; // Author names with 2 to 100 alphabetic characters and spaces

    const validateForm = () => {
        if (!titlePattern.test(title)) {
            setError('Title must be between 3 and 100 characters and alphanumeric.');
            return false;
        }
        if (!authorPattern.test(author)) {
            setError('Author name must be between 2 and 100 alphabetic characters.');
            return false;
        }
        setError(''); // Clear any previous errors
        return true;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setMessage(''); // Clear previous messages
        if (!validateForm()) {
            return; // Stop the form submission if validation fails
        }

        const book = { title, author };
        const added = await addBook(book);
        if (added) {
            setMessage('Book added successfully!');
            setTitle('');
            setAuthor('');
            onBookAdded(); // Refresh the book list
        } else {
            setMessage('Failed to add the book.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add a New Book</h2>
            <label>
                Book Title:
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </label>
            <br />
            <label>
                Author:
                <input
                    type="text"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    required
                />
            </label>
            <br />
            <button type="submit">Add Book</button>
            {error && <div style={{ color: 'red' }}>{error}</div>}
            {message && <div style={{ color: message.includes('Failed') ? 'red' : 'green' }}>{message}</div>}
        </form>
    );
};

export default AddBookForm;
