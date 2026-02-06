import React, { useEffect, useState } from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { authAPI } from '../services/api';

const TestPage = () => {
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const testLogin = async () => {
    try {
      console.log('Testing login with correct credentials');
      const response = await authAPI.login({
        email: 'nyanzatss@gmail.com',
        password: 'admin@2026'
      });
      console.log('Login response:', response);
      setResult(response.data);
      setError(null);
    } catch (err) {
      console.error('Login error:', err);
      console.error('Error response:', err.response);
      setError(err.response?.data?.msg || err.message);
      setResult(null);
    }
  };

  return (
    <Container>
      <Box sx={{ py: 4 }}>
        <Typography variant="h2">Test Page</Typography>
        <Typography variant="body1">
          If you can see this page, routing is working correctly.
        </Typography>
        
        <Box sx={{ mt: 4 }}>
          <Button variant="contained" onClick={testLogin}>
            Test Login API Call
          </Button>
        </Box>
        
        {result && (
          <Box sx={{ mt: 2 }}>
            <Typography variant="h6" color="success.main">
              Success! Token received:
            </Typography>
            <Typography variant="body2" sx={{ wordBreak: 'break-all' }}>
              {result.token}
            </Typography>
          </Box>
        )}
        
        {error && (
          <Box sx={{ mt: 2 }}>
            <Typography variant="h6" color="error.main">
              Error:
            </Typography>
            <Typography variant="body2">
              {error}
            </Typography>
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default TestPage;