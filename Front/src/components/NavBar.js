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
			<li><Link to="/">ACCUEIL</Link></li>
            <li><Link to="/about">A PROPOS</Link></li>
			<li><Link to="/inventory">BIBLIOTHEQUE</Link></li>
			<div className="auth-links">
			{(name != undefined ? 
			<>
				{/* <li><Link to="/profil">PROFIL</Link></li> */}
				<li><Link to="/mybooks/:userId">MES LIVRES</Link></li>
				<li><Link to="/profil" className="button-link">Bienvenue {name}</Link></li>
				<li><button onClick={() => { auth.clearJWT(() => navigate('/')) }}>Se déconnecter</button></li>
			</>	
				:
				<>
				<li><Link to="/login"className="button-link">SE CONNECTER</Link></li>
				</>	
			)}
			</div>
		</ul>
		
		
	</nav>
	);
}


export default NavBar;