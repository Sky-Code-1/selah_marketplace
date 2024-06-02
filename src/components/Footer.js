import React from 'react'
import logo from '../img/logo.png'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import {FaXTwitter} from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import FullLogo from './FullLogo'

const Footer = () => {
  return (
    <footer>
      <div>
        <Link><FullLogo /></Link>
        <p>Subscribe to our news letter</p>
        <input placeholder='Enter your Email' />
      </div>
      <div>
        <h2>Account</h2>
        <p><Link>My Account</Link></p>
        <p><Link>Cart</Link></p>
        <p><Link>Wishlist</Link></p>
        <p><Link>Store</Link></p>
      </div>
      <div>
        <h2>Quick Link</h2>
        <p><Link>About</Link></p>
        <p><Link>Contact</Link></p>
        <p><Link>Terms Of Use</Link></p>
        <p><Link>Privacy Policy</Link></p>
      </div>
      <div>
        <h2>Download App</h2>
        <p><Link>My Account</Link></p>
        <p><Link>Cart</Link></p>
        <div>
          <FaFacebook />
          <FaInstagram />
          <FaLinkedin />
          <FaXTwitter />
        </div>
      </div>
      <div className='copyright-div'>
        <p>&copy; Copyright Uniplaza 2022 All right reserved </p>
      </div>
    </footer>
  )
}

export default Footer
