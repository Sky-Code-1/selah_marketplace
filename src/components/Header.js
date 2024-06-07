import React from 'react'
import FullLogo from './FullLogo'
import { Link } from 'react-router-dom'
import { FaSearch, FaHeart } from 'react-icons/fa'
import WishlistIcon from './WishlistIcon'
import ProfileIcon from './ProfileIcon'
import CartIcon from './CartIcon'
import { useNavigate } from 'react-router-dom'


const Header = () => {
    const navigate = useNavigate()
    const navigateToWishList = () => {
        navigate("/wishlist")
    }
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
            <div className='header-search-box'>
                <div className='header-search-container'>
                    <input className='search-input' type='text' placeholder='What are you looking for'/>
                    <button><FaSearch size={20} color='#ccc' /></button>
                </div>
                <div className='icon-container'>
                    <button onClick={navigateToWishList}><WishlistIcon /></button>
                    <CartIcon />
                    <ProfileIcon />
                </div>
                
            </div>
            
            <div>
                <button className='sell-btn' type='button'>Sell</button>
                <button className='sell-btn' type='button'>Store</button>
            </div>
        </div>
    </header>
  )
}

export default Header
