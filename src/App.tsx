import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/login-page/LoginPage.tsx';
import SignUp from './components/signup-page/SignUp.tsx';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import ChatRoom from './components/chat-room-UI/ChatRoom.tsx';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <div className={`ui-container ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <Router>
        <Routes>
          <Route path='/login' Component={LoginPage} />
          <Route path='/signup' Component={SignUp} />
          <Route path='/home' Component={ChatRoom} />
        </Routes>
      </Router>

      <button
        onClick={toggleDarkMode}
        className="dark-mode-toggle"
        style={{ position: 'absolute', top: '10px', right: '10px' }}
      >
        <DarkModeIcon />
      </button>
    </div>
  );
}

export default App;
