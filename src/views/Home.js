import React from 'react'
import Helmet from 'react-helmet'

import Content from '../components/Content'

export default ({ page }) => {
  const { title, subtitle } = page
  return (
    <main role='main' className='main'>
      <Helmet>
        <title>{page.title}</title>
      </Helmet>

      <section className='section section-diamonds text-center'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <div className='section-head'>
                <h2 className='mx-auto'>
                  I AM EVERYTHING YOU NEED TO KNOW ABOUT DIAMONDS
                </h2>

                <p>
                  There's the Cut, the Colour, the Clarity, the Carat, and then
                  there's me, the 5th C
                </p>
              </div>

              <div className='section-body'>
                <div className='btn-actions'>
                  <a href='#' className='btn btn-blue'>
                    Discover More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='section section-features'>
        <div className='row '>
          <div className='col-md-4 d-flex'>
            <a
              href='#'
              className='align-items-center d-flex justify-content-center'
            >
              <span>I find the best diamond</span>
            </a>
          </div>

          <div className='col-md-4 d-flex'>
            <a
              href='#'
              className='align-items-center d-flex justify-content-center'
            >
              <span>I help you choose the ring</span>
            </a>
          </div>

          <div className='col-md-4 d-flex'>
            <a
              href='#'
              className='align-items-center d-flex justify-content-center'
            >
              <span>I finance your investment</span>
            </a>
          </div>
        </div>
      </section>

      <section className='section section-diamonds-alt text-center'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <div className='section-head'>
                <h2 className='mx-auto'>diamonds speak louder than words</h2>

                <p>
                  With a best price guarantee and life time warranty, let me
                  take care of everything.
                </p>
              </div>

              <div className='section-body'>
                <div className='btn-actions'>
                  <a href='#' className='btn btn-white'>
                    Apply Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='section section-cinema'>
        <div className='container'>
          <div className='row push-right'>
            <div className='col-md-4'>
              <h2>The Viral Cinema Proposal with $85k Diamond Ring</h2>

              <div className='entry'>
                <p>
                  I'm the 5thC and I have the power to do things beyond your
                  imagination. Take for example lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat. Duis aute irure dolor in reprehenderit
                  in voluptate vel
                </p>
              </div>
            </div>

            <div className='col-md-8 text-center'>
              <div className='video'>
                <iframe
                  width='700'
                  height='505'
                  src='https://www.youtube.com/embed/NpEaa2P7qZI'
                  frameBorder='0'
                  allow='autoplay; encrypted-media'
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='section section-promotions'>
        <div className='row'>
          <div className='col-md-4 d-flex text-center'>
            <div className='section-content align-items-center d-flex justify-content-center'>
              <a href='#'>
                <span>Say i Love you with diamonds for only $49/ week</span>
              </a>

              <div className='btn-actions'>
                <a href='#' className='btn btn-white'>
                  More
                </a>
              </div>
            </div>
          </div>

          <div className='col-md-4 d-flex text-center'>
            <div className='section-content align-items-center d-flex justify-content-center'>
              <a href='#'>
                <span>
                  If you are confused about diamonds, don't fret. Speak to me -
                  the 5th C.
                </span>
              </a>

              <div className='btn-actions'>
                <a href='#' className='btn btn-white'>
                  More
                </a>
              </div>
            </div>
          </div>

          <div className='col-md-4 d-flex text-center'>
            <div className='section-content align-items-center d-flex justify-content-center'>
              <a href='#'>
                <span>
                  Last minute Valentine's Day gift idea - Buy her a diamond.
                </span>
              </a>

              <div className='btn-actions'>
                <a href='#' className='btn btn-white'>
                  More
                </a>
              </div>
            </div>
          </div>

          <div className='section-foot'>
            <div className='col-md-12 text-center'>
              <a href='#'>See all promotions</a>
            </div>
          </div>
        </div>
      </section>

      <section className='section section-contact'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 offset-md-6'>
              <div className='section-head'>
                <h2>contact me</h2>
              </div>

              <div className='section-body'>
                <h3>STILL NOT SURE WHAT TO GET?</h3>

                <p>
                  Don't fret, I'm here to help. Contact me directly, right now,
                  and I'll take care of it.
                </p>
              </div>

              <div className='btn-actions'>
                <a href='#' className='btn btn-white'>
                  Contact me
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
      </section>

      <div className='section section section-featured-in'>
        <div className='row'>
          <div className='section-head'>
            <div className='col-md-12'>
              <h2 className='text-center'>As featured in</h2>
            </div>

            <div className='section-logos'>
              <div className='row'>
                <div className='col-md-4 text-center  d-flex justify-content-center'>
                  <img src='/css/images/ft-logo-1.jpg' alt='' />
                </div>

                <div className='col-md-4 text-center  d-flex justify-content-center'>
                  <img src='/css/images/ft-logo-2.jpg' alt='' />
                </div>

                <div className='col-md-4 text-center  d-flex justify-content-center'>
                  <img src='/css/images/ft-logo-3.jpg' alt='' />
                </div>
              </div>
            </div>
          </div>

          <div className='section-body'>
            <div className='row'>
              <div className='col-md-2'>
                <img src='/css/images/ft-1.png' className='img-fluid' alt='' />
              </div>

              <div className='col-md-2'>
                <img src='/css/images/ft-2.png' className='img-fluid' alt='' />
              </div>

              <div className='col-md-2'>
                <img src='/css/images/ft-3.png' className='img-fluid' alt='' />
              </div>

              <div className='col-md-2'>
                <img src='/css/images/ft-4.png' className='img-fluid' alt='' />
              </div>

              <div className='col-md-2'>
                <img src='/css/images/ft-5.png' className='img-fluid' alt='' />
              </div>

              <div className='col-md-2'>
                <img src='/css/images/ft-6.png' className='img-fluid' alt='' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
