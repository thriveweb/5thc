import React from 'react'
import { stringify } from 'qs'
import { serialize } from 'dom-form-serializer'

import './EnquiryForm.css'

const fetch = window.fetch

const PartOne = ({
  display,
  disabled,
  employmentOptions = [],
  incomeOptions = []
}) => (
  <div style={{ display: display ? 'block' : 'none' }}>
    <div className='row'>
      <div className='col-md-6'>
        <div className='form-group'>
          <label>First Name</label>
          <input className='form-control' type='text' name='firstName' />
        </div>

        <div className='form-group'>
          <label>Phone</label>
          <input className='form-control' type='tel' name='phone' />
        </div>

        <div className='form-group'>
          <div className='row'>
            <div className='col-md-6'>
              <label>State</label>
              <div className='form-group-select'>
                <select className='custom-select' name='state'>
                  <option selected />
                  <option value='NSW'>NSW</option>
                  <option value='QLD'>QLD</option>
                  <option value='SA'>SA</option>
                  <option value='TAS'>TAS</option>
                  <option value='VIC'>VIC</option>
                  <option value='WA'>WA</option>
                  <option value='ACT'>ACT</option>
                  <option value='NT'>NT</option>
                </select>
              </div>
            </div>

            <div className='col-md-6'>
              <label>Postcode</label>
              <input className='form-control' type='text' name='postcode' />
            </div>
          </div>
        </div>

        <div className='form-group'>
          <label>Employment</label>
          <div className='form-group-select'>
            <select className='custom-select' name='employment'>
              <option selected />
              {employmentOptions.map(name => (
                <option value={name}>{name}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className='col-md-6'>
        <div className='form-group'>
          <label>Last Name</label>
          <input className='form-control' type='text' name='lastName' />
        </div>

        <div className='form-group'>
          <label>Email</label>
          <input className='form-control' type='email' name='email' />
        </div>

        <div className='form-group'>
          <label>Address</label>
          <input className='form-control' type='text' name='address' />
        </div>

        <div className='form-group'>
          <label>Monthly Income</label>
          <div className='form-group-select'>
            <select className='custom-select' name='monthlyIncome'>
              <option selected />
              {incomeOptions.map(name => <option value={name}>{name}</option>)}
            </select>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const PartTwo = ({ display, disabled }) => (
  <div style={{ display: display ? 'block' : 'none' }}>
    <div className='form-group'>
      <h4>Are you 18 or older?</h4>

      <div className='form-check'>
        <label className='form-check-label'>
          <input type='checkbox' className='form-check-input' />
          <span>yes</span>
        </label>
      </div>

      <div className='form-check'>
        <label className='form-check-label'>
          <input type='checkbox' className='form-check-input' />
          <span>no</span>
        </label>
      </div>
    </div>

    <div className='form-group'>
      <h4>Do you have a full time job?</h4>

      <div className='form-check'>
        <label className='form-check-label'>
          <input type='checkbox' className='form-check-input' />
          <span>yes</span>
        </label>
      </div>

      <div className='form-check'>
        <label className='form-check-label'>
          <input type='checkbox' className='form-check-input' />
          <span>no</span>
        </label>
      </div>
    </div>

    <div className='form-group'>
      <h4>Do you earn more than $40k per annum?</h4>

      <div className='form-check'>
        <label className='form-check-label'>
          <input type='checkbox' className='form-check-input' />
          <span>yes</span>
        </label>
      </div>

      <div className='form-check'>
        <label className='form-check-label'>
          <input type='checkbox' className='form-check-input' />
          <span>no</span>
        </label>
      </div>
    </div>

    <div className='form-foot'>
      <p className='text-center mx-auto'>
        Before submiting I authorise that all the above is correct
      </p>
    </div>
  </div>
)

class Form extends React.Component {
  static defaultProps = {
    name: 'Simple Form Ajax',
    subject: '', // optional subject of the notification email
    action: '',
    successMessage: 'Thanks for your enquiry, we will get back to you soon',
    errorMessage:
      'There is a problem, your message has not been sent, please try contacting us via email'
  }

  state = {
    alert: '',
    disabled: false
  }

  handleSubmit = e => {
    e.preventDefault()
    if (this.state.disabled) return

    const form = e.target
    const data = serialize(form)
    this.setState({ disabled: true })
    fetch(form.action + '?' + stringify(data), {
      method: 'POST'
    })
      .then(res => {
        if (res.ok) {
          return res
        } else {
          throw new Error('Network error')
        }
      })
      .then(() => {
        form.reset()
        this.setState({
          alert: this.props.successMessage,
          disabled: false
        })
      })
      .catch(err => {
        console.error(err)
        this.setState({
          disabled: false,
          alert: this.props.errorMessage
        })
      })
  }

  render () {
    const {
      name,
      subject,
      action,
      pageSelected,
      handleSelectPage,
      incomeOptions,
      employmentOptions
    } = this.props

    return (
      <form
        className=''
        name={name}
        action={action}
        onSubmit={this.handleSubmit}
        data-netlify=''
        data-netlify-honeypot='_gotcha'
      >
        {this.state.alert && (
          <div className='EnquiryForm--Alert' style={{ color: 'inherit' }}>
            {this.state.alert}
          </div>
        )}

        <input type='text' name='_gotcha' style={{ display: 'none' }} />
        {!!subject && <input type='hidden' name='subject' value={subject} />}
        <input type='hidden' name='form-name' value={name} />

        <PartOne
          disabled={this.state.disabled}
          display={pageSelected === 1}
          incomeOptions={incomeOptions}
          employmentOptions={employmentOptions}
        />
        <PartTwo disabled={this.state.disabled} display={pageSelected === 2} />

        <div className='form-foot'>
          <div className='row'>
            <div className='col-md-6'>
              <div className='btn-actions btn-actions-prev'>
                <button
                  className='btn btn-blue'
                  onClick={e => {
                    e.preventDefault()
                    handleSelectPage(1)
                  }}
                  hidden={pageSelected === 1}
                >
                  <i className='fa fa-chevron-left' /> Prev
                </button>
              </div>
            </div>

            {pageSelected === 2 ? (
              <div className='col-md-6'>
                <div className='btn-actions pull-right'>
                  <button
                    type='submit'
                    className='btn btn-blue'
                    disabled={this.state.disabled}
                  >
                    Submit
                  </button>
                </div>
              </div>
            ) : (
              <div className='col-md-6'>
                <div className='btn-actions pull-right'>
                  <button
                    className='btn btn-blue'
                    onClick={e => {
                      e.preventDefault()
                      handleSelectPage(2)
                    }}
                  >
                    Next <i className='fa fa-chevron-right' />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </form>
    )
  }
}

export default Form
