import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme/theme';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import News from './pages/News';
import Contact from './pages/Contact';
import Leaders from './pages/Leaders';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import AdminLayout from './components/admin/AdminLayout';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          {/* Admin Routes - No Navbar/Footer */}
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/admin-dashboard" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            {/* Add other admin sub-routes here if needed */}
          </Route>
          
          {/* Public Routes - With Navbar/Footer */}
          <Route path="*" element={
            <div style={{ paddingTop: '60px' }}>
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/programs" element={<Programs />} />
                <Route path="/news" element={<News />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/leaders" element={<Leaders />} />
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