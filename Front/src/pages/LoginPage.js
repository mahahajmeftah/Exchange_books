import React, { useEffect, useState } from 'react';
import '../styles/LoginPage.css'; 
import Footer from '../components/Footer';
import Header from '../components/Header';

import { useNavigate } from "react-router-dom";


const LoginPage = (props) => {
	
	const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")
	
	const onButtonClick = () => {
		setEmailError("")
        setPasswordError("")
		
		// checking if email is empty
		if (email === "") {
            setEmailError("Please enter your email")
            return
        }
		
		// checking the email syntax with RegEx
		if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
			setEmailError("Please enter a valid email")
			return
		}
		
		// checking if password is empty
		if (password === "") {
			setPasswordError("Please enter a password")
			return
		}
		
		// Check if account exists (using the email)
		checkValidAccount(validAccount => {
            if (validAccount)
                login()   
        })    
    }
	
	// check if account exists
	const checkValidAccount = (callback) => { 
        // TODO: Account Check API URL
		fetch("ACCOUNT_CHECK_URL", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({email})
        })
        .then(r => r.json())
        .then(r => {
            callback(r?.userExists) // checking if account exists or not, render true or false from API
        })
    }

    // Log in a user using email and password
    const login = () => {
		// TODO: Authentication URL
        fetch("AUTHENTICATION_URL", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({email, password})
        })
        .then(r => r.json())
        .then(r => {
            if ('success' === r.message) {
                localStorage.setItem("user", JSON.stringify({email})) // save email in localstorage or cookie
				//props for the app and NavBar
                props.setLoggedIn(true) 
                props.setEmail(email)
                navigate("/profile") //change the navigation to either profile page or home page
            } else {
                window.alert("Wrong email or password")
            }
        })
    }
	
	const navigate = useNavigate();
	
	return (
	<div>
		<Header />
		<div className="mainDiv">
			
			<main>
				<div className={"titleDiv"}>
					Login
				</div>
				<br />
				<div className={"inputDiv"}>
				<input
					value={email}
					placeholder="Enter your email here"
					onChange={ev => setEmail(ev.target.value)}
					className={"inputBox"} />
				<label className="errorLabel">{emailError}</label>
				<br />
				<div className={"inputDiv"}>
					<input
						value={password}
						type="password"
						placeholder="Enter your password here"
						onChange={ev => setPassword(ev.target.value)}
						className={"inputBox"} />
					<label className="errorLabel">{passwordError}</label>
				</div>
				<br />
				<div className={"inputDiv"}>
					<input
						className={"inputButton"}
						type="button"
						onClick={onButtonClick}
						value={"Login"} />
				</div>

			</div>
			</main>
			<Footer />
		</div>
	</div>
	);
};

export default LoginPage;
