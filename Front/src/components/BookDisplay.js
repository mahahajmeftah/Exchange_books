import React, { useEffect, useState } from 'react'

import '../styles/BookDisplay.css'; 

const BookDisplay = (props) => {
	const book = props;
	
	return (
		<a href="#">
			<div className="book">
				<img className="book-image" src={book.image} alt={book.title}/>
				<h3 className="book-title">{book.title}</h3>
			</div>
		</a>
	)	
};

export default BookDisplay;