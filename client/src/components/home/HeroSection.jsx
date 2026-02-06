import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Container, Grid } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import staffteamImage from '../../assets/images/staffteam.jpg';
import hero1Image from '../../assets/images/hero1.jpg';
import hero2Image from '../../assets/images/hero2.jpg';
import hero3Image from '../../assets/images/hero3.jpg';
import flagImage from '../../assets/images/flag.jpg';
import newhouseImage from '../../assets/images/newhouse.jpg';

const HeroSection = () => {
  // Use your original images with proper imports
  const imageRefs = [
    staffteamImage,
    hero1Image,
    hero2Image,
    hero3Image,
    flagImage,
    newhouseImage
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-slide functionality with 7-second delay
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % imageRefs.length);
    }, 7000); // Change image every 7 seconds as requested

    return () => clearInterval(interval);
  }, [imageRefs.length]);

  return (
    <Box
      sx={{
        minHeight: { xs: '80vh', sm: '85vh', md: '90vh' },
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        pt: { xs: 2, sm: 4 },
      }}
    >
      {/* Background slideshow with smooth swipe transitions */}
      <AnimatePresence mode="wait">
        <Box
          key={currentImageIndex}
          component={motion.div}
          initial={{ x: '100%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: '-100%', opacity: 0 }}
          transition={{ 
            x: { duration: 0.8, ease: "easeInOut" },
            opacity: { duration: 0.8, ease: "easeInOut" }
          }}
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${imageRefs[currentImageIndex]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            zIndex: 1,
            filter: 'brightness(1.2) contrast(1.1)', // Increased brightness and contrast
          }}
        />
      </AnimatePresence>
      
      {/* Overlay for better text readability */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(44, 62, 80, 0.5) 0%, rgba(52, 152, 219, 0.4) 100%)',
          zIndex: 1,
        }}
      />
      
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Grid container spacing={3} alignItems="center" justifyContent="center">
          <Grid item xs={12} md={8} sx={{ textAlign: 'center' }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Typography
                variant="h1"
                component="h1"
                sx={{
                  fontSize: { xs: '1.4rem', sm: '1.8rem', md: '2.2rem', lg: '2.8rem' },
                  fontWeight: 600,
                  color: 'white',
                  lineHeight: 1.3,
                  mb: { xs: 2, md: 3 },
                  textShadow: '2px 2px 4px rgba(0,0,0,0.6)',
                  textAlign: 'center',
                }}
              >
                Empowering technicians,{' '}
                <Box
                  component="span"
                  sx={{
                    color: '#e74c3c',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.6)',
                  }}
                >
                  innovators
                </Box>{' '}
                and{' '}
                <Box
                  component="span"
                  sx={{
                    color: '#3498db',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.6)',
                  }}
                >
                  leaders
                </Box>{' '}
                for tomorrow
              </Typography>
              
              <Typography
                variant="h4"
                sx={{
                  fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem', lg: '1.2rem' },
                  color: 'rgba(255, 255, 255, 0.95)',
                  mb: { xs: 3, md: 4 },
                  fontWeight: 400,
                  textShadow: '1px 1px 3px rgba(0,0,0,0.6)',
                  textAlign: 'center',
                  maxWidth: '800px',
                  mx: 'auto',
                }}
              >
                Shaping the future through quality technical education and hands-on learning experiences
              </Typography>
              
              <Box sx={{ display: 'flex', gap: { xs: 1, sm: 2 }, flexWrap: 'wrap', justifyContent: 'center', mt: 2 }}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="contained"
                    component={Link}
                    to="/about"
                    sx={{
                      px: { xs: 2, sm: 3, md: 4 },
                      py: { xs: 1, sm: 1.2, md: 1.5 },
                      fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' },
                      fontWeight: 600,
                      backgroundColor: 'white',
                      color: '#2c3e50',
                      borderRadius: 2,
                      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.95)',
                        boxShadow: '0 6px 25px rgba(0, 0, 0, 0.4)',
                        transform: 'translateY(-2px)',
                      },
                    }}
                  >
                    Learn More
                  </Button>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="outlined"
                    component={Link}
                    to="/programs"
                    sx={{
                      px: { xs: 2, sm: 3, md: 4 },
                      py: { xs: 1, sm: 1.2, md: 1.5 },
                      fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' },
                      fontWeight: 600,
                      borderColor: 'white',
                      color: 'white',
                      borderRadius: 2,
                      borderWidth: 2,
                      backdropFilter: 'blur(10px)',
                      backgroundColor: 'rgba(255, 255, 255, 0.15)',
                      '&:hover': {
                        borderColor: '#3498db',
                        color: '#3498db',
                        backgroundColor: 'rgba(52, 152, 219, 0.25)',
                        transform: 'translateY(-2px)',
                      },
                    }}
                  >
                    Our Programs
                  </Button>
                </motion.div>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;