import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import supabase from "../../config/supabaseConfig";

const initialState = {
    products: [],
    status: '',
    error: null
}

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const { data, error } = await supabase.from('products')
        .select()
    console.log(data)
    return [...data]
})

export const addProduct = createAsyncThunk('products/addProduct', async (product) => {
    const { data, error } = await supabase.from('products')
        .insert(product)
        .select()
        .single()
    return data
})
export const productsSlice = createSlice({
    name: 'products',
    initialState: initialState,
    reducers: {
        addProducts: (state, action) => {
            state.products.push(action.payload)
        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchProducts.pending, (state, action) => {
                console.log('Fetching Products From The Database Pending')
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.products = action.payload
            })
            .addCase(fetchProducts.rejected, () => console.log('Oops Fetching Products From The Database Failed An Error Occurred!'))
            .addCase(addProduct.pending, () => console.log('Adding A new Product to the db'))
            .addCase(addProduct.fulfilled, () => console.log('Product Added Successfully to the db'))
            .addCase(addProduct.rejected, () => console.log('An Error Occurred'))
    }
})

export const allProducts = state => state.products.products
export const { addProducts } = productsSlice.actions
export const categoryProduct = (category) => allProducts.filter(product => (product.category.contains(category)))
export const nextId = (state) => state.length
export default productsSlice.reducer