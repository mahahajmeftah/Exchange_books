// components/Book.js

import React from 'react';
import '../styles/Inventory.css'; // Ensure this is the correct path to your CSS file

const Book = ({ book, onBorrow }) => {
    const imageUrl = `http://localhost:5555/api/books/${book._id}/image`;
    const base64String=btoa(String.fromCharCode(... new Uint8Array(imageUrl)));

    return (
      <div className="book">
        <img src={'data/image/png;base64,${base64String}'} alt={book.title} className="book-image"/>
        <div className="book-info">
          <h3 className="book-title">{book.title}</h3>
          <p className="book-category">{book.genre}</p>
          <button className="borrow-button">Borrow</button>
        </div>
      </div>
    );
  };
  
  export default Book;
