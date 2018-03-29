import React from 'react'
import Helmet from 'react-helmet'

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
              <h2 className='text-center mx-auto'>
                I AM EVERYTHING YOU NEED TO KNOW ABOUT DIAMONDS
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section className='section section-5-c'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-3 offset-md-9'>
              <div className='section-head'>
                <h2>THE 5TH C</h2>
              </div>

              <div className='section-body'>
                <p>
                  It’s time for you to face the truth: you don’t know diamonds.
                  But that’s ok, because you’ve found me. I will find the
                  perfect diamond. I will find the perfect price. I will
                  personally make sure you blow her socks out of the water,
                  because this is what I do. I find the diamonds for you. So
                  don’t worry that not so pretty head about the four Cs: the
                  cut, colour, clarity and carat weight.
                </p>
              </div>

              <div className='section-foot'>
                <h4>I am the Fifth C</h4>

                <span>Your Diamond Concierge.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='section section-ct'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <div className='section-head'>
                <h2 className='text-center mx-auto'>
                  Sed ut perspiciatis unde omnis iste natus error sit volupt
                </h2>
              </div>

              <div className='section-body text-center'>
                <img
                  src='/css/images/5c-image.jpg'
                  className='img-fluid'
                  alt=''
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='section section-help'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 offset-md-pull-6'>
              <div className='section-head'>
                <h2>I'm here to help you</h2>
              </div>

              <div className='section-body'>
                <p>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia consequuntur magni dolores eos qui
                  ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                  qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                  velit, sed quia non numquam eius modi tempora incidunt ut
                  labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad
                  minima veniam, quis nostrum exercitationem ullam corporis
                  suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur
                  utem vel eum iure.
                </p>
              </div>

              <div className='section-foot'>
                <div className='btn-actions'>
                  <a href='#' className='btn btn-white'>
                    Contact Me
                  </a>
                </div>

                <div className='btn-actions'>
                  <a href='#' className='btn btn-white'>
                    Apply for Finance
                  </a>
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
