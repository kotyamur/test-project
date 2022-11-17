import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

const initialContactsState = [];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialContactsState,
  reducers: {
    addContact: {
      reducer(state, action) {
        return [...state, action.payload];
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteContact(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
    // setContactFromLocalStorage(state, action) {
    //   return [...state, ...action.payload];
    // },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

// const persistConfig = {
//   key: 'root',
//   storage,
// };
// export const contactsReducer = persistReducer(
//   persistConfig,
//   contactsSlice.reducer
// );
