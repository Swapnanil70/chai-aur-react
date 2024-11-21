import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status : false,
    userData : null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login : (state, action) => {
            state.status = true;
            state.userData = action.payload.userData;
        },
        logout : (state) => {
            state.status = false;
            state.userData = null;
        }
    }    
})
// We are tracking only login and logout states
// We might create a slice for post also 

export const { login, logout } = authSlice.actions

export default authSlice.reducer