import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "",
    isAuthenticated: false
};

export const settingsSlice = createSlice({
    name: "settings",
    initialState,
    reducers: {
        setUserAuth : (s, a) => {
            s.isAuthenticated = true
            s.name = a.payload
        },
        setLogout : (s) => {
            s.isAuthenticated = false
            s.name = ""
        },
    },
});

export const { setUserAuth, setLogout } = settingsSlice.actions;

export default settingsSlice.reducer;
