import { createSlice } from '@reduxjs/toolkit'

export const addSlice = createSlice({
  name: 'counter',
  initialState:{
    toggle : false,
    name:"",
    email:"",
    gender:"",
    selected:""
  },
  reducers: {
    toggleBtn: (state) => {
       return {
        toggle: true ? false : true
       }
    },
    setName:(state , action)=>{
      return{
        name:action.payload
      }
    },
    setEmail:(state , action)=>{
      return{
        email:action.payload
      }
    },
    setGender:(state , action)=>{
      return{
        gender:action.payload
      }
    },
    setSelected:(state , action)=>{
      return{
        selected:action.payload 
      }
    },
  },
})

export const { toggleBtn , setName , setEmail , setGender , setSelected } = addSlice.actions

export default addSlice.reducer