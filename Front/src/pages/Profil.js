// Header.js
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../styles/Profil.css'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Book from '../components/Book';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Header from '../components/Header';
import AjoutLivreForm from '../components/AddBookForm';
import plus from '../assets/plus.png';

import { Link } from 'react-router-dom'; // Import Link

const Profil = ({ utilisateur, livres }) => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        const fetchBooks = async () => {
            try {
                let params={};
                const response = await axios.get(`http://localhost:5555/api/books`, { params });
                setBooks(response.data);
            } catch (error) {
                console.error('Error fetching books:', error);
            }
        };

    fetchBooks();
}, []);


    return (
        
            <div className='profil-page'>
                <Header />
                <div className='user-container'>
                    <div className='userInfo-container'>
                        <h2>Profil</h2>
                        <p>username</p>
                    </div>
                    <div className='addBook'>
                        <h2>Ajouter un livre</h2>
                        <Link to ="/addBook">
                        {/*<a href="https://www.flaticon.com/fr/icones-gratuites/plus" title="plus icônes">Plus icônes créées par kliwir art - Flaticon</a>*/}
                        <img src={plus} alt="image plus pour ajouter" style={{ width: '150px', height: '150px' }}/>
                        </Link>
                    </div>
                </div>
                
              {/*
              <div className="books-container">
              <h2>Votre liste de livres :</h2>
                {books.map((book) => (
                    // Make sure `book` contains an `_id` and image data
                    <Book key={book._id} book={book} />
                ))}
                </div>
                <h2>Ajouter un livre</h2>
                <AjoutLivreForm />*/}
            </div>
    );
};

export default Profil;