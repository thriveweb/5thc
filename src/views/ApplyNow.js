import React from 'react'
import Helmet from 'react-helmet'

import ApplyNowForm from '../components/ApplyNowForm'

import splitBy from '../util/splitBy'

class ApplyNow extends React.Component {
  state = {
    pageSelected: 1
  }

  handleSelectPage = id => this.setState({ pageSelected: id })

  render () {
    const { page } = this.props
    const { pageSelected } = this.state
    return (
      <main role='main' className='main'>
        <Helmet>
          <title>{page.title}</title>
        </Helmet>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <article className='article article-single apply-now mx-auto'>
                {pageSelected === 1 && (
                  <div className='article-head article-head-alt'>
                    <h1>
                      <span>1</span>
                      Personal details
                    </h1>
                  </div>
                )}

                {pageSelected === 2 && (
                  <div className='article-head'>
                    <h1 className='text-center mx-auto'>
                      Before applying please answer these questions
                    </h1>
                  </div>
                )}

                <div className='article-body'>
                  <div className='form-personal-details'>
                    <ApplyNowForm
                      name='Apply Now'
                      pageSelected={pageSelected}
                      handleSelectPage={this.handleSelectPage}
                      incomeOptions={splitBy(page.incomeOptions, '|')}
                      employmentOptions={splitBy(page.employmentOptions, '|')}
                    />
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </main>
    )
  }
}

export default ApplyNow
