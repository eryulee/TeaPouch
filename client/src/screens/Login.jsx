import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

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
<body>
    <div className='login_logo'>
        <img src='https://i.imgur.com/khYD43E.png'
          alt='pouch'
        id='login-pouch' />
      </div>

      <div className='teap'>
      <h3 className='tp'>TeaPouch</h3>
      </div>
    
<div className='login-form'>
    <form onSubmit={(e)=> {
      e.preventDefault();
      props.handleLogin(formData);
    }}>
      <h3 className='lg'></h3>
      <label className='lg-label'>
            {/* Username: */}
        <br />    
        <input className='username'
          type='text'
          name='username'
          value={formData.username}
         onChange={handleChange}
          placeholder='Username...'
        />
      </label>
      <br />
      <label classname='pw-label'>
            {/* Password: */}
            <br/>
       <input className='password'
          type='password'
          name='password'
          value={formData.password}
          onChange={handleChange}
          placeholder='Password..'
        />
      </label>
      <br />
        
      <button className='signin'>Sign In</button>
         <h3 className='lg-text'> Not a user? Sign up <Link to='/register'>Here!</Link> </h3>
     
        </form>
        </div>

      <div className='footer-img'>
        <img src='https://i.imgur.com/M538vFh.png?1'
          alt='tealeaves'
        id='tealeaves' />
      </div>
      
      </body>
  );
}