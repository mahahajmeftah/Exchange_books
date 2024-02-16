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
    const [currentPage, setCurrentPage] = useState(1);
    const [booksPerPage] = useState(10);
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
                setBooks(response.data);
            } catch (error) {
                console.error('Error fetching books:', error);
            }
        };

        fetchBooks();
    }, [genre, searchTerm, currentPage]); // Add currentPage to useEffect dependencies if fetching books per page from server

    const handleGenreChange = (event) => {
        setGenre(event.target.value);
        setCurrentPage(1); // Reset to page 1 on genre change
    };

    const handleSearch = (term) => {
        setSearchTerm(term);
        setCurrentPage(1); // Reset to page 1 on search
    };

    // Pagination logic
    const indexOfLastBook = currentPage * booksPerPage;
    const indexOfFirstBook = indexOfLastBook - booksPerPage;
    const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
                {currentBooks.map((book) => (
                    <Book key={book._id} book={book} />
                ))}
            </div>
            <nav>
    <ul className="pagination">
        {Array.from({ length: Math.ceil(books.length / booksPerPage) }, (_, i) => i + 1).map(number => (
            <li key={number} className="page-item">
                <a 
                    onClick={(e) => {
                        e.preventDefault(); // Prevent the link from causing a page reload
                        paginate(number);
                    }} 
                    href="#"
                    className={`page-link ${currentPage === number ? 'page-link-active' : ''}`} // Apply active class conditionally
                >
                    {number}
                </a>
            </li>
        ))}
    </ul>
</nav>


            <Footer />
        </div>
    );
};

export default Inventory;
