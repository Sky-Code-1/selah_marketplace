import { configureStore } from "@reduxjs/toolkit"
import productsReducer from "../features/products/productsSlice"
import storesReducer from "../features/stores/storesSlice"
import profileReducer from "../features/profiles/profilesSlice"

const store = configureStore({
    reducer: {
        products: productsReducer,
        store: storesReducer,
        profile: profileReducer
    }
})

export default store