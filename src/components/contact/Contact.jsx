import React, { useRef } from 'react'
import './contact.css'
import phone from '../../img/phone.png'
import email from '../../img/email.png'
import address from '../../img/address.png'


const Contact = () => {
  const formRef = useRef()
  function submitHandler(e) {
    e.preventDefault()
  }
  return (
    <div className='c'>
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={phone} alt="img" className="c-icon" />
              +91 8308644108
            </div>
            <div className="c-info-item">
              <img src={email} alt="img" className="c-icon" />
              nejeakshay07@gmail.com
            </div>
            <div className="c-info-item">
              <img src={address} alt="img" className="c-icon" />
              Kalamandir ,Marthahalli Benglore India
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className='c-desc'>
            <b>What'is you story?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.
          </p>
          <form ref={formRef} onSubmit={(e) => submitHandler(e)}>
            <input type="text" name='user-name' placeholder='Name' />
            <input type="text" name='user-subject' placeholder='Subject' />
            <input type="text" name='user-email' placeholder='Email' />
            <textarea rows="5" placeholder='message' name='message' />
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact