import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import Layout from './Container/Layout/Layout';

function App() {
  return (
    <BrowserRouter className="App">
      <Layout />
    </BrowserRouter>
  );
}

export default App;
