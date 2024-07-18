import React from 'react'
import FullLogo from './FullLogo'
import { Link } from 'react-router-dom'
import { FaSearch, FaHeart } from 'react-icons/fa'
import WishlistIcon from './WishlistIcon'
import ProfileIcon from './ProfileIcon'
import CartIcon from './CartIcon'
import { useNavigate } from 'react-router-dom'
import { MdMessage } from 'react-icons/md'


const Header = () => {
    const navigate = useNavigate()
    const navigateToWishList = () => {
        navigate("/wishlist")
    }
    const navigateToProfile = () => {
        navigate("/profile")
    }
    const navigateToAddProduct = () => {
        navigate("/add/product")
    }
    const navigateToAddStore = () => {
        navigate("/add/store")
    }
    const navigateToMessages = () => {
        navigate("/messages")
    }
    const navigateToCart = () => {
        navigate("/cart")
    }
  return (

    <header>
        <div>
            <div>
                <FullLogo />
            </div>
            <ul style={{flex: 1, display: 'flex', justifyContent: 'center'}}>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/contact'}>Contact</Link></li>
                <li><Link to={'/about'}>About</Link></li>
                <li><Link to={'/register'}>Sign Up</Link></li>
            </ul>
            <div className='header-search-box'>
                <div className='header-search-container'>
                    <input className='search-input' type='text' placeholder='What are you looking for'/>
                    <button><FaSearch size={20} color='#ccc' /></button>
                </div>
                <div className='icon-container'>
                    <button onClick={navigateToWishList}><WishlistIcon /></button>
                    <button onClick={navigateToCart}><CartIcon /></button>
                    <button onClick={navigateToMessages}><MdMessage size={19} color='#222'/></button>
                    <button onClick={navigateToProfile}><ProfileIcon /></button>
                </div>
            </div>
            
            <div>
                <button className='sell-btn' type='button' onClick={navigateToAddProduct}>Sell</button>
                <button className='sell-btn' type='button' onClick={navigateToAddStore}>Store</button>
            </div>
        </div>
    </header>
  )
}

export default Header
