import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../../app/api/api';

export let admin_login = createAsyncThunk(
    'user/login',
    async (adminInfo, { rejectWithValue }) => {
        try {
            const { data } = await api.post("/user/login", adminInfo);
            console.log(data);
            
            return data; // This will be handled by the extraReducers
        } catch (error) {
            console.error(error);
            return rejectWithValue(error.response?.data || 'Login failed');
        }
    }
);

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        loading: false,
        error: null,
    },
    reducers: {
        logout(state) {
            state.user = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(admin_login.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(admin_login.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
            })
            .addCase(admin_login.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
