import React from 'react'
import { Link } from 'react-router-dom'
import _kebabCase from 'lodash/kebabCase'

export default ({ promotions }) => (
  <section className='section section-promotions'>
    <div className='row'>
      {promotions.slice(0, 3).map(promotion => {
        const linkTo = `/promotions/${_kebabCase(promotion.title)}/`
        return (
          <div
            className='col-md-4 d-flex text-center'
            style={{ backgroundImage: `url(${promotion.featuredImage})` }}
            key={linkTo}
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

      <div className='section-foot'>
        <div className='col-md-12 text-center'>
          <Link to='/promotions/'>See all promotions</Link>
        </div>
      </div>
    </div>
  </section>
)
