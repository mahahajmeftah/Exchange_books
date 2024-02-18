
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../styles/Inventory.css'; // Ensure this is the correct path to your CSS file

const Book = ({ book }) => {
    const navigate = useNavigate(); // Use the useNavigate hook

    const base64String = String.fromCharCode(...new Uint8Array(book.image.data.data));
    const contentType = book.image.contentType;
    
    // Function to handle borrow button click
    const handleBorrow = () => {
        // Navigate to the borrow page
        navigate(`/borrow/${book._id}`, { state: { book: book } });

    };
    
    return (
      <div className="book">
        <img src={`data:${contentType};base64,${base64String}`} alt={book.title} className="book-image"/>
        <div className="book-info">
          <h3 className="book-title">{book.title}</h3>
          <p className="book-category">{book.genre}</p>
          <button className="borrow-button" onClick={handleBorrow}>Borrow</button>
        </div>
      </div>
    );
};

export default Book;
