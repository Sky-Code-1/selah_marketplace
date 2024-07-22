import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import ImagePane from '../components/ImagePane'
import ProductItem from '../components/ProductItem'
import Tag from '../components/Tag'
import { useSelector, useDispatch } from 'react-redux'
import { category, services } from '../app/utilities'
import { allProducts, fetchProducts } from '../features/products/productsSlice'
import StoreItem from '../components/StoreItem'
import { getUser, getUserId } from '../features/auth/authSlice'


const Home = () => {
  const dispatch = useDispatch()
  const stores = useSelector(state => state.store);
  const products = useSelector(allProducts);
  useEffect(() => {
    dispatch(getUser())
    dispatch(getUserId())
    dispatch(fetchProducts())
  }, [])
  
  return (
    <>
        <div className='home-div-1'>
            <Navbar />
            <ImagePane />
        </div>
        <div className='product-list'>
            <Tag status="Today's Pick" category="Trending Sales" />
            <div className='trending-product-list'>
                {products.map(product => (
                    <ProductItem product={product} key={product.id}/>
                ))}
            </div>
            <div className='category-btn-container'>
                <button className='sell-btn'>View All Product</button>
            </div>
        </div>
        <div className='product-list'>
            <Tag status="Categories" category="Browse By Category" />
            <div className='trending-product-list category-buttons-container'>
                {category.map((c, index) => <button key={index} className='category-button'><>{c.element}<p>{c.name}</p></></button>)}
            </div>
        </div>
        <div className='product-list'>
            <Tag status="Need Support" category="Browse Available Services" />
            <div className='trending-product-list category-buttons-container'>
                {services.map((service, index) => <button key={index} className='category-button'><>{service.element}<p>{service.name}</p></></button>)}
            </div>
        </div>
        <div className='product-list'>
            <Tag status="Top Stores For the Month" category="Explore products from verified stores" />
            <div className='trending-product-list'>
                {stores.map((store, index) => (
                    <StoreItem key={index} store={store}/>
                ))}
            </div>
            <div className='category-btn-container'>
                <button className='sell-btn'>See All Store</button>
            </div>
        </div>
    </>
  )
}

export default Home