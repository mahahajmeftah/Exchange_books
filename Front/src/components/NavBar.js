import React from 'react';
import { useNavigate, Link } from "react-router-dom";
import '../styles/Header.css'

const NavBar = (props) => {
	var name = undefined;

	const jwt = JSON.parse(sessionStorage.getItem("jwt"));
	if(jwt != undefined){
		name = jwt.user.name;
	}

	return (
	<nav className="navigation">
		<ul>
			<li><Link to="/">HOME</Link></li>
            <li><Link to="/about">ABOUT US</Link></li>
			
			<div className="auth-links">
			{(name != undefined ? 
			<>
				<li><Link to="/inventory">INVENTORY</Link></li>
				<li><Link to="/" className="button-link">Welcome {name} To BookBuddy</Link></li>
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