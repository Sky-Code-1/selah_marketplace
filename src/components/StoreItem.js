import React from 'react'
import storeImage from "../img/ioclothings.png"
import { MdVerified } from 'react-icons/md'

const StoreItem = ({store}) => {
  return (
    <div className='store-details'>
      <div className='store-image-container'>
        {/* <div className='store-icon-container'>
          <FaHeart />
          <FaEye />
        </div> */}
        <img alt={`clean ${store.name}`} src={storeImage}></img>
      </div>
      <div className='verified-div'>
        {store.verified && <MdVerified size={20} color='gold' />}
      </div>
      <div className='store-details-container'>
        <div>
          <p className='store-name'>{store.name}</p>
          <p className='store-rating'>({store.ratings}/10)</p>
        </div>
        <button>See More</button>
      </div>
    </div>
  )
}

export default StoreItem
