import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  const getIsLoginFromHash = () =>
    typeof window !== 'undefined' && window.location.hash === '#login';

  const [isLoginPage, setIsLoginPage] = useState(getIsLoginFromHash);

  useEffect(() => {
    const handleHashChange = () => {
      setIsLoginPage(getIsLoginFromHash());
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="app">
      <Navbar />
      {isLoginPage ? <Login /> : <Home />}
    </div>
  );
}

export default App;
