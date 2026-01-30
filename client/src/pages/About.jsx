import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        py: 8,
        background: 'linear-gradient(135deg, #2c3e50 0%, #1a252f 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h2"
            align="center"
            sx={{
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              fontWeight: 800,
              mb: 6,
              background: 'linear-gradient(45deg, #ecf0f1, #bdc3c7)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
            }}
          >
            About NYANZA TSS
          </Typography>
        </motion.div>

        <Grid container spacing={6} alignItems="center" sx={{ mb: 8 }}>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card
                sx={{
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: 4,
                  boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                  p: 4,
                }}
              >
                <Typography variant="h4" gutterBottom sx={{ color: 'primary.main', fontWeight: 700 }}>
                  Our Story
                </Typography>
                <Typography variant="body1" paragraph sx={{ lineHeight: 1.8, color: 'text.secondary' }}>
                  NYANZA Technical Secondary School stands as a beacon of excellence in technical education, 
                  dedicated to nurturing the next generation of skilled professionals. Founded with a vision to 
                  bridge the gap between theoretical knowledge and practical skills, our institution has grown 
                  to become a premier destination for students seeking quality technical education.
                </Typography>
                <Typography variant="body1" paragraph sx={{ lineHeight: 1.8, color: 'text.secondary' }}>
                  Located in the heart of Nyanza, our school combines traditional academic rigor with 
                  innovative teaching methodologies, preparing students for the challenges of tomorrow's 
                  technological landscape.
                </Typography>
              </Card>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Card
                sx={{
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: 4,
                  boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                  p: 4,
                }}
              >
                <Typography variant="h4" gutterBottom sx={{ color: 'primary.main', fontWeight: 700 }}>
                  Our Mission
                </Typography>
                <Typography variant="body1" paragraph sx={{ lineHeight: 1.8, color: 'text.secondary' }}>
                  To provide world-class technical education that empowers students with the knowledge, 
                  skills, and ethical foundation necessary to excel in their chosen fields and contribute 
                  meaningfully to society.
                </Typography>
                <Typography variant="h4" gutterBottom sx={{ color: 'primary.main', fontWeight: 700, mt: 2 }}>
                  Our Vision
                </Typography>
                <Typography variant="body1" paragraph sx={{ lineHeight: 1.8, color: 'text.secondary' }}>
                  To be the leading technical secondary school in East Africa, recognized for academic 
                  excellence, innovation, and the development of responsible global citizens equipped 
                  to drive sustainable development.
                </Typography>
              </Card>
            </motion.div>
          </Grid>
        </Grid>

        <Grid container spacing={6} sx={{ mt: 8 }}>
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Card
                sx={{
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: 4,
                  boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                  textAlign: 'center',
                  p: 4,
                }}
              >
                <Typography variant="h5" gutterBottom sx={{ color: 'primary.main', fontWeight: 700 }}>
                  Modern Facilities
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                  State-of-the-art laboratories, workshops, and learning environments designed to foster 
                  hands-on experience and practical learning.
                </Typography>
              </Card>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Card
                sx={{
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: 4,
                  boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                  textAlign: 'center',
                  p: 4,
                }}
              >
                <Typography variant="h5" gutterBottom sx={{ color: 'primary.main', fontWeight: 700 }}>
                  Academic Excellence
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                  Proven track record of outstanding academic performance and successful career placement 
                  of our graduates.
                </Typography>
              </Card>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Card
                sx={{
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: 4,
                  boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                  textAlign: 'center',
                  p: 4,
                }}
              >
                <Typography variant="h5" gutterBottom sx={{ color: 'primary.main', fontWeight: 700 }}>
                  Community Impact
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                  Active engagement with the local community and commitment to sustainable development 
                  initiatives.
                </Typography>
              </Card>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;