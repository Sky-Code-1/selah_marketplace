import React from 'react'
import { MdCall, MdMail } from 'react-icons/md'

const Contact = () => {
  return (
    <div className='contact-div'>
      <nav>
        <div style={{ paddingBottom: '1rem', borderBottom: 'solid 1px #ccc'}}>
            <p className='icon-p'><MdCall size={20}/> Call Us</p>
            <p>We are available 24/7</p>
            <p>Phone +2347052472406</p>
        </div>
        <div>
            <p className='icon-p'><MdMail size={20}/> Send Us a Mail</p>
            <p>Fill The form to the right and we'll contact you within 24 hours</p>
            <p>Email Our Customer support</p>
            <p>Email: Customersupport@uniplaza.com</p>
        </div>
      </nav>
      <form className='contact-form'>
        <div>
          <div>
            <label htmlFor='name'></label>
            <input id='name' placeholder='Your Name'/>
          </div>
          <div>
            <label htmlFor='email'></label>
            <input id='email' placeholder='Your Email'/>
          </div>
          <div>
            <label htmlFor='phone'></label>
            <input id='phone' placeholder='Your Phone'/>
          </div>
        </div>
        <textarea placeholder='Enter Your Message'></textarea>
        <div className='flex'>
            <button className='sell-btn' type='button'>Send Mail</button>
        </div>
      </form>
    </div>
  )
}

export default Contact
