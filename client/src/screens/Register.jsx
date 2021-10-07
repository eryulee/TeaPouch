import { useState } from 'react';
import { Link } from 'react-router-dom'
import './Register.css'

export default function Register(props) {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
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
      <div className='login_logo'>
        <img src='https://i.imgur.com/khYD43E.png'
          alt='pouch'
        id='login-pouch' />
      </div>

      <div className='teap'>
      <h3 className='tp'>TeaPouch</h3>
      </div>

    <form
      onSubmit={(e) => {
        e.preventDefault();
        props.handleRegister(formData);
      }}
    >
      
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
      <label>
          {/* Email: */}
          <br />
        <input className='email'
          type='text'
          name='email'
          value={formData.email}
            onChange={handleChange}
            placeholder='Email...'
        />
      </label>
      <br />
      <label>
       {/* Password: */}
       <br />
       <input className='password'
          type='password'
          name='password'
          value={formData.password}
          onChange={handleChange}
          placeholder='Password..'
        />
      </label>
      <br />
      
         <h3 className='lg-text'> Already a user? Sign In <Link to='/login'>Here!</Link> </h3>
      <button className='signin'>Sign Up</button>

      </form>

      <div className='footer-img'>
        <img src='https://i.imgur.com/M538vFh.png'
          alt='tealeaves'
        id='tealeaves' />
      </div>
      </>
  );
}