const STORAGE_FORM_DATA = 'contacts';

export const getDataFromLocalStorage = () => {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_FORM_DATA)) ?? [];
  } catch (error) {
    return [];
  }
};

export const setDataToLocalStorage = contacts => {
  localStorage.setItem(STORAGE_FORM_DATA, JSON.stringify(contacts));
};

export const checkContactsName = (contacts, newContactname) => {
  const normalizedName = newContactname.toLowerCase();
  return contacts.some(({ name }) => normalizedName === name.toLowerCase());
};
