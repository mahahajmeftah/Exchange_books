import React from 'react';
import { useNavigate } from "react-router-dom";

const NavBar = (props) => {
	const { loggedIn, email } = props
	
	const navigate = useNavigate();
	
	const onButtonClick = () => {
		
    }
	
	return (
	<nav>
		<ul>
			{(loggedIn ? <li><a className="button" href="/profile">Welcome {email}</a></li>
				: 	<div>
						<li><a className="button" href="/login">Login</a></li>
						<li>Register</li>
					</div>
			)}
			<li>Forum</li>
			<li>Library</li>
		</ul>
	</nav>
	);
}


export default NavBar;