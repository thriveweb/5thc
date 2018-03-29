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
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <article className='article article-single apply-now mx-auto'>
              <div className='article-head'>
                <h1 className='text-center mx-auto'>
                  Before applying please answer these questions
                </h1>
              </div>

              <div className='article-body'>
                <div className='form-apply'>
                  <form action=''>
                    <div className='form-group'>
                      <h4>Are you 18 or older?</h4>

                      <div className='form-check'>
                        <label className='form-check-label'>
                          <input
                            type='checkbox'
                            checked
                            className='form-check-input'
                          />
                          <span>yes</span>
                        </label>
                      </div>

                      <div className='form-check'>
                        <label className='form-check-label'>
                          <input type='checkbox' className='form-check-input' />
                          <span>no</span>
                        </label>
                      </div>
                    </div>

                    <div className='form-group'>
                      <h4>Do you have a full time job?</h4>

                      <div className='form-check'>
                        <label className='form-check-label'>
                          <input type='checkbox' className='form-check-input' />
                          <span>yes</span>
                        </label>
                      </div>

                      <div className='form-check'>
                        <label className='form-check-label'>
                          <input type='checkbox' className='form-check-input' />
                          <span>no</span>
                        </label>
                      </div>
                    </div>

                    <div className='form-group'>
                      <h4>Do you earn more than $40k per annum?</h4>

                      <div className='form-check'>
                        <label className='form-check-label'>
                          <input type='checkbox' className='form-check-input' />
                          <span>yes</span>
                        </label>
                      </div>

                      <div className='form-check'>
                        <label className='form-check-label'>
                          <input type='checkbox' className='form-check-input' />
                          <span>no</span>
                        </label>
                      </div>
                    </div>

                    <div className='form-foot'>
                      <p className='text-center mx-auto'>
                        Before submiting I authorise that all the above is
                        correct
                      </p>
                    </div>

                    <div className='col-md-12 text-center'>
                      <div className='btn-actions mx-auto'>
                        <button type='submit' className='btn btn-blue'>
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </main>
  )
}
