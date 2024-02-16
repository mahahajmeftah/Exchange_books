import React, { useEffect, useState } from 'react';
import '../styles/LoginPage.css'; 
import Footer from '../components/Footer';
import Header from '../components/Header';

import { useNavigate } from "react-router-dom";


const LoginPage = (props) => {


	const [firstname, setFirstname] = useState("")
	const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
	const [phone, setPhone] = useState("")
    const [emailError, setEmailError] = useState("")
	const [phoneError, setPhoneError] = useState("")
    const [passwordError, setPasswordError] = useState("")
	const [firstnameError, setFirstnameError] = useState("")
	const frenchPhoneNumberRegex = /^(?:(?:(?:\+|00)33[\s\.-]?)?(?:\d{1,2}[\s\.-]?)?(?:\(0\)[\s\.-]?)?)?(?:(?:(?:\d{2}[\s\.-]?)?\d{2}[\s\.-]?)?\d{2}[\s\.-]?\d{2}[\s\.-]?\d{2})$/;
	
	const onButtonClick = () => {
		setEmailError("")
        setPasswordError("")
		setPhoneError("")
		
		// checking if email is empty
		if (email === "") {
            setEmailError("Veuillez entrer une adresse email")
            return
        }

		if (firstname === "") {
            setFirstnameError("Veuillez entrez votre prénom")
            return
        }

		if (phone === "") {
            setPhoneError("Veuillez entrez votre numéro de téléphone")
            return
        }
		
		// checking the email syntax with RegEx
		if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
			setEmailError("Please enter a valid email")
			return
		}

		if (!frenchPhoneNumberRegex.test(phone)) {
			setPhoneError("Veuillez entrer un numéro de téléphone valide")
			return
		}
		
		// checking if password is empty
		if (password === "") {
			setPasswordError("Please enter a password")
			return
		}
		
		// Check if account exists (using the email)
		signup()
    }
	

    // Log in a user using email and password
    const signup = () => {
		console.log("signup")
		// TODO: Authentication URL
        fetch("http://127.0.0.1:5555/signup", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({firstname, email, password, phone})
        })
        .then(r => r.json())
        .then(r => {
            if ('success' === r.message) {
				window.alert("sucess")
                /*localStorage.setItem("user", JSON.stringify({email})) // save email in localstorage or cookie
				//props for the app and NavBar
                props.setLoggedIn(true) 
                props.setEmail(email)
                navigate("/profile") //change the navigation to either profile page or home page*/
            } else {
                window.alert("error signup")
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
					S'inscrire
				</div>
				<br />
				<div className={"inputDiv"}>
				<input
					value={firstname}
					placeholder="Entrez votre nom ici"
					onChange={ev => setFirstname(ev.target.value)}
					className={"inputBox"} />
				<label className="errorLabel">{firstnameError}</label>
				<br />
				<input
					value={email}
					placeholder="Entrez votre adrese email"
					onChange={ev => setEmail(ev.target.value)}
					className={"inputBox"} />
				<label className="errorLabel">{emailError}</label>
				<br />
				<input
					value={phone}
					placeholder="Entrez votre numéro de téléphone"
					onChange={ev => setPhone(ev.target.value)}
					className={"inputBox"} />
				<label className="errorLabel">{phoneError}</label>
				<br />
				<div className={"inputDiv"}>
					<input
						value={password}
						type="password"
						placeholder="Entrez un mot de passe"
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
						value={"S'inscrire"} />
				</div>

			</div>
			</main>
			<Footer />
		</div>
	</div>
	);
};

export default LoginPage;
