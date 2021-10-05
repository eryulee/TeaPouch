import { Link } from 'react-router-dom';
import './Layout.css'
import Nav from '../nav/Nav';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';


import {
  loginUser,
  registerUser,
  verifyUser,
  removeToken,
} from '../../services/auth';


function Layout(props) {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
    };
    handleVerify();
  }, []);

  const handleLogin = async (loginData) => {
    const userData = await loginUser(loginData);
    setCurrentUser(userData);
    history.push('/');
  };

  const handleRegister = async (registerData) => {
    const userData = await registerUser(registerData);
    setCurrentUser(userData);
    history.push('/');
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('authToken');
    removeToken();
  };
  return (
    <div>
     
      <div className='header'>
      <header className='user-greeting'>
        {currentUser ?
            <p>`Hello, ${currentUser.username}!`</p>  : <p>not logged in </p>}
        </header>
      </div>
        
           

      {/* <div className='name_logo'>
        <img src='https://i.imgur.com/khYD43E.png'
          alt='pouch'
        id='pouch' />
      <h3>Tea Pouch</h3>
      </div> */}

      <div className='layout-children'>
        {props.children}
      </div>
      
      <div className='footer'>
        <footer className='footer-nav'>
          <Nav user={currentUser} handleLogout={handleLogout}  />
        </footer>
      </div>
       
    </div>
  )
}

export default Layout