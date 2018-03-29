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

      <section className='section section-process'>
        <div className='row'>
          <div className='col-md-6 d-flex align-items-center justify-content-center'>
            <div className='box-entry text-center mx-auto'>
              <div className='box-head'>
                <h2>I find the best diamond</h2>
              </div>

              <div className='box-body mx-auto'>
                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque corrupti quos
                  dolores et quas molestias excepturi sint occaecati cupiditate
                  non provident, similique sunt in culpa qui officia deserunt
                  mollitia animi, id est laborum et dolorum fuga. Et harum
                  quidem rerum facilis est et expedita distinctio. Nam libero
                  tempore, cum soluta nobis est eligendi
                </p>
              </div>

              <div className='box-foot'>
                <div className='btn-actions'>
                  <a href='#' className='btn btn-white'>
                    Enquire Now
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className='col-md-6 box-image'>
            <img src='/css/images/process-1.jpg' alt='' />
          </div>
        </div>

        <div className='row'>
          <div className='col-md-6 box-image col-img-alt'>
            <img src='/css/images/process-2.jpg' alt='' />
          </div>

          <div className='col-md-6 d-flex align-items-center justify-content-center'>
            <div className='box-entry text-center mx-auto'>
              <div className='box-head'>
                <h2>I help you choose the ring</h2>
              </div>

              <div className='box-body mx-auto'>
                <p>
                  Et iusto odio dignissimos ducimus qui blanditiis praesentium
                  voluptatum deleniti atque corrupti quos dolores et quas
                  molestias excepturi sint occaecati cupiditate non provident,
                  similique sunt in culpa qui officia deserunt mollitia animi,
                  id est laborum et dolorum fuga. Et harum quidem rerum facilis
                  est et expedita distinctio. Nam libero tempore, cum soluta
                  nobis est eligendi optio cumque nihil impedit quo minus
                </p>
              </div>

              <div className='box-foot'>
                <div className='btn-actions'>
                  <a href='#' className='btn btn-white'>
                    Enquire Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='col-md-6 d-flex align-items-center justify-content-center'>
            <div className='box-entry text-center mx-auto'>
              <div className='box-head'>
                <h2>I finance your investment</h2>
              </div>

              <div className='box-body mx-auto'>
                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque corrupti quos
                  dolores et quas molestias excepturi sint occaecati cupiditate
                  non provident, similique sunt in culpa qui officia deserunt
                  mollitia animi, id est laborum et dolorum fuga. Et harum
                  quidem rerum facilis est et expedita distinctio. Nam libero
                  tempore, cum soluta nobis est
                </p>
              </div>

              <div className='box-foot'>
                <div className='btn-actions'>
                  <a href='#' className='btn btn-white'>
                    Apply for Finance
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className='col-md-6 box-image'>
            <img src='/css/images/process-3.jpg' alt='' />
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
