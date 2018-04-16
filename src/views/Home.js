import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'react-router-dom'

import Content from '../components/Content'
import InstagramFeed from '../components/InstagramFeed'

export default ({ page, socialMediaSettings }) => {
  const { section1, section2, section3, section4, section6 } = page
  return (
    <main role='main' className='main'>
      <Helmet>
        <title>{page.title}</title>
      </Helmet>

      <section className='section section-diamonds text-center'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <div className='section-head'>
                <h2 className='mx-auto'>{section1.title}</h2>

                <p>{section1.subtitle}</p>
              </div>

              <div className='section-body'>
                <div className='btn-actions'>
                  <Link
                    to={section1.buttonLinkTo || ''}
                    className='btn btn-blue'
                  >
                    {section1.buttonLabel}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='section section-features'>
        <div className='row '>
          {!!section2.featureCard &&
            section2.featureCard.map(card => (
              <div
                key={card.title + card.image}
                className='col-md-4 d-flex'
                style={{
                  backgroundImage: `url(${card.image})`
                }}
              >
                <Link
                  to={card.linkTo || ''}
                  className='align-items-center d-flex justify-content-center'
                >
                  <span>{card.title}</span>
                </Link>
              </div>
            ))}
        </div>
      </section>

      <section
        className='section section-diamonds-alt text-center'
        style={{ backgroundImage: `url(${section3.backgroundImage})` }}
      >
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <div className='section-head'>
                <h2 className='mx-auto'>{section3.title}</h2>

                <p>{section3.subtitle}</p>
              </div>

              <div className='section-body'>
                <div className='btn-actions'>
                  <Link
                    to={section3.buttonLinkTo || ''}
                    className='btn btn-white'
                  >
                    {section3.buttonLabel}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='section section-cinema'>
        <div className='container'>
          <div className='row push-right'>
            <div className='col-md-4'>
              <h2>{section4.title}</h2>

              <div className='entry'>
                <Content source={section4.content} />
              </div>
            </div>

            <div className='col-md-8 text-center'>
              {section4.videoEmbedCode && (
                <div
                  className='video embed-container'
                  dangerouslySetInnerHTML={{ __html: section4.videoEmbedCode }}
                />
              )}
            </div>
          </div>
        </div>
      </section>

      <section className='section section-promotions'>
        <div className='row'>
          <div className='col-md-4 d-flex text-center'>
            <div className='section-content align-items-center d-flex justify-content-center'>
              <a href='#'>
                <span>Say i Love you with diamonds for only $49/ week</span>
              </a>

              <div className='btn-actions'>
                <a href='#' className='btn btn-white'>
                  More
                </a>
              </div>
            </div>
          </div>

          <div className='col-md-4 d-flex text-center'>
            <div className='section-content align-items-center d-flex justify-content-center'>
              <a href='#'>
                <span>
                  If you are confused about diamonds, don't fret. Speak to me -
                  the 5th C.
                </span>
              </a>

              <div className='btn-actions'>
                <a href='#' className='btn btn-white'>
                  More
                </a>
              </div>
            </div>
          </div>

          <div className='col-md-4 d-flex text-center'>
            <div className='section-content align-items-center d-flex justify-content-center'>
              <a href='#'>
                <span>
                  Last minute Valentine's Day gift idea - Buy her a diamond.
                </span>
              </a>

              <div className='btn-actions'>
                <a href='#' className='btn btn-white'>
                  More
                </a>
              </div>
            </div>
          </div>

          <div className='section-foot'>
            <div className='col-md-12 text-center'>
              <a href='#'>See all promotions</a>
            </div>
          </div>
        </div>
      </section>

      <div className='section section section-featured-in'>
        <div className='row'>
          <div className='section-head'>
            <div className='col-md-12'>
              <h2 className='text-center'>{section6.title}</h2>
            </div>

            <div className='section-logos'>
              <div className='row'>
                {!!section6.logos &&
                  section6.logos.map((logo, index) => (
                    <div
                      key={index + logo}
                      className='col-md-4 text-center  d-flex justify-content-center'
                    >
                      <img src={logo.image} alt='' />
                    </div>
                  ))}
              </div>
            </div>
          </div>

          {socialMediaSettings.instagram && (
            <div className='section-body'>
              <InstagramFeed instagramUrl={socialMediaSettings.instagram} />
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
