import React, { useState } from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation
import axios from 'axios';

const BorrowPage = () => {
    const { state } = useLocation();
    const { book } = state; // Access the book passed through navigate
    const [ownerDetails, setOwnerDetails] = useState(null);
    console.log(book);

    const fetchOwnerDetails = async (ownerId) => {
        try {
            const response = await axios.get(`http://localhost:5555/api/users/${ownerId}`);
            setOwnerDetails(response.data);
        } catch (error) {
            console.error('Error fetching owner details:', error);
        }
    };

    // Convert binary image data to base64 for display
    const base64String = book.image && book.image.data ? String.fromCharCode(...new Uint8Array(book.image.data.data)) : '';
    const contentType = book.image ? book.image.contentType : '';

    return (
        <div>
            <div className="book-details">
                <img src={`data:${contentType};base64,${base64String}`} alt={book.title} className="book-image"/>
                <h2>{book.title}</h2>
                <p>{book.description}</p>
                <p>ownerid: {book.owner}</p>
                <button onClick={() => fetchOwnerDetails(book.owner)}>Get Owner Contact</button>
            </div>
            {ownerDetails && (
                <div>
                    <h3>Owner Contact Details</h3>
                    <p>Email: {ownerDetails.email}</p>
                    <p>Phone: {ownerDetails.phone}</p>

                </div>
            )}
        </div>
    );
};

export default BorrowPage;
