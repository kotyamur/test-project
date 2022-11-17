import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

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
    setContactFromLocalStorage(state, action) {
      return [...state, ...action.payload];
    },
  },
});

export const { addContact, deleteContact, setContactFromLocalStorage } =
  contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
