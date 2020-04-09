import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import phoneActions from "../redux/phonebook/phoneActions";
import contactsSelectors from "../redux/phonebook/contactsSelectors";

const container = {
  margin: "25px",
  border: "2px solid grey",
  padding: "10px",
  boxShadow: "3px 2px 28px 6px rgba(0,0,0,0.75)",
  width: "350px"
};

const inputStyle = {
  border: "1px solid black",
  display: "inline-block",
  height: "34px",
  width: "220px",
  boxSizing: "border-box",
  padding: "0 18px",
  marginBottom: "10px"
};

const Filter = ({ value, filterChange }) => {
  return (
    <div style={container}>
      <h2>Contacts </h2>
      <input
        type="text"
        value={value}
        onChange={e => filterChange(e.target.value)}
        style={inputStyle}
      />
    </div>
  );
};

Filter.propTypes = {
  filterChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  value: contactsSelectors.getFilter(state),
});

const mapDispatchToProps = {
  filterChange: phoneActions.filterPhone
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
