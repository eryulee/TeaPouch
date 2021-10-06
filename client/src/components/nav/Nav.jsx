import './Nav.css'
import { NavLink, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import React from 'react';


const Nav = (props) => {
  const authenticatedOptions = (
    <>
      
      
        <button onClick={props.handleLogout}>
              <img src='https://i.imgur.com/uJIaTiH.png'
              alt='logout-btn'
              id='logout-btn' />
            </button>
    
      </>
  )
  const unauthenticatedOptions = (
    <>
      <NavLink className='link' to='/login'>
      
            <img src='https://i.imgur.com/3B7OJaq.png'
            alt='login-icon'
            id='login-icon' />
         
      </NavLink>

      {/* <NavLink className='link' to='/sign-up'>
      
      <img src='https://i.imgur.com/3B7OJaq.png'
      alt='login-icon'
      id='login-icon' />
   
</NavLink> */}
      </>
  )

  const alwaysOptions = (
    <>
      <NavLink className='link' to='/teas'>
      <img src='https://i.imgur.com/HgbgkCI.png'
              alt='tea-nav'
            id='tea-nav' />
      </NavLink>

      <NavLink className='link' to='/'>
      <img src='https://i.imgur.com/ZYWhmcC.png'
              alt='home-btn'
            id='home-btn' />
      </NavLink>
      </>
  )

  return (
    <nav>
      <div className='nav'>
        <div className='links'>
          {/* {user && <div className='greeting'>Welcome, {user.username}</div>} */}
          {alwaysOptions}
          {props.currentUser  ? authenticatedOptions : unauthenticatedOptions}
          </div>
      </div>
    </nav>
  )
}

export default Nav