import { useState,useEffect } from "react"
import listByOwner from "../datas/BookAPI"
import auth from "../datas/auth/auth-helper"
import { Navigate } from "react-router-dom"
import Book_myBooks from "../components/Book_myBooks"
import Header from "../components/Header"
import Footer from "../components/Footer"

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
  
    
  
      if (redirectToSignin) {
        return <Navigate to='/signin'/>
      }
      return (
        <>
        <Header/>
        <h2 className="mybookHeader" >Your books:</h2>
        <div className="Bookcontainer">
        <div className="books-container">
                {books.map((book) => (
                    <Book_myBooks key={book._id} book={book} />
                ))}
        </div>
        </div>
        <Footer/>
      </>)
  }
  export default Mybooks;