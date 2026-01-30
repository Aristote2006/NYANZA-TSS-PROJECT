import React, { useState } from 'react';
import { Container, Typography, Box, TextField, Button, Alert, Paper, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import LockIcon from '@mui/icons-material/Lock';

const AdminLogin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [loginStatus, setLoginStatus] = useState(null); // null, 'loading', 'success', 'error'

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Show loading state
    setLoginStatus('loading');
    
    // Simulate API call to backend
    try {
      // In a real application, you would send the login credentials to your backend API
      // For now, we'll simulate a successful login for demo purposes
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Simulate successful login (in a real app, you'd check credentials against the database)
      if (formData.email === 'admin@nyanzatss.edu.ke' && formData.password === 'admin123') {
        setLoginStatus('success');
        
        // Redirect to dashboard after a delay (in a real app, you'd save the token and redirect)
        setTimeout(() => {
          window.location.href = '/admin-dashboard';
        }, 1500);
      } else {
        setLoginStatus('error');
        
        // Reset status after 5 seconds
        setTimeout(() => {
          setLoginStatus(null);
        }, 5000);
      }
    } catch (error) {
      setLoginStatus('error');
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setLoginStatus(null);
      }, 5000);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ py: 8, minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Paper 
          elevation={24} 
          sx={{ 
            p: 4, 
            borderRadius: 4,
            background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(250,250,250,0.9) 100%)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.2)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
          }}
        >
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            >
              <Avatar 
                sx={{ 
                  width: 80, 
                  height: 80, 
                  backgroundColor: 'primary.main', 
                  mx: 'auto', 
                  mb: 2,
                  boxShadow: '0 8px 20px rgba(44, 62, 80, 0.3)'
                }}
              >
                <LockIcon sx={{ fontSize: 40 }} />
              </Avatar>
            </motion.div>
            <Typography
              variant="h4"
              component="h1"
              sx={{
                fontSize: '2rem',
                fontWeight: 700,
                mb: 2,
                background: 'linear-gradient(45deg, #2c3e50, #34495e)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Admin Portal
            </Typography>
            <Typography variant="h6" color="text.secondary">
              Secure access to administration panel
            </Typography>
          </Box>

          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            {loginStatus === 'error' && (
              <Alert severity="error" sx={{ mb: 3, borderRadius: 2 }}>
                Invalid credentials. Please check your email and password.
              </Alert>
            )}
            
            {loginStatus === 'success' && (
              <Alert severity="success" sx={{ mb: 3, borderRadius: 2 }}>
                Login successful! Redirecting to dashboard...
              </Alert>
            )}

            <TextField
              fullWidth
              label="Email Address"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              variant="outlined"
              margin="normal"
              InputProps={{
                sx: {
                  borderRadius: 2,
                }
              }}
              InputLabelProps={{
                sx: {
                  fontWeight: 500,
                }
              }}
              sx={{ mb: 2 }}
            />

            <TextField
              fullWidth
              label="Password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              required
              variant="outlined"
              margin="normal"
              InputProps={{
                sx: {
                  borderRadius: 2,
                }
              }}
              InputLabelProps={{
                sx: {
                  fontWeight: 500,
                }
              }}
              sx={{ mb: 3 }}
            />

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                type="submit"
                variant="contained"
                fullWidth
                disabled={loginStatus === 'loading'}
                sx={{
                  background: 'linear-gradient(45deg, #2c3e50, #34495e)',
                  color: 'white',
                  py: 1.5,
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  borderRadius: 3,
                  boxShadow: '0 4px 15px rgba(44, 62, 80, 0.4)',
                  '&:hover': {
                    background: 'linear-gradient(45deg, #1a252f, #2c3e50)',
                    boxShadow: '0 6px 20px rgba(44, 62, 80, 0.6)',
                  },
                  '&:disabled': {
                    background: 'linear-gradient(45deg, #bdc3c7, #95a5a6)',
                  }
                }}
              >
                {loginStatus === 'loading' ? 'Authenticating...' : 'Sign In'}
              </Button>
            </motion.div>

            <Box sx={{ mt: 2, textAlign: 'center' }}>
              <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic' }}>
                Demo credentials: admin@nyanzatss.edu.ke / admin123
              </Typography>
            </Box>
          </Box>

          <Box sx={{ mt: 3, textAlign: 'center' }}>
            <Typography variant="body2" color="text.secondary">
              Back to{' '}
              <Link to="/" style={{ textDecoration: 'none', color: 'primary.main', fontWeight: 600 }}>
                Home
              </Link>
            </Typography>
          </Box>
        </Paper>
      </motion.div>
    </Container>
  );
};

export default AdminLogin;