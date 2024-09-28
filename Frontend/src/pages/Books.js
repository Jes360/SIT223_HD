import React, { useEffect, useState } from 'react';
import { fetchBooks } from '../api/api';
import AddBookForm from '../components/AddBookForm';
import '../styles/BooksPage.css';

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchAllBooks();
  }, []);

  const fetchAllBooks = async () => {
    const allBooks = await fetchBooks();
    setBooks(allBooks);
  };

  return (
    <div className="BooksPage">
      <h1>Books Page</h1>
      <AddBookForm onBookAdded={fetchAllBooks} /> {/* Make sure this prop is passed */}
      <div className="BookList">
        {books.map(book => (
          <div key={book._id} className="BookItem">
            <h3>{book.title}</h3>
            <p>{book.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Books;
