import React from 'react'
import Helmet from 'react-helmet'

import EnquiryFormSimpleAjax from '../components/EnquiryFormSimpleAjax'
import Content from '../components/Content'

export default ({ page, siteTitle }) => (
  <main role='main' className='main'>
    <Helmet>
      <title>{page.title}</title>
    </Helmet>

    <section className='section section-about-intro'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <h2 className='text-center mx-auto'>
              CONTACT ME NOW. URGENTLY. I MEAN IT.
            </h2>

            <p className='text-center mx-auto p-alt'>
              The purpose of your brochure may differ from business to business.
              Some are designed to display services, whereas others are focused
              on selling an idea. No matter what the focus of the brochure is,
              it needs to be readable, intriguing, and functional. The brochure
              must grab a viewer.
            </p>
          </div>

          <div className='section-foot mx-auto text-center'>
            <ul>
              <li>
                Call me: <a href='tel:5555 555 555'>5555 555 555</a>
              </li>

              <li>
                Email me:{' '}
                <a href='mailto:hello@5thc.com.au'>hello@5thc.com.au</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section className='section section-contact-form'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <div className='section-head'>
              <h4 className='text-center mx-auto'>
                Fill out the form and qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit, sed quia non numquam
              </h4>
            </div>

            <div className='section-body'>
              <div className='form-contact mx-auto'>
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
                        <label>Diamond Shape</label>
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

                    <div className='col-md-12'>
                      <div className='form-group'>
                        <label>Message</label>
                        <textarea
                          className='form-control'
                          id='exampleTextarea'
                          rows='3'
                        />
                      </div>
                    </div>
                  </div>

                  <div className='col-md-12 text-center'>
                    <div className='btn-actions mx-auto'>
                      <button type='submit' className='btn btn-white'>
                        Contact Me
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <EnquiryFormSimpleAjax name='Simple Form Ajax' />
  </main>
)
