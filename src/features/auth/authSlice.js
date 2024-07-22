import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import supabase from "../../config/supabaseConfig";

const initialState = {
    user: {},
    id: null
}

export const getUserId = createAsyncThunk('auth/getUserId', async () => {
    const { data } = await supabase.auth.getUser()
    if (data) {
        return data.user.id;
    } else {
        console.log('Current User not authenticated!')
      throw new Error("No user is logged in");
    }
  });

  export const getUser = createAsyncThunk('auth/getUser', async () => {
    const { data } = await supabase.auth.getUser()
    if (data) {
        return data.user
    } else {
        console.log('Current User not authenticated!')
      throw new Error("No user is logged in");
    }
  });

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        getId: () => {
            
        }
    }, 
    extraReducers(builder) {
        builder.addCase(getUserId.pending, () => console.log("Retrieving User Id."))
                .addCase(getUserId.fulfilled, (state, action) => {
                    state.id = action.payload
                })
                .addCase(getUserId.rejected, () => console.log("Getting user Id Failed."))
                .addCase(getUser.pending, () => console.log("Retrieving User."))
                .addCase(getUser.fulfilled, (state, action) => {
                    state.user = action.payload
                })
                .addCase(getUser.rejected, () => console.log("Getting user Failed."))
    }
})

export const user = state => state.auth.user
export const userId = state => state.auth.id
export default authSlice.reducer