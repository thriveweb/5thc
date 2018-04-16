import React from 'react'
import Helmet from 'react-helmet'
import _kebabCase from 'lodash/kebabCase'
import { Link } from 'react-router-dom'

export default ({ page, promotions = [] }) => {
  const { title } = page
  return (
    <main role='main' className='main'>
      <Helmet>
        <title>{page.title}</title>
      </Helmet>
      <section className='section section-about-intro'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <h2 className='text-center mx-auto'>{page.introTitle}</h2>
              <p className='mx-auto text-center'>{page.introContent}</p>
            </div>
          </div>
        </div>
      </section>

      <section className='section section-promotions'>
        <div className='row'>
          {promotions.map(promotion => {
            const linkTo = `/promotions/${_kebabCase(promotion.title)}/`
            return (
              <div
                key={linkTo}
                className='col-md-4 d-flex text-center'
                style={{ backgroundImage: `url(${promotion.featuredImage})` }}
              >
                <div className='section-content align-items-center d-flex justify-content-center'>
                  <Link to={linkTo}>
                    <span>{promotion.title}</span>
                  </Link>

                  <div className='btn-actions'>
                    <Link to={linkTo} className='btn btn-white'>
                      More
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </main>
  )
}
