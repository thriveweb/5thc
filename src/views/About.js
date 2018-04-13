import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'react-router-dom'

import LazyImage from '../components/LazyImage'
import Content from '../components/Content.js'

export default ({ page }) => (
  <div className='About'>
    <Helmet>
      <title>{page.title}</title>
    </Helmet>
    <main role='main' className='main'>
      <section className='section section-about-intro'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <h2 className='text-center mx-auto'>{page.subtitle}</h2>
            </div>
          </div>
        </div>
      </section>

      {page.section1 && (
        <section
          className='section section-5-c'
          style={{ backgroundImage: `url(${page.section1.backgroundImage})` }}
        >
          <div className='container'>
            <div className='row'>
              <div className='col-md-3 offset-md-9'>
                <div className='section-head'>
                  <h2>{page.section1.title}</h2>
                </div>

                <div className='section-body'>
                  <Content source={page.section1.content} />
                </div>

                <div className='section-foot'>
                  <h4>{page.section1.quoteAuthor}</h4>

                  <span>{page.section1.quoteAuthorTitle}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className='section section-ct'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <div className='section-head'>
                <h2 className='text-center mx-auto'>{page.section2.title}</h2>
              </div>

              <div className='section-body text-center'>
                <img src={page.section2.image} className='img-fluid' alt='' />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className='section section-help'
        style={{ backgroundImage: `url(${page.section3.backgroundImage})` }}
      >
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 offset-md-pull-6'>
              <div className='section-head'>
                <h2>{page.section3.title}</h2>
              </div>

              <div className='section-body'>
                <Content source={page.section3.content} />
              </div>

              <div className='section-foot'>
                <div className='btn-actions'>
                  <Link to='/contact/' className='btn btn-white'>
                    Contact Me
                  </Link>
                </div>

                <div className='btn-actions'>
                  <Link
                    to={page.section3.buttonLinkTo}
                    className='btn btn-white'
                  >
                    {page.section3.buttonLabel}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='section section-follow'>
        <div className='row'>
          <div className='col-md-6'>
            <div className='row'>
              <div className='col-sm-6'>
                <img src='/css/images/fl-1.png' className='img-fluid' alt='' />
              </div>

              <div className='col-sm-6'>
                <img src='/css/images/fl-2.png' className='img-fluid' alt='' />
              </div>
            </div>

            <div className='row'>
              <div className='col-sm-6'>
                <img src='/css/images/fl-3.png' className='img-fluid' alt='' />
              </div>

              <div className='col-sm-6'>
                <img src='/css/images/fl-4.png' className='img-fluid' alt='' />
              </div>
            </div>
          </div>

          <div className='col-md-6 d-flex align-items-center justify-content-center flex-column'>
            <div className='section-head'>
              <h2 className='text-center mx-auto'>
                follow me on <br />
                FaceBook &amp; Instagram
              </h2>
            </div>

            <div className='section-body'>
              <div className='btn-actions'>
                <a href='#' className='btn btn-blue'>
                  Facebook
                </a>
              </div>

              <div className='btn-actions'>
                <a href='#' className='btn btn-blue'>
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
)
