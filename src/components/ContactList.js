import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import phoneActions from "../redux/phonebook/phoneActions";

const container = {
  margin: "25px",
  boxShadow: "3px 2px 28px 6px rgba(0,0,0,0.75)",
  width: "370px"
};

const itemStyle = {
   listStyle: "none",
   padding:"5px",

};

const ContactList = ({ contacts, onRemoveContact }) => (
  <>
    <div style={container}>
      <ul >
        {contacts.map(contact => (
          <li key={contact.id} style={itemStyle} >
            <p>
              {contact.name} : {contact.number}
            </p>
            <button type="submit" onClick={() => onRemoveContact(contact.id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  </>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired
    })
  ).isRequired,
  onRemoveContact: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  const { contacts, filter } = state;
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLocaleLowerCase())
  );

  return {
    contacts: visibleContacts
  };
};

const mapDispatchToProps = {
  onRemoveContact: phoneActions.removePhone
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);


