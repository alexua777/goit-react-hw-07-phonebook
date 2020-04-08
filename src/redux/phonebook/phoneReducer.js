import { createReducer } from "@reduxjs/toolkit";
import phoneActions from "./phoneActions";

const onAddContact = (state, action) => {
   const contactCheck = state.some(
    contact => contact.name === action.payload.name
  );
  if (contactCheck) {
    alert("exisits");
  } else {
    return [...state, action.payload]
  }
};

const removeContact = (state, action) => {
  state.filter(contact => contact.id !== action.payload.id);
 
}
  

const contacts = createReducer([], {
  [phoneActions.fetchContactsSuccess]:(state,action) => action.payload,
  [phoneActions.addContactSuccess]: onAddContact,
  [phoneActions.removeContactSuccess]: removeContact
});

const filter = createReducer("", {
  [phoneActions.filterPhone]: (state, action) => action.payload
});

export default { contacts, filter };


