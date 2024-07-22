import React from 'react'
import imagePane from '../img/pad.png'
import imagePane2 from '../img/imagepane.jpg'
import Tag from '../components/Tag'
import { useSelector } from 'react-redux'
import ProductItem from '../components/ProductItem'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { allProducts, fetchProducts } from '../features/products/productsSlice'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'


const SelectedProduct = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const products = useSelector(allProducts)
  const product = products.filter(p => p.id == id)[0]
  const navigateToMessage = () => {
    navigate('/messages')
  }
  useEffect(() => {
    dispatch(fetchProducts())
  }, [])
  // product.image_url.length > 0 ? product.image_url[0] : 
  return (
    <>
      <p className='product-path-paragraph'>Account &gt; Products &gt; Black Pad</p>
      <div className='single-product-container'>
        <div className='image-list-container'>
          <button><img alt={`Newly Listed ${'item'}`} src={product.image_urls.length > 0 ? product.image_urls[0] : imagePane2}/></button>
          <button><img alt={`Newly Listed ${'item'}`} src={imagePane}/></button>
          <button><img alt={`Newly Listed ${'item'}`} src={imagePane2}/></button>
          <button><img alt={`Newly Listed ${'item'}`} src={imagePane}/></button>
        </div>
        <div className='main-image-container'>
          <img alt={`Newly Listed ${'item'}`} src={imagePane}/>
        </div>
        <div className='product-detail-div'>
          <p style={{fontFamily: 'inter', fontWeight: '600', fontSize: '24px'}}>{product.name}</p>
          <p>Ratings {(product.ratings == true) ? product.ratings/5 : 'Not Available'}</p>
          <p style={{color: '#e0960c', fontSize: '18px'}}>${product.price}</p>
          <p>{product.description}</p>
          <div>
            <button type='button' onClick={navigateToMessage}>Message Seller</button>
          </div>
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