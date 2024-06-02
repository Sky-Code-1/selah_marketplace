import React from 'react'
import FullLogo from './FullLogo'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <header>
        <div>
            <div>
                <FullLogo />
            </div>
            <ul style={{flex: 1, display: 'flex', justifyContent: 'center'}}>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/'}>Contact</Link></li>
                <li><Link to={'/'}>About</Link></li>
                <li><Link to={'/register'}>Sign Up</Link></li>
            </ul>
            <input className='search-input' type='text' placeholder='What are you looking for'/>
            <div>
                <button className='sell-btn' type='button'>Sell</button>
                <button className='sell-btn' type='button'>Store</button>
            </div>
        </div>
    </header>
  )
}

export default Header
