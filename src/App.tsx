import './App.css';
import React from 'react';
import LoginPage from './components/login-page/LoginPage.tsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './components/signup-page/SignUp.tsx';

const App = () => {
  return (
    <div className="ui-container">
      <Router>
        <Routes>
          <Route path='/login' Component={LoginPage} />
          <Route path='/signup' Component={SignUp} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
