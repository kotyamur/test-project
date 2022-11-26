import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const fetchContactsSuccessReducer = (state, action) => {
  state.items = action.payload;
};

const addContactsSuccessReducer = (state, action) => {
  state.items.push(action.payload);
};

const deleteContactsSuccessReducer = (state, action) => {
  const index = state.items.findIndex(task => task.id === action.payload.id);
  state.items.splice(index, 1);
};

const pendingReducer = state => {
  state.isLoading = true;
};

const rejectedReducer = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const fulfilledReducer = state => {
  state.isLoading = false;
  state.error = null;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, fetchContactsSuccessReducer)
      .addCase(addContact.fulfilled, addContactsSuccessReducer)
      .addCase(deleteContact.fulfilled, deleteContactsSuccessReducer)
      .addMatcher(action => action.type.endsWith('/pending'), pendingReducer)
      .addMatcher(action => action.type.endsWith('/rejected'), rejectedReducer)
      .addMatcher(
        action => action.type.endsWith('/fulfilled'),
        fulfilledReducer
      );
  },
});

export const contactsReducer = contactsSlice.reducer;
