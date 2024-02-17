/*import Banner from './components/Banner'
import Cart from './components/Cart'
import ShoppingList from './components/ShoppingList'

function App() {
	return (
		<div>
			<Banner />
			<Cart />
			<ShoppingList />
		</div>
	)
}

export default App*/
// App.js
import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import AboutUsPage from './pages/AboutUsPage'; // Ensure this path matches the location of your AboutUsPage component
import LoginPage from './pages/LoginPage';
//import MyBooks from './pages/Book/MyBooksPage'
import Users from './pages/user/Users';
import Signup from './pages/user/Signup';
import Inventory from './pages/Inventory';
import BorrowPage from './pages/BorrowPage'; // Path to your new BorrowPage component

function App() {
  console.log("app");
  const [loggedIn, setLoggedIn] = useState(false); // Assuming default state is not logged in
  const [email, setEmail] = useState(""); // Initially, no email
  return (
    <Router>
      <Routes>
		<Route path="/" element={<WelcomePage email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
        <Route path="/about" element={<AboutUsPage />} />
		<Route path="/login" element={<LoginPage setLoggedIn={setLoggedIn} setEmail={setEmail}/>} />
    
    {/*<Route path="/books" element={<MyBooks/>}/> */}
    <Route path="/users" element={<Users/>}/>
    <Route path="/Signup" element={<Signup/>}/>
    <Route path="/inventory" element={<Inventory/>}/>
    <Route path="/borrow/:bookId" element={<BorrowPage />} />


        {/* Add other routes as necessary */}
      </Routes>
    </Router>
  );
}

export default App;