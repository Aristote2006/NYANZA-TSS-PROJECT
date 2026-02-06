import React, { useEffect } from 'react';
import { Box, Typography, Container, Button, CircularProgress } from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Gallery = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Option 1: Redirect automatically after a brief moment
    const timer = setTimeout(() => {
      window.location.href = 'https://weststudio30784348616.pixieset.com/nyanzatss/';
    }, 2000); // Redirect after 2 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleRedirectClick = () => {
    window.location.href = 'https://weststudio30784348616.pixieset.com/nyanzatss/';
  };

  return (
    <Box sx={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
      pt: 4,
      pb: 8
    }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Box sx={{ 
            textAlign: 'center', 
            py: 8, 
            px: 3,
            borderRadius: 4,
            background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(250,250,250,0.9) 100%)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.3)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <Box sx={{ 
              position: 'absolute', 
              top: 0, 
              left: 0, 
              right: 0, 
              height: 4, 
              background: 'linear-gradient(90deg, #3498db, #2c3e50)' 
            }} />
            
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Box sx={{ 
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 80,
                height: 80,
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #3498db, #2c3e50)',
                boxShadow: '0 10px 25px rgba(52, 152, 219, 0.3)',
                mb: 3,
                position: 'relative',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: -3,
                  left: -3,
                  right: -3,
                  bottom: -3,
                  borderRadius: '50%',
                  background: 'linear-gradient(45deg, #3498db, #2c3e50)',
                  zIndex: -1,
                  opacity: 0.3,
                }
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="white">
                  <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.86 8.86-3 3.87L9 13.27l-1.82 2.36L5 12l6.86-8.86L14 6.82l1.82-2.36L21 12l-6.86 8.86L12 16.59 9.14 19.15 5 12l2.14-2.73L9 12l2.14-2.73L14 12l2.14-2.73L19 12l-4.86-3.14z"/>
                </svg>
              </Box>
            </motion.div>
            
            <Typography
              variant="h2"
              component="h1"
              sx={{
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                fontWeight: 800,
                mb: 3,
                background: 'linear-gradient(45deg, #2c3e50, #3498db)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
              }}
            >
              Photo Gallery
            </Typography>
            
            <Typography 
              variant="h5" 
              color="text.secondary"
              sx={{
                fontWeight: 500,
                mb: 4,
                maxWidth: '600px',
                mx: 'auto',
                lineHeight: 1.6
              }}
            >
              We're redirecting you to our photo gallery. Please hold on while we load the page...
            </Typography>
            
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
              <CircularProgress size={24} sx={{ mr: 1 }} />
              <Button
                variant="contained"
                color="primary"
                size="large"
                onClick={handleRedirectClick}
                sx={{ 
                  borderRadius: 3, 
                  px: 4, 
                  py: 1.5,
                  textTransform: 'none',
                  fontWeight: 600,
                  boxShadow: '0 4px 15px rgba(52, 152, 219, 0.3)',
                  fontSize: { xs: '0.9rem', sm: '1rem' }
                }}
              >
                Visit Gallery Now
              </Button>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Gallery;