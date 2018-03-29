import React from 'react'
import Nav from './Nav'

export default ({ title, intro, className = '' }) => (
  <header className={`header ${className}`}>
    <div className='overlay' />

    <Nav />

    {title && (
      <div className='page-title'>
        <h1>{title}</h1>
      </div>
    )}

    {intro && (
      <div className='header-intro'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <div className='header-intro-head'>
                <h2>Introducing</h2>

                <h1>The 5th C</h1>

                <p>
                  Find a better diamond or better price and I'll beat it by 10%
                </p>
              </div>

              <div className='btn-actions'>
                <a href='#' className='btn btn-white'>
                  <span>Watch Video</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )}
  </header>
)
