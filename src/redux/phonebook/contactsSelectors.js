import { createSelector } from "@reduxjs/toolkit";

const getContacts = (state) => state.contacts;
const getFilter = (state) => state.filter;

const getVisibleContacts = createSelector([getContacts, getFilter], (contacts, filter) => {
  return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
});

// const getVisibleContacts = (state) => {
//   const contacts = getContacts(state);
//   const filter = getFilter(state).toLocaleLowerCase();

//   return contacts.filter((contact) =>
//     contact.name.toLowerCase().includes(filter)
//   );
// };

export default { getFilter, getVisibleContacts };
