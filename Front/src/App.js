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
import MyBooks from './pages/Book/MyBooksPage'

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
    
    <Route path="/books" element={<MyBooks/>}/>
        {/* Add other routes as necessary */}
      </Routes>
    </Router>
  );
}

export default App;