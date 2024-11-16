import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './slice/cartSlice';
import authReducer from './slice/AuthSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
        auth: authReducer,
        cartDetails: cartReducer // Use cartSlice.reducer
    },
  })
}
