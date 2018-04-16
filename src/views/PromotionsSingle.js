import React, { Component, Fragment } from 'react'
import Helmet from 'react-helmet'
import { Link } from 'react-router-dom'

import PromotionsList from '../components/PromotionsList'
import LazyImage from '../components/LazyImage'
import Content from '../components/Content'

class AccordionItem extends Component {
  state = { active: false }
  toggle = e => {
    e.preventDefault()
    this.setState({ active: !this.state.active })
  }
  render () {
    const { title, content } = this.props
    const { active } = this.state
    return (
      <Fragment>
        <div
          className={`card-header ${active ? 'show' : 'collapsed'}`}
          onClick={this.toggle}
        >
          <span className='card-title'>{title}</span>
        </div>
        <Content
          id='collapseOne'
          className={`card-body ${active ? 'show' : 'collapse'}`}
          source={content}
        />
      </Fragment>
    )
  }
}

export default ({ promotion, promotions }) => {
  return (
    <main role='main' className='main'>
      <Helmet>
        <title>{promotion.title}</title>
      </Helmet>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <article className='article article-single mx-auto'>
              <div className='article-head'>
                <h1 className='text-center mx-auto'>{promotion.title}</h1>
              </div>

              <div className='article-body'>
                <div className='article-entry'>
                  <Content source={promotion.content} />

                  {promotion.featuredImage && (
                    <LazyImage
                      src={promotion.featuredImage}
                      alt={promotion.title}
                    />
                  )}
                </div>

                <div className='article-entry-foot'>
                  <div className='row'>
                    <div className='col-4'>
                      <h3>{promotion.accordionSection.title}</h3>

                      <div className='btn-actions'>
                        <Link to='/contact/' className='btn btn-blue'>
                          Enquire Now
                        </Link>
                      </div>
                    </div>

                    {promotion.accordionSection && (
                      <div className='col-8'>
                        <div className='container'>
                          <div id='accordion' className='accordion'>
                            <div className='card mb-0'>
                              {(promotion.accordionSection.accordion || []).map(
                                accordionItem => (
                                  <AccordionItem
                                    key={accordionItem.title}
                                    title={accordionItem.title}
                                    content={accordionItem.content}
                                  />
                                )
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>

      <PromotionsList promotions={promotions} />
    </main>
  )
}
