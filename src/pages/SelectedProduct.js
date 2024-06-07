import React from 'react'
import imagePane from '../img/pad.png'
import imagePane2 from '../img/imagepane.jpg'
import Tag from '../components/Tag'
import { useSelector } from 'react-redux'
import ProductItem from '../components/ProductItem'


const SelectedProduct = () => {
  const products = useSelector(state => state.products)
  return (
    <>
      <p className='product-path-paragraph'>Account / Products / Black Pad</p>
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
          <p style={{fontFamily: 'inter', fontWeight: '600', fontSize: '24px'}}>Men's Jouggers & T-Shirts</p>
          <p>Item Ratings (3.5/5)</p>
          <p style={{color: '#e0960c', fontSize: '18px'}}>$700</p>
          <p>
            Item descriptionNote that 
            the development build is not optimized.
            To create a production build
          </p>
        </div>
      </div>
      <div className='product-list'>
        <Tag status={'Related Items'} category={'Recomended Products'}/>
        <div className='trending-product-list margin-bottom'>
            {products.map(product => (
            <ProductItem product={product}/>
            ))}
        </div>

      </div>
      
    </>
  )
}

export default SelectedProduct