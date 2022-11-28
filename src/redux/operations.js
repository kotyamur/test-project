import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://637baa4f72f3ce38ea92034c.mockapi.io';
const errorMessage = `Sorry, something went wrong. Please reload the page!`;

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAllContacts',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(`${errorMessage}`);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', contact);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(`${errorMessage}`);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (ContactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${ContactId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(`${errorMessage}`);
    }
  }
);
