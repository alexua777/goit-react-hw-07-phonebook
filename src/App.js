import React, { Component } from "react";
import { connect } from "react-redux";
import PhoneBook from "./components/PhoneBook";
import ContactList from "./components/ContactList";

import Layout from "./components/Layout";
import ThemeContext from "./context/ThemeContext";
import { themeConfig } from "./context/ThemeContext";
import contactOperations from "./redux/phonebook/contactOperations";
import contactsSelectors from "./redux/phonebook/contactOperations";

class App extends Component {
  state = {
    theme: "light",
  };

  componentDidMount() {
    this.props.onFetchContacts();
    
  }

  changeTheme = () => {
    this.setState((state) => ({
      theme: state.theme === "light" ? "dark" : "light",
    }));
  };

  render() {
    return (
      <ThemeContext.Provider
        value={{
          theme: this.state.theme,
          config: themeConfig[this.state.theme],
          onThemeChange: this.changeTheme,
        }}
      >
        <Layout>
          <PhoneBook />

          <ContactList />
        </Layout>
      </ThemeContext.Provider>
    );
  }
}

const mapDispatchToProps = {
  onFetchContacts: contactOperations.fetchContacts,
};

export default connect(null, mapDispatchToProps)(App);
