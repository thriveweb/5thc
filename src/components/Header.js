import React from 'react'
import Nav from './Nav'

import { getImageSrc } from '../util/getImageUrl'
import './Header.css'

class Header extends React.Component {
  state = { videoOpen: false }

  toggleVideo = e => {
    e && e.preventDefault()
    this.setState(prevState => ({ videoOpen: !prevState.videoOpen }))
  }

  render () {
    const { title, intro, className = '' } = this.props
    return (
      <header
        className={`header ${className}`}
        style={{
          backgroundImage: `url(${intro &&
            getImageSrc(intro.backgroundImage, 1200)})`
        }}
      >
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
                    <h1>{intro.title}</h1>
                    <p>{intro.subtitle}</p>
                  </div>

                  <div className='btn-actions'>
                    <a
                      href='#'
                      className='btn btn-white'
                      onClick={this.toggleVideo}
                    >
                      <span>{intro.buttonLabel}</span>
                    </a>
                  </div>

                  {intro.videoEmbedCode &&
                    this.state.videoOpen && (
                      <div className='header--video'>
                        <div
                          className='header--video--overlay'
                          onClick={this.toggleVideo}
                        />
                        <div className='container relative'>
                          <svg
                            width='24'
                            height='24'
                            viewBox='0 0 24 24'
                            fill='none'
                            stroke='currentColor'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            className='feather feather-x header--video--close-button'
                            onClick={this.toggleVideo}
                          >
                            <line x1='18' y1='6' x2='6' y2='18' />
                            <line x1='6' y1='6' x2='18' y2='18' />
                          </svg>
                          <div
                            className='embed-container'
                            dangerouslySetInnerHTML={{
                              __html: intro.videoEmbedCode
                            }}
                          />
                        </div>
                      </div>
                    )}
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    )
  }
}

export default Header
