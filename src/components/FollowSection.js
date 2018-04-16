import React from 'react'
import InstagramFeed from './InstagramFeed'

import './FollowSection.css'

export default ({ facebookUrl, instagramUrl }) => (
  <section className='section section-follow FollowSection'>
    <div className='row'>
      {instagramUrl && (
        <div className='col-md-6'>
          <InstagramFeed instagramUrl={instagramUrl} />
        </div>
      )}

      <div className='col-md-6 d-flex align-items-center justify-content-center flex-column'>
        <div className='section-head'>
          <h2 className='text-center mx-auto'>
            follow me on <br />
            {[facebookUrl && 'Facebook', instagramUrl && 'Instagram']
              .filter(item => item)
              .join(' & ')}
          </h2>
        </div>

        <div className='section-body'>
          {facebookUrl && (
            <div className='btn-actions'>
              <a target='_blank' href={facebookUrl} className='btn btn-blue'>
                Facebook
              </a>
            </div>
          )}

          {instagramUrl && (
            <div className='btn-actions'>
              <a target='_blank' href={instagramUrl} className='btn btn-blue'>
                Instagram
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  </section>
)
