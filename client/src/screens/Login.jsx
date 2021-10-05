import { useState } from 'react';
import {Link} from 'react-router-dom';

export default function Login(props) {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
<>
    <div className='name_logo'>
        <img src='https://i.imgur.com/khYD43E.png'
          alt='pouch'
        id='pouch' />
      <h3>Tea Pouch</h3>
      </div>
    

    <form onSubmit={(e)=> {
      e.preventDefault();
      props.handleLogin(formData);
    }}>
      <h3>Login</h3>
      <label>
        Username:
        <input
          type='text'
          name='username'
          value={formData.username}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type='password'
          name='password'
          value={formData.password}
          onChange={handleChange}
        />
      </label>
      <br />
        
      <button>Sign In</button>
         <h3> Not a user? Sign up <Link to='/register'>Here!</Link> </h3>
     
      </form>

      <div className='footer-img'>
        <img src='https://i.imgur.com/M538vFh.png'
          alt='tealeaves'
        id='tealeaves' />
      </div>
      
      </>
  );
}