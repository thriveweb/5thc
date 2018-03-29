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
            <article className='article article-single mx-auto'>
              <div className='article-head'>
                <h1 className='text-center mx-auto'>
                  Say i Love you with diamonds for only $49/ week
                </h1>
              </div>

              <div className='article-body'>
                <div className='article-entry'>
                  <p>
                    The purpose of your brochure may differ from business to
                    business. Some are designed to display services, whereas
                    others are focused on selling an idea. No matter what the
                    focus of the brochure is, it needs to be readable,
                    intriguing, and functional. The brochure must grab a
                    viewer’s attention and hold it long enough to deliver the
                    pertinent information. How do you grab your customers’
                    attention with just a piece of paper? You could try by
                    giving the viewer a paper cut, but that’s not the kind of
                    attention you want, is it? Seriously though, with so many
                    brochures out there, how do you stand out? The answer is
                    quite simple.
                  </p>

                  <img
                    src='/css/images/single-image.jpg'
                    className='img-fluid'
                    alt=''
                  />
                </div>

                <div className='article-entry-foot'>
                  <div className='row'>
                    <div className='col-4'>
                      <h3>Some engaging title here to lead customer</h3>

                      <div className='btn-actions'>
                        <a href='#' className='btn btn-blue'>
                          Enquire Now
                        </a>
                      </div>

                      <div className='single-share'>
                        <ul>
                          <li>
                            <span>Share on</span>
                          </li>

                          <li>
                            <a href='#'>
                              <i className='fa fa-facebook' />
                            </a>
                          </li>

                          <li>
                            <a href='#'>
                              <i className='fa fa-twitter' />
                            </a>
                          </li>

                          <li>
                            <a href='#'>
                              <i className='fa fa-instagram' />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className='col-8'>
                      <div className='container'>
                        <div id='accordion' className='accordion'>
                          <div className='card mb-0'>
                            <div
                              className='card-header collapsed'
                              data-toggle='collapse'
                              href='#collapseOne'
                            >
                              <a className='card-title'>How it Works</a>
                            </div>
                            <div
                              id='collapseOne'
                              className='card-body collapse'
                              data-parent='#accordion'
                            >
                              Anim pariatur cliche reprehenderit, enim eiusmod
                              high life accusamus terry richardson ad squid. 3
                              wolf moon officia aute, non cupidatat skateboard
                              dolor brunch. Food truck quinoa nesciunt laborum
                              eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                              put a bird on it squid single-origin coffee nulla
                              assumenda shoreditch et. Nihil anim keffiyeh
                              helvetica, craft beer labore wes anderson cred
                              nesciunt sapiente ea proident. Ad vegan excepteur
                              butcher vice lomo. Leggings occaecat craft beer
                              farm-to-table, raw denim aesthetic synth nesciunt
                              you probably haven't heard of them accusamus
                              labore sustainable VHS.
                            </div>
                            <div
                              className='card-header collapsed'
                              data-toggle='collapse'
                              data-parent='#accordion'
                              href='#collapseTwo'
                            >
                              <a className='card-title'>Finance</a>
                            </div>
                            <div
                              id='collapseTwo'
                              className='card-body collapse'
                              data-parent='#accordion'
                            >
                              Anim pariatur cliche reprehenderit, enim eiusmod
                              high life accusamus terry richardson ad squid. 3
                              wolf moon officia aute, non cupidatat skateboard
                              dolor brunch. Food truck quinoa nesciunt laborum
                              eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                              put a bird on it squid single-origin coffee nulla
                              assumenda shoreditch et. Nihil anim keffiyeh
                              helvetica, craft beer labore wes anderson cred
                              nesciunt sapiente ea proident. Ad vegan excepteur
                              butcher vice lomo. Leggings occaecat craft beer
                              farm-to-table, raw denim aesthetic synth nesciunt
                              you probably haven't heard of them accusamus
                              labore sustainable VHS.
                            </div>
                            <div
                              className='card-header collapsed'
                              data-toggle='collapse'
                              data-parent='#accordion'
                              href='#collapseThree'
                            >
                              <a className='card-title'>Other Item here</a>
                            </div>
                            <div
                              id='collapseThree'
                              className='collapse'
                              data-parent='#accordion'
                            >
                              <div className='card-body'>
                                Anim pariatur cliche reprehenderit, enim eiusmod
                                high life accusamus terry richardson ad squid. 3
                                wolf moon officia aute, non cupidatat skateboard
                                dolor brunch. Food truck quinoa nesciunt laborum
                                eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                                put a bird on it squid single-origin coffee
                                nulla assumenda shoreditch et. samus labore
                                sustainable VHS.
                              </div>
                            </div>

                            <div
                              className='card-header collapsed'
                              data-toggle='collapse'
                              data-parent='#accordion'
                              href='#collapseFour'
                            >
                              <a className='card-title'>Terms and Conditions</a>
                            </div>
                            <div
                              id='collapseFour'
                              className='collapse'
                              data-parent='#accordion'
                            >
                              <div className='card-body'>
                                Anim pariatur cliche reprehenderit, enim eiusmod
                                high life accusamus terry richardson ad squid. 3
                                wolf moon officia aute, non cupidatat skateboard
                                dolor brunch. Food truck quinoa nesciunt laborum
                                eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                                put a bird on it squid single-origin coffee
                                nulla assumenda shoreditch et. samus labore
                                sustainable VHS.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>

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
    </main>
  )
}
