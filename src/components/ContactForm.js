import React from 'react'
import { stringify } from 'qs'
import { serialize } from 'dom-form-serializer'

import './EnquiryForm.css'

const fetch = window.fetch

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
    const { name, subject, action, shapes = [] } = this.props

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
          <div className='EnquiryForm--Alert'>{this.state.alert}</div>
        )}
        <div className='row'>
          <div className='col-md-6'>
            <div className='form-group'>
              <label>First Name</label>
              <input className='form-control' name='firstName' type='text' />
            </div>

            <div className='form-group'>
              <label>Phone</label>
              <input className='form-control' name='lastName' type='tel' />
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
              <label>Diamond Shape</label>
              <div className='form-group-select'>
                <select className='custom-select' name='shape'>
                  <option selected />
                  {shapes.map(shape => <option value={shape}>{shape}</option>)}
                </select>
              </div>
            </div>
          </div>

          <div className='col-md-12'>
            <div className='form-group'>
              <label>Message</label>
              <textarea
                className='form-control'
                id='exampleTextarea'
                name='message'
                rows='3'
              />
            </div>
          </div>
        </div>

        <input type='text' name='_gotcha' style={{ display: 'none' }} />
        {!!subject && <input type='hidden' name='subject' value={subject} />}
        <input type='hidden' name='form-name' value={name} />

        <div className='col-md-12 text-center'>
          <div className='btn-actions mx-auto'>
            <button
              type='submit'
              className='btn btn-white'
              disabled={this.state.disabled}
            >
              Contact Me
            </button>
          </div>
        </div>
      </form>
    )
  }
}

export default Form
