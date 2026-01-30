import React from 'react';
import { Box, Typography, Button, Container, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import heroBgImage from '../../assets/images/whole.webp';
import welcomeImage from '../../assets/images/welcome.jpeg';

const HeroSection = () => {
  return (
    <Box
      sx={{
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        pt: 4,
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `url(${heroBgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat',
          zIndex: 1,
        }
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Typography
                variant="h1"
                component="h1"
                sx={{
                  fontSize: { xs: '1.8rem', md: '2.8rem', lg: '3.5rem' },
                  fontWeight: 500,
                  color: '#2c3e50',
                  lineHeight: 1.3,
                  mb: 3,
                  textShadow: '1px 1px 2px rgba(255,255,255,0.7)',
                }}
              >
                Empowering technicians,{' '}
                <Box
                  component="span"
                  sx={{
                    color: '#e74c3c',
                  }}
                >
                  innovators
                </Box>{' '}
                and{' '}
                <Box
                  component="span"
                  sx={{
                    color: '#3498db',
                  }}
                >
                  leaders
                </Box>{' '}
                for tomorrow
              </Typography>
              
              <Typography
                variant="h4"
                sx={{
                  fontSize: { xs: '1rem', md: '1.2rem' },
                  color: '#34495e',
                  mb: 4,
                  fontWeight: 400,
                  textShadow: '1px 1px 1px rgba(255,255,255,0.5)',
                }}
              >
                Shaping the future through quality technical education and hands-on learning experiences
              </Typography>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="contained"
                  component={Link}
                  to="/about"
                  sx={{
                    mr: 2,
                    px: 4,
                    py: 1.2,
                    fontSize: '1rem',
                    fontWeight: 500,
                    backgroundColor: '#2c3e50',
                    color: 'white',
                    borderRadius: 2,
                    boxShadow: '0 4px 15px rgba(44, 62, 80, 0.2)',
                    '&:hover': {
                      backgroundColor: '#1a252f',
                      boxShadow: '0 6px 20px rgba(44, 62, 80, 0.3)',
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
                    px: 4,
                    py: 1.2,
                    fontSize: '1rem',
                    fontWeight: 500,
                    borderColor: '#2c3e50',
                    color: '#2c3e50',
                    borderRadius: 2,
                    borderWidth: 1,
                    '&:hover': {
                      borderColor: '#3498db',
                      color: '#3498db',
                      backgroundColor: 'rgba(52, 152, 219, 0.05)',
                    },
                  }}
                >
                  Our Programs
                </Button>
              </motion.div>
            </motion.div>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
            >
              <Box
                sx={{
                  position: 'relative',
                  borderRadius: 3,
                  overflow: 'hidden',
                  boxShadow: '0 15px 35px rgba(0,0,0,0.1)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  backdropFilter: 'blur(10px)',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                }}
              >
                <Box
                  component="img"
                  src={welcomeImage}
                  alt="Welcome to NYANZA Technical Secondary School"
                  sx={{
                    width: '100%',
                    height: '400px',
                    objectFit: 'cover',
                    display: 'block',
                    filter: 'brightness(1.05) contrast(1.1)',
                  }}
                />
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
      
      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        style={{
          position: 'absolute',
          bottom: 25,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 2,
        }}
      >
        <Typography
          variant="body2"
          sx={{
            color: '#2c3e50',
            fontWeight: 400,
            fontSize: '0.9rem',
          }}
        >
          Scroll Down
        </Typography>
        <Box
          component="div"
          sx={{
            width: 1,
            height: 30,
            backgroundColor: '#2c3e50',
            margin: '3px auto',
            borderRadius: 1,
          }}
        />
      </motion.div>
    </Box>
  );
};

export default HeroSection;