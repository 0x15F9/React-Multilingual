import React from 'react';
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

function App() {
  return (
    <IntlProvider locale='en' messages={messages['fr']}>
      <BrowserRouter className="App">
        <Layout />
      </BrowserRouter>
    </IntlProvider>

  );
}

export default App;
