import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, register } from './authOperations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(register.pending, (state, action) => {
        state.isLoggedIn = false;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoggedIn = false;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logOut.fulfilled, (state, action) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      });
    // .addCase(fetchContacts.fulfilled, fetchContactsSuccessReducer)
    // .addCase(addContact.fulfilled, addContactsSuccessReducer)
    // .addCase(deleteContact.fulfilled, deleteContactsSuccessReducer)
    // .addMatcher(action => action.type.endsWith('/pending'), pendingReducer)
    // .addMatcher(action => action.type.endsWith('/rejected'), rejectedReducer)
    // .addMatcher(
    //   action => action.type.endsWith('/fulfilled'),
    //   fulfilledReducer
    // );
  },
});

export const authReducer = authSlice.reducer;
