import React from 'react';
import { useNavigate, Link } from "react-router-dom";
import '../styles/Header.css'
import Profil from '../pages/Profil';
import auth from '../datas/auth/auth-helper'


const NavBar = (props) => {
	var name = undefined;
	const navigate=useNavigate();

	const jwt = JSON.parse(sessionStorage.getItem("jwt"));
	if(jwt != undefined){
		name = jwt.user.name;
	}

	return (
	<nav className="navigation">
		<ul>
			<li><Link to="/">HOME</Link></li>
            <li><Link to="/about">ABOUT US</Link></li>
			<li><Link to="/inventory">INVENTORY</Link></li>
			<li><Link to="/profil">Mon Profil</Link></li>
			<li><Link to="/mybooks/:userId">MyBooks</Link></li>
			<div className="auth-links">
			{(name != undefined ? 
			<>
				<li><Link to="/profil">Mon Profil</Link></li>
				<li><Link to="/" className="button-link">Welcome {name} To BookBuddy</Link></li>
				<li><button onClick={() => { auth.clearJWT(() => navigate('/')) }}>Sign Out</button></li>
			</>	
				:
				<>
				<li><Link to="/login"className="button-link">SIGN IN </Link></li>
				</>	
			)}
			</div>
		</ul>
		
		
	</nav>
	);
}


export default NavBar;