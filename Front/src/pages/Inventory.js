import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Inventory.css';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Book from '../components/Book';
import SearchBar from '../components/SearchBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';


const Inventory = () => {
    const [books, setBooks] = useState([]);
    const [genre, setGenre] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');
    const genres = [
        'all',
        'Literary Fiction',
        'Mystery',
        'Thriller',
        'Science Fiction',
        'Fantasy',
        'Romance',
        'Historical Fiction',
        'Horror',
        'Young Adult (YA)',
        'Children\'s',
        'Biographies & Autobiographies',
        'Memoirs',
        'History',
        'Science',
        'Self-Help',
        'Travel',
        'True Crime',
        'Essays',
        'Cookbooks',
        'Health & Fitness'
    ];

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                let params = {};
                if (genre !== 'all') {
                    params.genre = genre;
                }
                if (searchTerm) {
                    params.title = searchTerm;
                }
                
                const response = await axios.get(`http://localhost:5555/api/books`, { params });
                setBooks(response.data); // Assuming response.data is an array of book objects
            } catch (error) {
                console.error('Error fetching books:', error);
            }
        };

        fetchBooks();
    }, [genre, searchTerm]);

    const handleGenreChange = (event) => {
        setGenre(event.target.value);
    };

    const handleSearch = (term) => {
        setSearchTerm(term);
    };

    return (
        <div className="inventory">
            <Header />
            <div className="controls">
                <div className="search-container">
                    <SearchBar onSearch={handleSearch} />
                </div>
                <div className="genre-selector">
                    <select onChange={handleGenreChange} value={genre} className="genre-select">
                        {genres.map((genreOption) => (
                            <option key={genreOption} value={genreOption}>
                                {genreOption}
                            </option>
                        ))}
                    </select>
                    <FontAwesomeIcon icon={faChevronDown} className="icon" />
                </div>
            </div>
            <div className="books-container">
                {books.map((book) => (
                    <Book key={book._id} book={book} /> // Pass each book to the Book component
                ))}
            </div>
            <Footer />
        </div>
    );
};

export default Inventory;
