import { configureStore } from "@reduxjs/toolkit"
import productsReducer from "../features/products/productsSlice"
import storesReducer from "../features/stores/storesSlice"

const store = configureStore({
    reducer: {
        products: productsReducer,
        store: storesReducer
    }
})

export default store