import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../styles/BorrowPage.css'; 

const BorrowPage = () => {
    const { state } = useLocation();
    const { book } = state;
    const [ownerDetails, setOwnerDetails] = useState(null);
    const [showContactModal, setShowContactModal] = useState(false);

    const fetchOwnerDetails = async (ownerId) => {
        try {
            const response = await axios.get(`http://localhost:5555/api/users/${ownerId}`);
            setOwnerDetails(response.data);
            setShowContactModal(true); // Show the modal after fetching details
        } catch (error) {
            console.error('Error fetching owner details:', error);
        }
    };

   const closeContactModal = () => {
        setShowContactModal(false);
    };
    const base64String = book.image && book.image.data ? String.fromCharCode(...new Uint8Array(book.image.data.data)) : '';
    const contentType = book.image ? book.image.contentType : '';
    const handleCloseModalClick = (e) => {
        e.preventDefault(); // Prevent default link behavior
        setShowContactModal(false); // Set state to hide modal
    };
    

    return (
        <div>
            <Header />
            <div className="borrow-containerb">
                <div className="book-cover-containerb">
                <img src={`data:${contentType};base64,${base64String}`} alt={book.title} className="book-imageb"/>

                </div>
                <div className="book-info-containerb">
                <h1 className="book-titleb">{book.title}</h1>
                <p className="book-genreb"><strong>Genre:</strong> {book.genre}</p>
                <p className="book-formatb">{book.format}</p>
                <p className="book-authorb"><strong>L'auteur:</strong> {book.author}</p>
                    <div className="book-description-container">
                        <strong>Description:</strong>
                         <p className="book-description">{book.description}</p>
                         <button onClick={() => fetchOwnerDetails(book.owner)} className="contact-owner-button">Contacter le propriétaire</button>
                    </div>
                </div>
            </div>
            {showContactModal && ownerDetails && (
    <div className="contact-modalb" onClick={closeContactModal}> {/* This will close the modal if you click outside the content */}
        <div className="contact-modal-content" onClick={(e) => e.stopPropagation()}> {/* This prevents clicks inside the modal from closing it */}
            <span className="close-modal" onClick={closeContactModal}>&times;</span>
            <h3>Contact du propriétaire</h3>
            <p>Email: {ownerDetails.email}</p>
            <p>Téléphone: {ownerDetails.phone}</p>
            <a href="#" onClick={handleCloseModalClick} className="retour-link">Retour</a> {/* Your link to close the modal */}
        </div>
    </div>
)}
            <Footer />
        </div>
    );
};

export default BorrowPage;