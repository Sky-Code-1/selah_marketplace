import React from 'react'
import { MdCall, MdMail } from 'react-icons/md'

const Contact = () => {
  return (
    <div className='contact-div'>
      <nav>
        <div>
            <p><MdCall size={20}/> Call Us</p>
            <p>We are available 24/7</p>
            <p>Phone +2347052472406</p>
        </div>
        <div>
            <p><MdMail size={20}/> Send Us a Mail</p>
            <p>Fill The form to the right and we'll contact you within 24 hours</p>
            <p>Email Our Customer support</p>
            <p>Email: Customersupport@uniplaza.com</p>
        </div>
      </nav>
      <form>
        <div>
            <div>
                <input  placeholder='Your Name'/>
                <input  placeholder='Your Email'/>
                <input  placeholder='Your Phone'/>
            </div>
        </div>
        <div>
            <textarea></textarea>
        </div>
        <div>
            <button type='button'>Send Mail</button>
        </div>
      </form>
    </div>
  )
}

export default Contact
