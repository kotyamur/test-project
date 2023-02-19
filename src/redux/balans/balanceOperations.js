// import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
const errorMessage = `Sorry, something went wrong. Please reload the page!`;

export const getBalance = createAsyncThunk(
  'user/getBalance',
  async (_, thunkAPI) => {
    try {
      // const response = await axios.get('/contacts');
      // return response.data;
      return null;
    } catch (e) {
      return thunkAPI.rejectWithValue(`${errorMessage}`);
    }
  }
);

export const updateBalance = createAsyncThunk(
  'user/updateBalance',
  async (balance, thunkAPI) => {
    try {
      // const response = await axios.post('/balance', balance);
      // return response.data;
      console.log( balance );
      return balance;
    } catch (e) {
      return thunkAPI.rejectWithValue(`${errorMessage}`);
    }
  }
);
