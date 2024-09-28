import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Books from './pages/Books'; // Ensure this path is correct based on your project structure

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<h1>Home Page</h1>} exact />
          <Route path="/books" element={<Books />} /> // Updated this line
        </Routes>
      </div>
    </Router>
  );
}

export default App;
