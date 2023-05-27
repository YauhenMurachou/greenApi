import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Chat from './pages/chat/Chat';
import Login from './pages/login/Login';

import './App.css';

const App = () => {
  const href = useNavigate();
  const location = useLocation();
  const isAuth = localStorage.getItem('isAuth');
  useEffect(() => {
    if (isAuth && location.pathname !== '/login') {
      href('/chat');
    } else {
      href('/login');
    }
  }, []);
  return (
    <Routes>
      <Route path="/chat" element={<Chat />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default App;
