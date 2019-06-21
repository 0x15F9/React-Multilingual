import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import messages_en from "./Assets/Language/en.json";
import messages_fr from "./Assets/Language/fr.json";

import './App.css';
import Layout from './Container/Layout/Layout';

const messages = {
    'en': messages_en,
    'fr': messages_fr
};

class App extends Component {
  state = {
    lang: 'en'
  }

  changeLanguage = (l) => {
    this.setState({...this.state, lang: l});
  }

  render() {
    return (
      <IntlProvider locale='en' messages={messages[this.state.lang]}>
        <BrowserRouter className="App">
          <Layout changeLanguage={(l) => this.changeLanguage(l)} />
        </BrowserRouter>
      </IntlProvider>
    );
  }
}

export default App;
