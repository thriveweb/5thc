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
      <section className='section section-about-intro'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <h2 className='text-center mx-auto'>explore our promotions</h2>

              <p className='mx-auto text-center'>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium
              </p>
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
    </main>
  )
}
