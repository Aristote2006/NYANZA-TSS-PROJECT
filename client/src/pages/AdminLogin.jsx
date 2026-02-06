import React, { useState } from 'react';
import { Container, Typography, Box, TextField, Button, Alert, Paper, Avatar, IconButton, InputAdornment, FormControl, OutlinedInput, InputLabel } from '@mui/material';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import LockIcon from '@mui/icons-material/Lock';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { authAPI } from '../services/api';

const AdminLogin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loginStatus, setLoginStatus] = useState(null); // null, 'loading', 'success', 'error'
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Show loading state
    setLoginStatus('loading');
    
    console.log('Login attempt with:', { email: formData.email, password: formData.password });
    
    try {
      const response = await authAPI.login({
        email: formData.email,
        password: formData.password
      });
      
      console.log('Login response:', response);

      // Save token to localStorage
      localStorage.setItem('token', response.data.token);
      
      // Update the auth header for future requests
      const api = require('../services/api').default;
      api.defaults.headers.common['x-auth-token'] = response.data.token;
      
      setLoginStatus('success');
      
      // Redirect to dashboard after a brief delay
      setTimeout(() => {
        navigate('/admin-dashboard');
      }, 1000);
    } catch (error) {
      console.error('Login error:', error);
      console.error('Error response:', error.response);
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
                <br />
                <small>
                  If you're sure the credentials are correct, please check the browser console for more details.
                </small>
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

            <FormControl fullWidth variant="outlined" margin="normal" sx={{ mb: 3 }}>
              <InputLabel htmlFor="password">Password</InputLabel>
              <OutlinedInput
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                value={formData.password}
                onChange={handleChange}
                required
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                sx={{
                  borderRadius: 2,
                  fontWeight: 500,
                }}
              />
            </FormControl>

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
                Use your registered credentials to sign in
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