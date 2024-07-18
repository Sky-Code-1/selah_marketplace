import { createSlice } from "@reduxjs/toolkit";
import { category } from "../../app/utilities";

const initialProducts = [
    {
        id: 1,
        name: 'Fresh Orange Fruits',
        price: 300,
        ratings: 9.7,
        description: 'Juicy Delicious and Satisfactory',
        image: '',
        category: 'Confectionaries'
    },
    {
        id: 2,
        name: 'Iphone 14 pro max',
        price: 300,
        ratings: 9.7,
        description: 'Swift Elegant and Nice',
        image: '',
        category: 'Phones'
    },
    {
        id: 3,
        Name: 'Orange',
        price: 300,
        ratings: 9.7,
        description: 'Juicy Delicious and Satisfactory',
        image: '',
        category: 'Food'
    },
    {
        id: 4,
        name: 'Orange',
        price: 300,
        ratings: 9.7,
        description: 'Juicy Delicious and Satisfactory',
        image: '',
        category: 'computer'
    }
]
export const productSlice = createSlice({
    name: 'products',
    initialState: initialProducts,
    reducers: {
        addProduct: {
            reducer: (state, action) => {
                state.push(action.payload)
            }
        }
    }
})

export const categoryProduct = category => initialProducts.filter(product => (product.category.contains(category)))
export const { addProduct } =  productSlice.actions
export const nextId = (state) => state.length
export default productSlice.reducer