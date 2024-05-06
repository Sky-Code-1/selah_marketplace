import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productList: [], 
    selectedProductId: null
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {

    }, 
    extraReducers: (builder) = {
        
    }
})