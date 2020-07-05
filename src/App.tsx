import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './styles/bootstrap-override.scss';

import GlobalStyle from './styles/global';
import Welcome from './pages/Welcome';
import AppProvider from './hooks';

const App: React.FC = () => {
  return (
    <Router>
      <AppProvider>
        <Welcome />
      </AppProvider>
      <GlobalStyle />
    </Router>
  );
};

export default App;
