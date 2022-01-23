import { createSlice } from "@reduxjs/toolkit";

export const AuthSlice = createSlice({
    name: "authentication",
    initialState: {
        user: null,
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
            localStorage.setItem('user', JSON.stringify(state.user));
        },
        deleteUser: (state) => {
            state.user = null;
            localStorage.removeItem('user');
        },

    },
});

export const { setUser, deleteUser } = AuthSlice.actions;

export default AuthSlice.reducer;
