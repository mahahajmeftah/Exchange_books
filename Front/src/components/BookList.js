import React, { useEffect, useState } from 'react'
import '../styles/BookDisplay.css'; 

import BookDisplay from '../components/BookDisplay';

const BookList = (props) => {	
	
	// Book Example for display, more fields needed
	/*
	*	TODO: get props from Library page/Genre component, or User profile page  
	*		  fetch books from API with either Genre(Library page) or User (Profile page) search,
	*/
	const [book, setBook] = useState({title: "Book Title", image: "https://fastly.picsum.photos/id/757/200/300.jpg?hmac=su32mJgKVc94YgSiaPE3SzaIM11AtqJgoGffpSTQUOE"});
	
	return (
		<div className='book-container'>
			<BookDisplay {...book} />
			<BookDisplay {...book} />
			<BookDisplay {...book} />
			<BookDisplay {...book} />
			<BookDisplay {...book} />
			<BookDisplay {...book} />
			<BookDisplay {...book} />
			<BookDisplay {...book} />
		</div>)
};

export default BookList; 