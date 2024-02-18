import Footer from '../../components/Footer';
import Header from '../../components/Header';
import '../../styles/UsersPage.css';
import '../../styles/Dialog.css';

import {create} from '../../datas/user/user-api.js';
import { useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom";

function Signup() {

  const [emailError, setEmailError] = useState("")
	const [phoneError, setPhoneError] = useState("")
  const [passwordError, setPasswordError] = useState("")
	const [nameError, setNameError] = useState("")
  const frenchPhoneNumberRegex = /^(?:(?:(?:\+|00)33[\s\.-]?)?(?:\d{1,2}[\s\.-]?)?(?:\(0\)[\s\.-]?)?)?(?:(?:(?:\d{2}[\s\.-]?)?\d{2}[\s\.-]?)?\d{2}[\s\.-]?\d{2}[\s\.-]?\d{2})$/;
	
  
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

    const validateForm = () => {
      const errors = [];
    
      if (values.email === "") {
        errors.push("Veuillez entrer une adresse email");
        setEmailError("Veuillez entrer une adresse email")
      }
    
      if (values.name === "") {
        errors.push("Veuillez entrez votre prénom");
        setNameError("Veuillez entrez votre prénom")
      }
    
      if (values.phone === "") {
        errors.push("Veuillez entrez votre numéro de téléphone");
        setPhoneError("Veuillez entrez votre numéro de téléphone");
      }
    
      if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(values.email)) {
        errors.push("Veuillez entrer une adresse email valide");
        setEmailError("Veuillez entrer une adresse email valide");
      }
    
      if (!frenchPhoneNumberRegex.test(values.phone)) {
        errors.push("Veuillez entrer un numéro de téléphone valide contenant 10 chiffres");
        setPhoneError("Veuillez entrer un numéro de téléphone valide contenant 10 chiffres")
      
      }
    
      // Checking if password is empty
      if (values.password === "") {
        errors.push("Veuillez entrer un mot de passe");
        setPasswordError("Veuillez entrer un mot de passe");
      }
    
      // Mettre à jour l'état des erreurs
      //setAllErrors(errors);
    
      // Si la longueur du tableau d'erreurs est supérieure à zéro, cela signifie qu'il y a des erreurs
      return errors.length === 0;
    };
  
    const clickSubmit = () => {
      
      // Utilisez cette fonction pour valider le formulaire
      const isFormValid = validateForm();
      
      // Si le formulaire est valide, envoyez les données vers le back-end
      if (!isFormValid) {
        // Si le formulaire n'est pas valide, ne pas continuer
        console.log("Le formulaire n'est pas valide, ne pas envoyer les données vers le back-end.");
        return;
      }


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
          <h1 className="loginTitle">S'inscrire</h1>
          <div className="inputGroup">
          <input type="name" value={values.name} onChange={handleChange('name')} placeholder="Prénom" className="loginInput"/>
          <label className="errorLabel">{nameError}</label>
          </div>
          <div className="inputGroup">
          <input type="email" value={values.email} onChange={handleChange('email')} placeholder="Email" className="loginInput"/>
          <label className="errorLabel">{emailError}</label>
          </div>
          <div className="inputGroup">
          <input type="phone" value={values.phone} onChange={handleChange('phone')} placeholder="Téléphone" className="loginInput"/>
          <label className="errorLabel">{phoneError}</label>
          </div>
          <div className="inputGroup">
          <input type="password" value={values.password} onChange={handleChange('password')} placeholder="Mot de passe" className="loginInput"/>
          <label className="errorLabel">{passwordError}</label>
          </div>
          <button className="signInButton" onClick={clickSubmit}>S'inscrire</button>
                            <p className="signupPrompt">
                                Vous avez déjà un compte? <a href="/login" className="signupLink">Se connecter</a>
                            </p>
          {/* This will be full width at the bottom */}
          </div>
          <dialog open={values.open} >
            <h2 style={{fontSize:'22px'}}>Nouveau compte</h2>
            <p style={{color:'#ccc',fontSize:'16px'}}>Vous êtes inscrit!</p>
            <menu>
            
                <a href="/login" className='dialogButton '>Se connecter</a>
            
            </menu>
          </dialog>
          </div>
          </div>
          <Footer/>
        </>
    );
  }
  export default Signup;