import React from 'react'
import Helmet from 'react-helmet'

import EnquiryFormSimpleAjax from '../components/EnquiryFormSimpleAjax'
import Content from '../components/Content'

export default ({ page, siteTitle }) => (
  <main role='main' className='main'>
    <Helmet>
      <title>{page.title}</title>
    </Helmet>

    {page.introSection && (
      <section className='section section-about-intro'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <h2 className='text-center mx-auto'>{page.introSection.title}</h2>

              <Content
                className='text-center mx-auto p-alt'
                source={page.introSection.content}
              />
            </div>

            <div className='section-foot mx-auto text-center'>
              <ul>
                <li>
                  {page.introSection.phoneLabel}:{' '}
                  <a href={`tel:${page.introSection.phoneLabel}`}>
                    {page.introSection.phone}
                  </a>
                </li>

                <li>
                  {page.introSection.emailLabel}:{' '}
                  <a href={`mailto:${page.introSection.email}`}>
                    {page.introSection.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    )}

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
