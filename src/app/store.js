import { configureStore } from "@reduxjs/toolkit"
import productsReducer from "../features/products/productsSlice"
import storesReducer from "../features/stores/storesSlice"
import profileReducer from "../features/profiles/profilesSlice"
import authReducer from "../features/auth/authSlice"


const store = configureStore({
    reducer: {
        products: productsReducer,
        store: storesReducer,
        profiles: profileReducer,
        auth: authReducer
    }
})

export default store