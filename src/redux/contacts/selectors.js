import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectFilteredName = state => state.filter;

// export const selectFilteredContacts = state => {
//   const contacts = selectContacts(state);
//   const filter = selectFilteredName(state);
//   return contacts.filter(({ name }) =>
//     name.toLowerCase().includes(filter.toLowerCase())
//   );
// };

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilteredName],
  (contacts, filter) => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
