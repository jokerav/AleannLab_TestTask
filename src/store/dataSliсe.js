import {createSlice} from '@reduxjs/toolkit';
const initialState = {
  user: { name: null, email: null },
  token: 'wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu',

};
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
