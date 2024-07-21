import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import supabase from "../../config/supabaseConfig";

const initialState = {
    user: {},
    id: null
}

export const getUserId = createAsyncThunk('auth/getUserId', async () => {
    const { data } = await supabase.auth.getUser()
    if (data) {
        console.log(data.user)
        return data.user.id;
    } else {
        console.log('Current User not authenticated!')
      throw new Error("No user is logged in");
    }
  });

  export const getUser = createAsyncThunk('auth/getUser', async () => {
    const { data } = await supabase.auth.getUser()
    if (data) {
        console.log(data.user)
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
                    console.log("Retrieved user Id successfully.")
                })
                .addCase(getUserId.rejected, () => console.log("Getting user Id Failed."))
                .addCase(getUser.pending, () => console.log("Retrieving User."))
                .addCase(getUser.fulfilled, (state, action) => {
                    state.user = action.payload
                    console.log("Retrieved user successfully.")
                })
                .addCase(getUser.rejected, () => console.log("Getting user Failed."))
    }
})

export const userId = state => state.auth.user.id
export default authSlice.reducer