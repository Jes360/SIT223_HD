import axios from 'axios';

const baseURL = 'http://localhost:3001/api'; // Adjust if your backend URL/port differs

export const fetchBooks = async () => {
  try {
    const response = await axios.get(`${baseURL}/books`);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch books:", error);
    return [];
  }
};

// Add this function
export const addBook = async (book) => {
  try {
    const response = await axios.post(`${baseURL}/books`, book);
    return response.data; // Returns the added book data
  } catch (error) {
    console.error('Failed to add book:', error);
    return null; // Return null or handle the error as needed
  }
};
