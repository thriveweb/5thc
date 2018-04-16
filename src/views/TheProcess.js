import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'react-router-dom'

import Content from '../components/Content'

export default ({ page }) => {
  return (
    <main role='main' className='main'>
      <Helmet>
        <title>{page.title}</title>
      </Helmet>

      <section className='section section-process'>
        {page.section.map((section, index) => {
          return (
            <div className='row' key={`section-process-${index}`}>
              {!!(index % 2) && (
                <div className='col-md-6 box-image col-img-alt'>
                  <img src={section.image} alt={section.title} />
                </div>
              )}

              <div className='col-md-6 d-flex align-items-center justify-content-center py-4'>
                <div className='box-entry text-center mx-auto'>
                  <div className='box-head'>
                    <h2>{section.title}</h2>
                  </div>

                  <div className='box-body mx-auto'>
                    <Content source={section.content} />
                  </div>

                  <div className='box-foot'>
                    <div className='btn-actions'>
                      <Link
                        to={section.buttonLinkTo || '/contact/'}
                        className='btn btn-white'
                      >
                        {section.buttonLabel}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {!(index % 2) && (
                <div className='col-md-6 box-image'>
                  <img src={section.image} alt={section.title} />
                </div>
              )}
            </div>
          )
        })}
      </section>
    </main>
  )
}
