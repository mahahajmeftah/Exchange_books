import Footer from '../../components/Footer';
import Header from '../../components/Header';
import '../../styles/UsersPage.css';
import '../../styles/Dialog.css';

import {create} from '../../datas/user/user-api.js';
import { useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom";

function Signup() {
  
  const navigate = useNavigate();
  useEffect(() =>{
    const jwt = JSON.parse(sessionStorage.getItem("jwt"));
    if(jwt != undefined){
      navigate("/");
    }
  }, []); 

  const [values, setValues] = useState({
      name: '',
      password: '',
      email: '',
      phone:'',
      open: false,
      error: ''
    })
  
    const handleChange = name => event => {
      setValues({ ...values, [name]: event.target.value })
    }
  
    const clickSubmit = () => {
      const user = {
        name: values.name || undefined,
        email: values.email || undefined,
        phone:values.phone || undefined,
        password: values.password || undefined
      }
      create(user).then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error})
        } else {
          setValues({ ...values, error: '', open: true})
        }
      })
    }
    return (
        <>
          <Header />{/* This will be full width at the top */}
          <div className='loginBackground'>
          <div className="loginPageContainer">
            <div className="loginContainer">
          <h1 className="loginTitle">Sign Up</h1>
          <div className="inputGroup">
          <input type="name" value={values.name} onChange={handleChange('name')} placeholder="Name" className="loginInput"/>
          </div>
          <div className="inputGroup">
          <input type="email" value={values.email} onChange={handleChange('email')} placeholder="Email" className="loginInput"/>
          </div>
          <div className="inputGroup">
          <input type="phone" value={values.phone} onChange={handleChange('phone')} placeholder="Phone" className="loginInput"/>
          </div>
          <div className="inputGroup">
          <input type="password" value={values.password} onChange={handleChange('password')} placeholder="Password" className="loginInput"/>
          </div>
          <button className="signInButton" onClick={clickSubmit}>Signup</button>
          <a href="#" className="forgotPassword">have account allready ?</a>
                            <p className="signupPrompt">
                                New to BookBuddy? <a href="/login" className="signupLink">Login</a>
                            </p>
          {/* This will be full width at the bottom */}
          </div>
          <dialog open={values.open} >
            <h2 style={{fontSize:'22px'}}>New account</h2>
            <p style={{color:'#ccc',fontSize:'16px'}}>New account successfully created!</p>
            <menu>
            
                <a href="/login" className='dialogButton '>Login</a>
            
            </menu>
          </dialog>
          </div>
          </div>
          <Footer/>
        </>
    );
  }
  export default Signup;