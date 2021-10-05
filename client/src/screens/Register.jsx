import { useState } from 'react';

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
      <div className='name_logo'>
        <img src='https://i.imgur.com/khYD43E.png'
          alt='pouch'
        id='pouch' />
      <h3>Tea Pouch</h3>
      </div>

    <form
      onSubmit={(e) => {
        e.preventDefault();
        props.handleRegister(formData);
      }}
    >
      <h3>Register</h3>
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
        Email:
        <input
          type='text'
          name='email'
          value={formData.email}
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
      
         <h3> Already a user? Sign up <Link to='/login'>Here!</Link> </h3>
      <button>Sign Up</button>

      </form>

      <div className='footer-img'>
        <img src='https://i.imgur.com/M538vFh.png'
          alt='tealeaves'
        id='tealeaves' />
      </div>
      </>
  );
}