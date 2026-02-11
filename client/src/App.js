import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme/theme';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
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
import AddProgram from './pages/AddProgram';
import AddLeader from './pages/AddLeader';
import AddNews from './pages/AddNews';
import TestPage from './pages/TestPage';

// Test environment variables
import './testEnv';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          {/* Admin Routes - No Navbar/Footer */}
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/admin-programs" element={<div>Programs Management Page</div>} />
          <Route path="/admin-programs/add" element={<AddProgram />} />
          <Route path="/admin-news" element={<div>News Management Page</div>} />
          <Route path="/admin-news/add" element={<AddNews />} />
          <Route path="/admin-leaders" element={<div>Leaders Management Page</div>} />
          <Route path="/admin-leaders/add" element={<AddLeader />} />
          <Route path="/admin-messages" element={<div>Messages Management Page</div>} />
          <Route path="/admin-messages/responded" element={<div>Responded Messages Page</div>} />
          <Route path="/admin-profile" element={<div>Profile Page</div>} />
          <Route path="/admin-analytics" element={<div>Analytics Page</div>} />
          <Route path="/admin-backup" element={<div>Backup Page</div>} />
          <Route path="/test" element={<TestPage />} />
          
          {/* Public Routes - With Navbar/Footer */}
          <Route path="*" element={
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