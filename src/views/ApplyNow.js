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
              <div className='article-head article-head-alt'>
                <h1>
                  <span>1</span>
                  Personal details
                </h1>
              </div>

              <div className='article-body'>
                <div className='form-personal-details'>
                  <form action=''>
                    <div className='row'>
                      <div className='col-md-6'>
                        <div className='form-group'>
                          <label>First Name</label>
                          <input className='form-control' type='text' />
                        </div>

                        <div className='form-group'>
                          <label>Phone</label>
                          <input className='form-control' type='tel' />
                        </div>

                        <div className='form-group'>
                          <div className='row'>
                            <div className='col-md-6'>
                              <label>State</label>
                              <div className='form-group-select'>
                                <select className='custom-select'>
                                  <option selected />
                                  <option value='1'>One</option>
                                  <option value='2'>Two</option>
                                  <option value='3'>Three</option>
                                </select>
                              </div>
                            </div>

                            <div className='col-md-6'>
                              <label>Postcode</label>
                              <input className='form-control' type='text' />
                            </div>
                          </div>
                        </div>

                        <div className='form-group'>
                          <label>Employment</label>
                          <div className='form-group-select'>
                            <select className='custom-select'>
                              <option selected />
                              <option value='1'>One</option>
                              <option value='2'>Two</option>
                              <option value='3'>Three</option>
                            </select>
                          </div>
                        </div>

                        <div className='form-group'>
                          <label>Other item</label>
                          <div className='form-group-select'>
                            <select className='custom-select'>
                              <option selected />
                              <option value='1'>One</option>
                              <option value='2'>Two</option>
                              <option value='3'>Three</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      <div className='col-md-6'>
                        <div className='form-group'>
                          <label>Last Name</label>
                          <input className='form-control' type='text' />
                        </div>

                        <div className='form-group'>
                          <label>Email</label>
                          <input className='form-control' type='email' />
                        </div>

                        <div className='form-group'>
                          <label>Address</label>
                          <input className='form-control' type='text' />
                        </div>

                        <div className='form-group'>
                          <label>Monthly Income</label>
                          <div className='form-group-select'>
                            <select className='custom-select'>
                              <option selected />
                              <option value='1'>One</option>
                              <option value='2'>Two</option>
                              <option value='3'>Three</option>
                            </select>
                          </div>
                        </div>

                        <div className='form-group'>
                          <label>Other item</label>
                          <div className='form-group-select'>
                            <select className='custom-select'>
                              <option selected />
                              <option value='1'>One</option>
                              <option value='2'>Two</option>
                              <option value='3'>Three</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className='form-foot'>
                      <div className='row'>
                        <div className='col-md-6'>
                          <div className='btn-actions btn-actions-prev'>
                            <button type='submit' className='btn btn-blue' disabled>
                              <i className='fa fa-chevron-left' /> Prev
                            </button>
                          </div>
                        </div>

                        <div className='col-md-6'>
                          <div className='btn-actions pull-right'>
                            <button type='submit' className='btn btn-blue'>
                              Next <i className='fa fa-chevron-right' />
                            </button>
                          </div>
                        </div>
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
