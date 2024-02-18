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
const listByOwner = async (params, signal) => {
	try {
	let response = await fetch('http://localhost:5555/api/books/by/'+params.userId, {
	method: 'GET',
	signal: signal,
	headers: {
	'Accept': 'application/json',
	}
	})
	return response.json()

	} catch(err){
	console.log(err)
	}
   }
   

 export default listByOwner;