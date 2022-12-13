export const checkContactsName = (contacts, newContactname) => {
  const normalizedName = newContactname.toLowerCase();
  return contacts.some(({ name }) => normalizedName === name.toLowerCase());
};
