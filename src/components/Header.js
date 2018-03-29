import React from 'react'
import Nav from './Nav'

export default ({ title }) => (
  <header className='header header-about'>
    <div className='overlay' />

    <Nav />

    <div className='page-title'>
      <h1>{title}</h1>
    </div>
  </header>
)
