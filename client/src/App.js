import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme/theme';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import AdminLayout from './components/admin/AdminLayout';
import Home from './pages/Home';
import About from './pages/About';
import Leaders from './pages/Leaders';
import Programs from './pages/Programs';
import News from './pages/News';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import CoCurricular from './pages/CoCurricular';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import AdminNews from './pages/AdminNews';
import AdminLeaders from './pages/AdminLeaders';
import AdminPrograms from './pages/AdminPrograms';
import AddProgram from './pages/AddProgram';
import AddLeader from './pages/AddLeader';
import AddNews from './pages/AddNews';
import EditNews from './pages/EditNews';
import EditLeader from './pages/EditLeader';
import EditProgram from './pages/EditProgram';
import TestPage from './pages/TestPage';
import AdminAnalytics from './pages/AdminAnalytics';
import AdminProfile from './pages/AdminProfile';
import AdminBackup from './pages/AdminBackup';

// Test environment variables
import './testEnv';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          {/* Admin Routes - With Admin Layout */}
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route element={<AdminLayout />}>
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
            <Route path="/admin-programs" element={<AdminPrograms />} />
            <Route path="/admin-programs/add" element={<AddProgram />} />
            <Route path="/admin-programs/edit/:id" element={<EditProgram />} />
            <Route path="/admin-news" element={<AdminNews />} />
            <Route path="/admin-news/add" element={<AddNews />} />
            <Route path="/admin-news/edit/:id" element={<EditNews />} />
            <Route path="/admin-leaders" element={<AdminLeaders />} />
            <Route path="/admin-leaders/add" element={<AddLeader />} />
            <Route path="/admin-leaders/edit/:id" element={<EditLeader />} />
            <Route path="/admin-messages" element={<div>Messages Management Page</div>} />
            <Route path="/admin-messages/responded" element={<div>Responded Messages Page</div>} />
            <Route path="/admin-profile" element={<AdminProfile />} />
            <Route path="/admin-analytics" element={<AdminAnalytics />} />
            <Route path="/admin-backup" element={<AdminBackup />} />
          </Route>
          <Route path="/test" element={<TestPage />} />
          
          {/* Public Routes - With Navbar/Footer */}
          <Route path="/*" element={
            <div style={{ paddingTop: '60px' }}>
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/leaders" element={<Leaders />} />
                <Route path="/programs" element={<Programs />} />
                <Route path="/co-curricular" element={<CoCurricular />} />
                <Route path="/news" element={<News />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
              <Footer />
            </div>
          } />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
