// App.js
import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import AboutUsPage from './pages/AboutUsPage'; // Ensure this path matches the location of your AboutUsPage component
import LoginPage from './pages/LoginPage';
import Users from './pages/user/Users';
import Signup from './pages/user/Signup';
import Profil from './pages/Profil';

function App() {
  const [loggedIn, setLoggedIn] = useState(false); // Assuming default state is not logged in
  const [email, setEmail] = useState(""); // Initially, no email
  return (
    <Router>
      <Routes>
		<Route path="/" element={<WelcomePage email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
        <Route path="/about" element={<AboutUsPage />} />
		<Route path="/login" element={<LoginPage setLoggedIn={setLoggedIn} setEmail={setEmail}/>} />
    <Route path="/users" element={<Users/>}/>
    <Route path="/Signup" element={<Signup/>}/>
    <Route path="/profil" element={<Profil/>}/>
  

        {/* Add other routes as necessary */}
      </Routes>
    </Router>
  );
}

export default App;