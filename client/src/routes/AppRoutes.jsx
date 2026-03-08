import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Leaders from '../pages/Leaders';
import Programs from '../pages/Programs';
import News from '../pages/News';
import Contact from '../pages/Contact';
import CoCurricular from '../pages/CoCurricular';
import AdminLogin from '../pages/AdminLogin';
import AdminDashboard from '../pages/AdminDashboard';
import AdminAnalytics from '../pages/AdminAnalytics';
import AdminProfile from '../pages/AdminProfile';
import AdminBackup from '../pages/AdminBackup';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/leaders" element={<Leaders />} />
      <Route path="/programs" element={<Programs />} />
      <Route path="/co-curricular" element={<CoCurricular />} />
      <Route path="/news" element={<News />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/admin-login" element={<AdminLogin />} />
      <Route path="/admin-dashboard" element={<AdminDashboard />} />
      <Route path="/admin-analytics" element={<AdminAnalytics />} />
      <Route path="/admin-profile" element={<AdminProfile />} />
      <Route path="/admin-backup" element={<AdminBackup />} />
    </Routes>
  );
};

export default AppRoutes;