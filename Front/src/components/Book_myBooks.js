
import React from 'react';
import '../styles/MyBookcomponent.css'; // Ensure this is the correct path to your CSS file
import Header from './Header';
import axios from 'axios';

const Book_myBooks = ({ book}) => {

  

  const handleDelete = () => {
    // Navigate to the borrow page
    axios.delete(`http://localhost:5555/books/${book._id}`)
            .then(() => {
                window.alert('Updated');
            })
            .catch(error => console.err(error));
    };


    
    const base64String= String.fromCharCode(...new Uint8Array(book.image.data.data));
    const contentType = book.image.contentType;
    
    return (
        
        <div className="mybook">
        <img src={`data:${contentType};base64,${base64String}`} alt={book.title} className="book-image"/>
        <div className="mybook-info">
          <h3 className="mybook-title">{book.title}</h3>
          <p className="author">{book.author}</p>
          <p className="genre">{book.genre}</p>
          <button className="delete-button" onClick={handleDelete}>Supprimer</button>
        </div>
      </div>
      
    );
  };
  

  export default Book_myBooks;

