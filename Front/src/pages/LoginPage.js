import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/LoginPage.css';
import Footer from '../components/Footer';
import Header from '../components/Header';

const LoginPage = (props) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const onButtonClick = () => {
        setEmailError('');
        setPasswordError('');

        if (email === '') {
            setEmailError('Please enter your email');
            return;
        }

        if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
            setEmailError('Please enter a valid email');
            return;
        }

        if (password === '') {
            setPasswordError('Please enter a password');
            return;
        }

        checkValidAccount(validAccount => {
            if (validAccount) {
                login();
            }
        });
    };

    const checkValidAccount = (callback) => {
        // Simulate API call
        setTimeout(() => {
            callback(true); // Assume account is valid for demonstration
        }, 1000);
    };

    const login = () => {
        // Simulate successful login
        setTimeout(() => {
            localStorage.setItem('user', JSON.stringify({ email }));
            props.setLoggedIn(true);
            props.setEmail(email);
            navigate('/profile'); // Navigate to profile page
        }, 1000);
    };
    // Handle the form submit
    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your login logic here
        navigate('/dashboard'); // Redirect to dashboard after login
    };

    return (
        <>
            <Header /> {/* This will be full width at the top */}
            <div className="loginPageContainer">
                <div className="loginContainer">
                    <h1 className="loginTitle">Welcome to BookBuddy</h1>
                    <form className="loginForm" onSubmit={handleSubmit}>
                        <div className="inputGroup">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Username or Email"
                                className="loginInput"
                            />
                        </div>
                        <div className="inputGroup">
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password"
                                className="loginInput"
                            />
                        </div>
                        <button type="submit" className="signInButton">Login</button>
                        <a href="#" className="forgotPassword">Forgot password?</a>
                        <p className="signupPrompt">
                            New to BookBuddy? <a href="#" className="signupLink">Create Account</a>
                        </p>
                    </form>
                </div>
            </div>
            <Footer /> {/* This will be full width at the bottom */}
        </>
    );
};

export default LoginPage;