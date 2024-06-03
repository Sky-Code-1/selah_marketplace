import React from 'react'
import imagePane from '../img/ioclothings.png'
import imagePane2 from '../img/imagepane.jpg'


const SelectedProduct = () => {
  return (
    <div className='single-product-container'>
      <div className='image-list-container'>
        <button><img alt={`Newly Listed ${'item'}`} src={imagePane2}/></button>
        <button><img alt={`Newly Listed ${'item'}`} src={imagePane}/></button>
        <button><img alt={`Newly Listed ${'item'}`} src={imagePane2}/></button>
        <button><img alt={`Newly Listed ${'item'}`} src={imagePane}/></button>
      </div>
      <div className='main-image-container'>
        <img alt={`Newly Listed ${'item'}`} src={imagePane}/>
      </div>
      <div className='product-detail-div'>
        <h2>Item Name</h2>
        <p>Item Ratings</p>
        <p>$ Item Price</p>
        <p>Item description</p>
      </div>
    </div>
  )
}

export default SelectedProduct