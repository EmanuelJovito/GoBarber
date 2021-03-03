import React from 'react';
// import SignIn from './pages/SignIn';
import SignIn from './pages/SignIn';
import GlobalStyle from './styles/global';

import { AuthProvider } from './hooks/AuthContext';

const App: React.FC = () => {
  return (
    <>
      <AuthProvider>
        <SignIn />
      </AuthProvider>

      <GlobalStyle />
    </>
  );
};

export default App;
