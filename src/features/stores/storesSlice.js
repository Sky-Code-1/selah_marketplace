import { createSlice } from "@reduxjs/toolkit";

const initialStores = [
    {
        name: 'I.O Fashion Homes',
        ratings: 6.7,
        products: 50,
        verified: true,
        desc: '',
        categories: [
            'Men Fashion',
            'Women Fashion',
            'Shows'
        ], 
        sales: 0,
        banner: ''
    },
    {
        name: 'I.O Fashion Homes',
        ratings: 6.7,
        products: 50,
        desc: '',
        categories: [
            'Men Fashion',
            'Women Fashion',
            'Shows'
        ], 
        sales: 0,
        banner: ''
    },
    {
        name: 'I.O Fashion Homes',
        ratings: 6.7,
        verified: true,
        products: 50,
        desc: '',
        categories: [
            'Men Fashion',
            'Women Fashion',
            'Shows'
        ], 
        sales: 0,
        banner: ''
    },
    {
        name: 'I.O Fashion Homes',
        ratings: 6.7,
        products: 50,
        desc: '',
        categories: [
            'Men Fashion',
            'Women Fashion',
            'Shows'
        ], 
        sales: 0,
        banner: ''
    },
    {
        name: 'I.O Fashion Homes',
        ratings: 6.7,
        products: 50,
        desc: '',
        categories: [
            'Men Fashion',
            'Women Fashion',
            'Shows'
        ], 
        sales: 0,
        banner: ''
    }
]
export const storesSlice = createSlice({
    name: 'store',
    initialState: initialStores,
    reducers: {

    }
})


export default storesSlice.reducer