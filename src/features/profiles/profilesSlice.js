import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import supabase from "../../config/supabaseConfig";


const initialState = {
    profile: {
        firstname: 'Anonymous Firstname',
        lastname: 'Anonymous Lastname',
        email: 'Anonymous@gmail.com',
        address: '8, Belignham Avenue'
    }
}

export const createProfile = createAsyncThunk('profile/createProfile', async (profileDetails) => {
    const { data, error } = await supabase.from('profile')
        .insert(profileDetails)
    console.log(data)
    if(error) {
        console.log(error)
    }
    return data
})

export const fetchProfile = createAsyncThunk('profile/fetchProfile', async () => {

    const { count, error : countError } = await supabase
        .from('profiles')
        .select('*', { count: 'exact', head: true });
        console.log(count)
    if(count > 0) {
        const { data, error } = await supabase.from('profile')
            .select()
        console.log(data)
        if(error) {
            console.log(error)
        }
        return data
    } else{
        return initialState.profile
    }
    
})
export const profilesSlice = createSlice({
    name: 'profiles',
    initialState,
    reducers: {

    },
    extraReducers(builder) {
        builder.addCase(createProfile.pending, () => {
            console.log('Creating a new Profile')
        })
        .addCase(createProfile.fulfilled, () => {
            console.log('Profile created successfully')
        })
        .addCase(createProfile.rejected, () => {
            console.log('Profile creation failed')
        })
        .addCase(fetchProfile.pending, () => {
            console.log('Fetching Profile Of User')
        })
        .addCase(fetchProfile.fulfilled, (state, action) => {
            state.profile = action.payload
            console.log('Fetch Profile Succeeded')
        })
        .addCase(fetchProfile.rejected, () => {
            console.log('Fetch Profile failed')
        })
    }
})

export const profile = state => state.profiles.profile
export default profilesSlice.reducer