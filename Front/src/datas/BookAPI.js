import React, { useEffect, useState } from 'react'
 
const BookList = () => {
	const url = 'https://api.airtable.com/v0/appybL1OJaEEIvAdS/Books?api_key=keymAugpaEvXsyGBr';	
	
	const [books, setBooks] = useState([]);
	
	const fetchInfo = async () => {
		const fetched = await fetch(url);
		const content = await fetched.json();
		await setBooks(content['records'])
	}
	
	useEffect(() => {
		fetchInfo();
	}, []);
	
	return (
		<div>
			<ul>
				{books.map((book) => <li> Title: <b>{book.fields.Title}</b>, Author: <b>{book.fields.Author}</b> </li>)}
			</ul>
		</div>)
};

// export default BookList;