import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Login from './components/Login';
import SignIn from './components/SignIn';
import Home from './components/Home';

import './App.css';

function App() {
  const { token, user } = useSelector((state) => state.auth);

  return (
    <Router>
      <Routes>
        {/* Home page is protected */}
        <Route
          path="/"
          element={token ? <Home token={token} user={user} /> : <Navigate to="/login" />}
        />

        {/* Login page */}
        <Route
          path="/login"
          element={token ? <Navigate to="/" /> : <Login />}
        />

        {/* Sign-in / Register page */}
        <Route
          path="/signin"
          element={token ? <Navigate to="/" /> : <SignIn />}
        />
      </Routes>
    </Router>
  );
}

export default App;
