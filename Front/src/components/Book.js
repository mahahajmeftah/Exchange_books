
import React from 'react';
import '../styles/Inventory.css'; // Ensure this is the correct path to your CSS file

const Book = ({ book, onBorrow }) => {

    
    const base64String= String.fromCharCode(...new Uint8Array(book.image.data.data));
    const contentType = book.image.contentType;
    
    return (
      <div className="book">
        <img src={`data:${contentType};base64,${base64String}`} alt={book.title} className="book-image"/>
        <div className="book-info">
          <h3 className="book-title">{book.title}</h3>
          <p className="book-category">{book.genre}</p>
          <button className="borrow-button">Borrow</button>
        </div>
      </div>
    );
  };
  

  export default Book;

