import {useEffect, useState} from 'react';
import {Navigate} from 'react-router-dom'
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../styles/LoginPage.css';
import { useNavigate } from "react-router-dom";
import auth from '../datas/auth/auth-helper.js'
import {login} from '../datas/auth/auth-api.js'
 function Login(props){
  
  const navigate = useNavigate();

  useEffect(() =>{
    const jwt = JSON.parse(sessionStorage.getItem("jwt"));
    if(jwt != undefined){
      navigate("/");
    }
  }, []);
  
  const [values, setValues] = useState({
    email: '',
    password: '',
    error: '',
    redirectToReferrer: false
  });

  const { email, password } = values;

  const clickSubmit = () => {
    const user = {
      email: values.email || undefined,
      password: values.password || undefined
    };

    login(user).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        sessionStorage.setItem('userId', data.user._id);
        auth.authenticate(data, () => {
          setValues({ ...values, error: '', redirectToReferrer: true });
        });
      }
    });
  };

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };
  const {from} = {
    from: {
      pathname: '/'
    }
}

const {redirectToReferrer} = values
if (redirectToReferrer) {
    return (<Navigate to={from}/>)
}
 
  return (
    <>
      <Header />{/* This will be full width at the top */}
      <div className='loginBackground'>
        <div className="loginPageContainer">
          <div className="loginContainer">
            <h1 className="loginTitle">Bienvenue sur BookBuddy</h1>

            <div className="inputGroup">
              <input
              type="email"
              value={values.email}
              onChange={handleChange('email')}
              placeholder="Adresse Email"
              className="loginInput"
              />
            </div>
            <div className="inputGroup">
              <input
              type="password"
              value={values.password}
              onChange={handleChange('password')}
              placeholder="Mot de passe"
              className="loginInput"
              />  
            </div>
            <button className="signInButton" onClick={clickSubmit}>SE CONNECTER</button>
            <a href="#" className="forgotPassword">Mot de passe oublié?</a>
            <p className="signupPrompt">
              Nouveau sur BookBuddy? <a href="/signup" className="signupLink">S'inscrire</a> 
            </p>
            {/* This will be full width at the bottom */}
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};
export default Login;
