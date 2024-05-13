import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { allProducts, getAllProducts } from '../features/product/productSlice'
import { IMAGE_URL } from '../api/firebaseApi'
   
const Home = () => {
  const imageUrl = `${IMAGE_URL}Peanuts?alt=media&token=35afd1a8-3393-4c20-9580-89aec53c3c90`
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllProducts())
  }, [])
  const products = useSelector(allProducts)
  console.log(products)
  return (
    <div>
        <p>Home Page</p>  
        <img src={imageUrl} />
    </div>
  )
}

export default Home