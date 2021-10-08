// import { Link } from 'react-router-dom';
import './Layout.css'
import Nav from '../nav/Nav';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';


import {
  // loginUser,
  // registerUser,
  verifyUser,
  // removeToken,
} from '../../services/auth';


function Layout(props) {
  // const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

 

  

  
  return (
    <div>
     
      <div className='header'>
      <header className='user-greeting'>
        {props.currentUser !== null ?
            <p className='message1'> welcome, {props.currentUser.username}!</p>  : <p> </p>}
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
          <Nav currentUser={props.currentUser} handleLogout={props.handleLogout}  />
        </footer>
      </div>
       
    </div>
  )
}

export default Layout