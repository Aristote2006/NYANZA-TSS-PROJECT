import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Container, Grid, IconButton } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import staffteamImage from '../../assets/images/staffteam.jpg';
import hero1Image from '../../assets/images/hero1.jpg';
import hero2Image from '../../assets/images/hero2.jpg';
import hero3Image from '../../assets/images/hero3.jpg';
import flagImage from '../../assets/images/flag.jpg';
import newhouseImage from '../../assets/images/newhouse.jpg';
import volleyballImage from '../../assets/images/upfront.jpg';
import basketballImage from '../../assets/images/dorm.webp';
import footballImage from '../../assets/images/flag.jpeg';
import welcomeImage from '../../assets/images/whole.webp';

const HeroSection = () => {
  // Use your original images with proper imports
  const imageRefs = [
    staffteamImage,
    hero1Image,
    hero2Image,
    hero3Image,
    flagImage,
    newhouseImage,
    volleyballImage,
    basketballImage,
    footballImage,
    welcomeImage
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Navigation functions
  const goToPrevious = () => {
    setCurrentImageIndex(prevIndex => 
      prevIndex === 0 ? imageRefs.length - 1 : prevIndex - 1
    );
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    setCurrentImageIndex(prevIndex => 
      (prevIndex + 1) % imageRefs.length
    );
    setIsAutoPlaying(false);
  };

  // Auto-slide functionality with 30-second delay
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % imageRefs.length);
    }, 30000); // Change image every 30 seconds as requested

    return () => clearInterval(interval);
  }, [imageRefs.length, isAutoPlaying]);

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
        {/* Navigation Arrows */}
        <IconButton
          onClick={goToPrevious}
          sx={{
            position: 'absolute',
            left: { xs: 15, sm: 25, md: 40 },
            top: '50%',
            transform: 'translateY(-50%)',
            width: { xs: 50, sm: 60, md: 70 },
            height: { xs: 50, sm: 60, md: 70 },
            backgroundColor: 'rgba(255, 255, 255, 0.15)',
            backdropFilter: 'blur(12px)',
            color: 'white',
            zIndex: 3,
            borderRadius: '50%',
            border: '2px solid rgba(255, 255, 255, 0.3)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.25)',
              borderColor: 'rgba(255, 255, 255, 0.6)',
              transform: 'translateY(-50%) scale(1.15)',
              boxShadow: '0 12px 40px rgba(0, 0, 0, 0.4)',
            },
            '&:active': {
              transform: 'translateY(-50%) scale(1.05)',
            },
          }}
        >
          <ArrowBackIosIcon sx={{ 
            fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2.2rem' },
            filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
          }} />
        </IconButton>

        <IconButton
          onClick={goToNext}
          sx={{
            position: 'absolute',
            right: { xs: 15, sm: 25, md: 40 },
            top: '50%',
            transform: 'translateY(-50%)',
            width: { xs: 50, sm: 60, md: 70 },
            height: { xs: 50, sm: 60, md: 70 },
            backgroundColor: 'rgba(255, 255, 255, 0.15)',
            backdropFilter: 'blur(12px)',
            color: 'white',
            zIndex: 3,
            borderRadius: '50%',
            border: '2px solid rgba(255, 255, 255, 0.3)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.25)',
              borderColor: 'rgba(255, 255, 255, 0.6)',
              transform: 'translateY(-50%) scale(1.15)',
              boxShadow: '0 12px 40px rgba(0, 0, 0, 0.4)',
            },
            '&:active': {
              transform: 'translateY(-50%) scale(1.05)',
            },
          }}
        >
          <ArrowForwardIosIcon sx={{ 
            fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2.2rem' },
            filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
          }} />
        </IconButton>
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
                  fontSize: { xs: '2rem', sm: '2.8rem', md: '3.5rem', lg: '4.2rem' },
                  fontWeight: 700,
                  color: 'white',
                  lineHeight: 1.2,
                  mb: { xs: 2, md: 3 },
                  textShadow: '3px 3px 6px rgba(0,0,0,0.7)',
                  textAlign: 'center',
                  letterSpacing: { xs: '1px', sm: '2px', md: '3px' },
                }}
              >
                <Box
                  component="span"
                  sx={{
                    background: 'linear-gradient(90deg, #00A1DE 0%, #FAD201 25%, #00A651 50%, #00A1DE 75%, #FAD201 100%)',
                    backgroundSize: '400% 100%',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    animation: 'waterFlow 6s ease-in-out infinite',
                    '@keyframes waterFlow': {
                      '0%': { backgroundPosition: '0% 50%' },
                      '100%': { backgroundPosition: '100% 50%' },
                    },
                    position: 'relative',
                    display: 'inline-block',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: -4,
                      left: '10%',
                      width: '80%',
                      height: '3px',
                      background: 'linear-gradient(90deg, #00A1DE, #FAD201, #00A651, #00A1DE, #FAD201)',
                      backgroundSize: '400% 100%',
                      animation: 'underlineFlow 6s ease-in-out infinite',
                      '@keyframes underlineFlow': {
                        '0%': { backgroundPosition: '100% 50%' },
                        '100%': { backgroundPosition: '0% 50%' },
                      },
                      borderRadius: '2px',
                    }
                  }}
                >
                  WELCOME TO NYANZA TSS
                </Box>
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
                Empowered in Building the Future accredited in better practical hands-on skills
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