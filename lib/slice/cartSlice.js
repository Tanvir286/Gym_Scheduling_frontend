import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 10,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
     cartTotal: (state, action) => {
       console.log(state.value, "state");
       console.log(action.payload, "payload");
     }
  },
})

// Action creators are generated for each case reducer function
export const { cartTotal } = cartSlice.actions

// Export the reducer (not the entire slice)
export default cartSlice.reducer
