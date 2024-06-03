import { createSlice } from "@reduxjs/toolkit";


const initialProducts = [
    {
        id: 1,
        name: 'Fresh Orange Fruits',
        price: 300,
        ratings: 9.7,
        description: 'Juicy Delicious and Satisfactory',
        image: ''
    },
    {
        id: 2,
        name: 'Iphone 14 pro max',
        price: 300,
        ratings: 9.7,
        description: 'Swift Elegant and Nice',
        image: ''
    },
    {
        id: 3,
        Name: 'Orange',
        price: 300,
        ratings: 9.7,
        description: 'Juicy Delicious and Satisfactory',
        image: ''
    },
    {
        id: 4,
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