
import React from 'react';
import '../styles/MyBookcomponent.css'; // Ensure this is the correct path to your CSS file
import Header from './Header';

const Book_myBooks = ({ book}) => {

  console.log("book", book);
    
    const base64String= String.fromCharCode(...new Uint8Array(book.image.data.data));
    const contentType = book.image.contentType;
    
    return (
        
        <div className="mybook">
        <img src={`data:${contentType};base64,${base64String}`} alt={book.title} className="book-image"/>
        <div className="mybook-info">
          <h3 className="mybook-title">{book.title}</h3>
          <p className=" author ">{book.author}</p>
          <p className=" genre ">{book.genre}</p>
        </div>
      </div>
      
    );
  };
  

  export default Book_myBooks;

