import { useState,useEffect } from "react"
import listByOwner from "../datas/BookAPI"
import auth from "../datas/auth/auth-helper"
import { Navigate } from "react-router-dom"
import Book_myBooks from "../components/Book_myBooks"
import Header from "../components/Header"
import Footer from "../components/Footer"
import '../styles/MyBooksPage.css'

function Mybooks(){
    const [books, setbooks] = useState([])

    const [redirectToSignin, setRedirectToSignin] = useState(false)
    const jwt = auth.isAuthenticated()
  
    useEffect(() => {
      const abortController = new AbortController()
      const signal = abortController.signal
      listByOwner({
        userId: jwt.user._id
      }, signal).then((data) => {
        if (data.error) {
          setRedirectToSignin(true)
        } else {
          setbooks(data)
        }
      })
      return function cleanup(){
        abortController.abort()
      }
    }, [])
  
    const [currentPage, setCurrentPage] = useState(1);
    const [booksPerPage] = useState(10);
    const indexOfLastBook = currentPage * booksPerPage;
    const indexOfFirstBook = indexOfLastBook - booksPerPage;
    const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
  
      if (redirectToSignin) {
        return <Navigate to='/addbook'/>
      }
      return (
        <>
        <Header/>
        <div className="page">
          <h1 className="mybookHeader" >MES LIVRES:</h1>
          <div className="Bookcontainer">
          <div className="books-container">
                  {currentBooks.map((book) => (
                      <Book_myBooks key={book._id} book={book} />
                  ))}
          </div>
          </div>
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
        <Footer/>
      </>)
  }
  export default Mybooks;