import {createSlice} from '@reduxjs/toolkit';
const dataSlice = createSlice({
  name:"data",
  initialState:{
    data:[]
  }
  reducers:{
    getData(state, action){
      return state;
    }
  }
})
