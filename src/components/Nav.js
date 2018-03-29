import React from 'react'
import { NavLink } from 'react-router-dom'

export default ({ handlePopupOpen, menu }) => (
  <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
    <div className='container'>
      <div
        className='collapse navbar-collapse w-100 order-1 order-lg-0 dual-collapse2'
        id='navbarsExampleDefault'
      >
        <ul className='navbar-nav mr-auto'>
          <li className='nav-item'>
            <NavLink className='nav-link' to='/'>
              Home
            </NavLink>
          </li>
          <li className='nav-item active'>
            <NavLink className='nav-link' to='/about/'>
              About Me
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink className='nav-link' to='/the-process/'>
              The Process
            </NavLink>
          </li>
        </ul>
      </div>
      <div className='logo-holder mx-auto order-0'>
        <NavLink className='navbar-brand mx-auto' to='/'>
          <img
            src='/css/images/logo.png'
            srcSet='/css/images/logo@2x.png 2x'
            alt='The 5-th C'
          />
        </NavLink>
        <button
          className='navbar-toggler navbar-toggler-right collapsed'
          type='button'
          data-toggle='collapse'
          data-target='#navbarsExampleDefault'
          aria-controls='navbarsExampleDefault'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='my-1 mx-2 close'>X</span>
          <span className='navbar-toggler-icon' />
        </button>
      </div>
      <div className='navbar-collapse collapse w-100 order-3 dual-collapse2'>
        <ul className='navbar-nav ml-auto'>
          <li className='nav-item'>
            <NavLink className='nav-link' to='/promotions/'>
              Promotions
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink className='nav-link' to='/contact/'>
              Contact
            </NavLink>
          </li>

          <li className='nav-item'>
            <NavLink className='nav-link nav-link-alt' to='/apply-now/'>
              Apply Now
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
)
