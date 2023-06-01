import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUserList = createAsyncThunk(
    "user/getUserList",
    async (_, thunkApi) => {
        try {
            const { data } = await axios.get(
                `${process.env.REACT_APP_API_URL}`
            );
            return data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
);

const initialState = {
    data: [],
    error: "",
    isLoading: false,
};

export const settingsSlice = createSlice({
    name: "settings",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getUserList.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getUserList.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload.results;
        });
        builder.addCase(getUserList.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
    },
});

export const {} = settingsSlice.actions;

export default settingsSlice.reducer;
