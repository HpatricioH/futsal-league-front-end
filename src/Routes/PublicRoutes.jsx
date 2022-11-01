import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Register from '../pages/Register/Register';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';

export const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="*" element={<Login />} />
    </Routes>
  );
};
