import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { allProducts, getAllProducts } from '../features/product/productSlice'

const Home = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllProducts())
  }, [])
  const products = useSelector(allProducts)
  console.log(products)
  return (
    <div>
        <p>Home Page</p>
    </div>
  )
}

export default Home
