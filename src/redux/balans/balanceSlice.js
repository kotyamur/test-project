import { createSlice } from '@reduxjs/toolkit';
import {  getBalance, updateBalance  } from './balanceOperations';

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



const balanceSlice = createSlice({
  name: 'user',
  initialState: {
    balance: null,
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
        .addCase(getBalance.fulfilled, (state, action) => {
          console.log(action.payload);
        state.balance = action.payload;
      })
        .addCase(updateBalance.fulfilled, (state, action) => {
          console.log(action.payload);
        state.balance = action.payload;
      })
      .addMatcher(action => action.type.endsWith('/pending'), pendingReducer)
      .addMatcher(action => action.type.endsWith('/rejected'), rejectedReducer)
      .addMatcher(
        action => action.type.endsWith('/fulfilled'),
        fulfilledReducer
      );
  },
});

export const userBalanceReducer = balanceSlice.reducer;
