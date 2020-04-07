import { createAction } from "@reduxjs/toolkit";
import { uuid } from "uuidv4";

const addContactRequest = createAction("contacts/request");
const addContactSuccess = createAction("contacts/success");
const addContactError = createAction("contacts/error");

const addPhone = createAction("contact/add", function prepare(name, number) {
  return {
    payload: {
      id: uuid(),
      name,
      number,
    },
  };
});

const removePhone = createAction("contact/remove");

const filterPhone = createAction("contact/filter");

export default {
  addContactRequest,
  addContactSuccess,
  addContactError,
  addPhone,
  removePhone,
  filterPhone,
};
