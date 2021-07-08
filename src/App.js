import './App.css';
import './App.scss';
import React from 'react';

import RouterComponent from './routing/RouterComponent.jsx';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
const App = () => {
  return (
    <Router>
      <Header />
      <RouterComponent />
      <Footer />
    </Router>
  );
};

export default App;
