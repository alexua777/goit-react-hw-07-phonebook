import { createReducer } from "@reduxjs/toolkit";
import phoneActions from "./phoneActions";

const onAddContact = (state, action) => {
  console.log(action);
  const contactCheck = state.some(
    contact => contact.name === action.payload.name
  );
  if (contactCheck) {
    alert("exisits");
  } else {
    return [...state, action.payload]
  }
};

const onRemoveContact = (state, action) =>
  state.filter(contacts => contacts.id !== action.payload);

const contacts = createReducer([], {
  [phoneActions.addContactSuccess]: onAddContact,
  [phoneActions.removePhone]: onRemoveContact
});

const filter = createReducer("", {
  [phoneActions.filterPhone]: (state, action) => action.payload
});

export default { contacts, filter };


