import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addProduct, fetchProducts, deleteProduct } from "../../api/productApi";
import { useSelector } from "react-redux";

const initialState = {
    productList: [{
            name: 'Beef', 
            price: 25,
            date: new Date().toISOString()
        },
        {
            name: 'Cornflakes',
            price: 30,
            date: new Date().toISOString()
        }
    ],
    status: 'idle',
    selectedProductId: null
}

export const getAllProducts = createAsyncThunk('post/getAllProducts', () => {
    const response = fetchProducts()
    return response
})
export const createNewProduct = createAsyncThunk('post/createNewProduct', (newPost, config) => {
    console.log(`Stringified Response from the create new Product function ${JSON.stringify(config.header)}`)
    addProduct(newPost, config)
})
export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        // addNewProduct: (state, action) => state.productList.push(action.payload),
        // deleteProduct: (state, action) => state.productList = state.productList.filter(product => product.id !== action.payload)
    }, 
    extraReducers(builder) {
        builder.addCase(getAllProducts.pending, (state, action) => {
            state.status = 'pending'
        })
        .addCase(getAllProducts.fulfilled, (state,action) => {
            state.productList = action.payload._embedded.products
            state.status = 'success'
        })
        .addCase(getAllProducts.rejected, (state, action) => {
            state.status = 'error'
        })
        .addCase(createNewProduct.pending, (state, action) => {
            state.status = 'pending'
        })
        .addCase(createNewProduct.fulfilled, (state, action) => {
            state.productList.push(action.payload)
            state.status = 'success'
        })
        .addCase(createNewProduct.rejected, (state, action) => {
            state.status = 'error'
        })
    }
})



export const {  } = productSlice.actions
export const allProducts = (state) => state.product.productList
export default productSlice.reducer

