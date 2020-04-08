import phoneActions from "./phoneActions";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:2001";

const addContact = (name, number) => (dispatch) => {
  dispatch(phoneActions.addContactRequest());

  axios
    .post("/contacts", { name, number })
    .then(({ data }) => dispatch(phoneActions.addContactSuccess(data)))
    .catch((error) => dispatch(phoneActions.addContactError(error)));
};

const removeContact = id => dispatch => {
    dispatch(phoneActions.removeContactRequest());
  
    axios
      .delete(`/contacts/${id}`)
      .then(() => dispatch(phoneActions.removeContactSuccess(id)))
      .catch(error => dispatch(phoneActions.removeContactError(error)));
  };



const fetchContacts = () => (dispatch) => {
  dispatch(phoneActions.fetchContactsRequest());

  axios
    .get("/contacts")
    .then(({ data }) => {
      console.log(data);
      dispatch(phoneActions.fetchContactsSuccess(data));
    })
    .catch((error) => dispatch(phoneActions.fetchContactsError(error)));
};

export default { addContact, removeContact, fetchContacts };
