import React, { Fragment } from 'react'
import { NavLink, Link } from 'react-router-dom'

import Content from '../components/Content'

export default ({
  globalSettings,
  socialSettings,
  navLinks,
  showContactSection,
  contactSection = {}
}) => (
  <Fragment>
    {showContactSection && (
      <section
        className='section section-contact'
        style={{ backgroundImage: `url(${contactSection.backgroundImage})` }}
      >
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 offset-md-6'>
              <div className='section-head'>
                <h2>{contactSection.title}</h2>
              </div>

              <div className='section-body'>
                <Content source={contactSection.content} />
              </div>

              <div className='btn-actions'>
                <Link to='/contact/' className='btn btn-white'>
                  Contact me
                </Link>
              </div>

              {contactSection.buttonLinkTo && (
                <div className='btn-actions'>
                  <Link
                    to={contactSection.buttonLinkTo}
                    className='btn btn-white'
                  >
                    {contactSection.buttonLabel}
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    )}

    <footer className='footer'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-3'>
            <div className='logo'>
              <img
                src='/css/images/footer-logo.jpg'
                srcSet='/css/images/footer-logo@2x.png 2x'
                alt=''
              />
            </div>
          </div>

          <div className='col-md-5 d-flex align-items-center justify-content-center'>
            <nav className='footer-nav'>
              <ul>
                <li>
                  <NavLink to='/the-process/'>The Process</NavLink>
                </li>
                <li>
                  <NavLink to='/promotions/'>Promotions</NavLink>
                </li>
                <li>
                  <NavLink to='/apply-now/'>Apply Now</NavLink>
                </li>
                <li>
                  <NavLink to='/contact/'>Contact</NavLink>
                </li>
              </ul>
            </nav>
          </div>

          <div className='col-md-4 text-right'>
            <img
              src='/css/images/ft-logo-2.png'
              srcSet='/css/images/ft-logo-2@2x.png 2x'
              alt=''
            />

            <img
              src='/css/images/footer-logo-2.jpg'
              srcSet='/css/images/footer-logo-2@2x.png 2x'
              alt=''
            />
          </div>
        </div>

        <div className='footer-bar'>
          <div className='row'>
            <div className='col-md-6'>
              <div className='copyrights'>
                <p>
                  &copy; 2018 5th C. All Rights Reserved. Site by{' '}
                  <a href='https://thriveweb.com.au'>Thrive</a>
                </p>
              </div>
            </div>

            <div className='col-md-6 text-right'>
              <ul>
                <li>
                  <a href='#'>
                    <i className='fa fa-facebook' />
                  </a>
                </li>

                <li>
                  <a href='#'>
                    <i className='fa fa-twitter' />
                  </a>
                </li>

                <li>
                  <a href='#'>
                    <i className='fa fa-instagram' />
                  </a>
                </li>

                <li>
                  <a href='#'>Terms and Conditions</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </Fragment>
)
