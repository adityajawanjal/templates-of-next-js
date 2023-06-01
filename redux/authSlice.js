import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState:{
    token:''
  },
  reducers: {
    registerToken: (state , action) => {
      state.token = action.payload;
    },
   
  },
})

export const { registerToken } = authSlice.actions

export default authSlice.reducer