import phoneActions from "./phoneActions";
import axios from "axios";

const addContact = (name, number) => (dispatch) => {
  dispatch(phoneActions.addContactRequest());

  axios
    .post("http://localhost:2000/contacts", { name, number })
    .then((response) => {
      console.log(response);
      dispatch(phoneActions.addContactSuccess());
    })
    .catch((error) => dispatch(phoneActions.addContactError(error)));
};

export default { addContact };
