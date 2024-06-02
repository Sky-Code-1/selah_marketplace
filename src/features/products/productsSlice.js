import { createSlice } from "@reduxjs/toolkit";


const initialProducts = [
    {
        name: 'Fresh Orange Fruits',
        price: 300,
        ratings: 9.7,
        description: 'Juicy Delicious and Satisfactory',
        image: ''
    },
    {
        name: 'Iphone 14 pro max',
        price: 300,
        ratings: 9.7,
        description: 'Swift Elegant and Nice',
        image: ''
    },
    {
        name: 'Orange',
        price: 300,
        ratings: 9.7,
        description: 'Juicy Delicious and Satisfactory',
        image: ''
    },
    {
        name: 'Orange',
        price: 300,
        ratings: 9.7,
        description: 'Juicy Delicious and Satisfactory',
        image: ''
    }
]
export const productSlice = createSlice({
    name: 'products',
    initialState: initialProducts,
    reducers: {

    }
})

export default productSlice.reducer