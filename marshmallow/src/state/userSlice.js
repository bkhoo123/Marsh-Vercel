import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: null,
    email: null,
    icon: null,
    new: null,
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        getUserInfo: (state, action) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.icon = action.payload.profileIcon
        },
        logout: (state) => {
            state.email = null;
            state.name = null;
            state.icon = null;
        },
        changeProfileIcon: (state, action) => {
            state.icon = action.payload
        }
    }
})

export const {
    getUserInfo,
    logout,
    changeProfileIcon
} = userSlice.actions;

export default userSlice.reducer