import React from 'react'
import Helmet from 'react-helmet'

import ContactForm from '../components/ContactForm'
import Content from '../components/Content'
import splitBy from '../util/splitBy'

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
              <h4 className='text-center mx-auto'>{page.formContent}</h4>
            </div>

            <div className='section-body'>
              <div className='form-contact mx-auto'>
                <ContactForm
                  name='Contact Form'
                  shapes={splitBy(page.diamondShapes, '|')}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
)
