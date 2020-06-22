import React from 'react';

import GlobalStyle from './styles/global';
import Welcome from './pages/Welcome';

const App: React.FC = () => {
  return (
    <>
      <Welcome />
      <GlobalStyle />
    </>
  );
};

export default App;
