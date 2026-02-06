import React from 'react';
import { Container, Grid, Typography, Card, CardContent, Button, Box, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/images/logo.png';

const ProgramsPreview = () => {
  // First 3 programs from the main Programs page
  const programs = [
    {
      id: 1,
      name: 'Computer System and Architecture',
      description: 'Comprehensive training in computer systems, architecture, and software development.',
      duration: '3 Years',
      requirements: 'Being passionate about technology and embedded systems',
      image: '/assets/images/computer.jpg'
    },
    {
      id: 2,
      name: 'Electronics and Telecommunication Technology',
      description: 'Hands-on experience in electronics design, manufacturing, and maintenance.',
      duration: '3 Years',
      requirements: 'Being passionate about electronics and telecommunications',
      image: '/assets/images/mainstaff.jpg'
    },
    {
      id: 3,
      name: 'Multimedia Production',
      description: 'Production of multimedia content for various platforms and industries.',
      duration: '3 Years',
      requirements: 'Being passionate about Camera operation, videos editing and sound editing',
      image: '/assets/images/multimedia.jpg'
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8, background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)' }}>
      <Box sx={{ textAlign: 'center', mb: 8 }}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontSize: { xs: '2rem', md: '2.5rem' },
              fontWeight: 700,
              mb: 2,
              background: 'linear-gradient(45deg, #2c3e50, #34495e)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Our Programs
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontSize: '1.2rem',
              color: 'text.secondary',
              maxWidth: '600px',
              mx: 'auto',
            }}
          >
            Industry-relevant technical programs designed to prepare students for successful careers.
          </Typography>
        </motion.div>
      </Box>

      <Grid container spacing={{ xs: 3, sm: 4, md: 4 }}>
        {programs.map((program, index) => (
          <Grid item xs={12} sm={6} md={4} key={program.id}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                sx={{
                  height: '100%',
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: 4,
                  boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                  overflow: 'hidden',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-10px)',
                    boxShadow: '0 30px 60px rgba(0,0,0,0.2)',
                  },
                  display: 'flex',
                  flexDirection: 'column',
                  minHeight: { xs: 400, sm: 450, md: 450 },
                }}
              >
                <Box
                  component="img"
                  src={program.image}
                  alt={program.name}
                  sx={{
                    width: '100%',
                    height: { xs: 120, sm: 140, md: 150 },
                    objectFit: 'cover',
                    flexShrink: 0,
                  }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/400x150/2c3e50/FFFFFF?text=' + encodeURIComponent(program.name);
                  }}
                />
                <CardContent sx={{ 
                  p: { xs: 2, sm: 3, md: 4 }, 
                  flexGrow: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Box sx={{ width: { xs: 40, sm: 45, md: 50 }, height: { xs: 40, sm: 45, md: 50 }, mr: { xs: 1, sm: 2 }, overflow: 'hidden', borderRadius: '50%', flexShrink: 0 }}>
                      <img 
                        src={logoImg} 
                        alt="NYANZA TSS Logo"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </Box>
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        fontWeight: 700, 
                        color: 'primary.main',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' }
                      }}
                    >
                      {program.name}
                    </Typography>
                  </Box>
                  
                  <Typography 
                    variant="body2" 
                    paragraph 
                    sx={{ 
                      color: 'text.secondary', 
                      lineHeight: 1.6, 
                      mb: 2,
                      flexGrow: 1,
                      display: '-webkit-box',
                      WebkitLineClamp: 4,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      fontSize: { xs: '0.8rem', sm: '0.85rem', md: '0.9rem' }
                    }}
                  >
                    {program.description}
                  </Typography>
                  
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 1 }}>
                    <Chip 
                      label={program.duration} 
                      size="small" 
                      sx={{ 
                        backgroundColor: 'primary.light', 
                        color: 'primary.contrastText',
                        fontWeight: 600,
                        fontSize: { xs: '0.7rem', sm: '0.75rem' },
                        flexShrink: 0,
                      }} 
                    />
                    <Chip 
                      label={program.requirements} 
                      size="small" 
                      sx={{ 
                        backgroundColor: 'secondary.light', 
                        color: 'secondary.contrastText',
                        fontWeight: 600,
                        fontSize: { xs: '0.7rem', sm: '0.75rem' },
                        flexShrink: 0,
                      }} 
                    />
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ textAlign: 'center', mt: 8 }}>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            variant="contained"
            size="large"
            component={Link}
            to="/programs"
            sx={{
              background: 'linear-gradient(45deg, #2c3e50, #34495e)',
              color: 'white',
              px: 5,
              py: 1.5,
              fontSize: '1.1rem',
              fontWeight: 600,
              borderRadius: 3,
              boxShadow: '0 4px 20px rgba(44, 62, 80, 0.4)',
              '&:hover': {
                background: 'linear-gradient(45deg, #1a252f, #2c3e50)',
                boxShadow: '0 6px 25px rgba(44, 62, 80, 0.6)',
              },
            }}
          >
            View More Programs
          </Button>
        </motion.div>
      </Box>
    </Container>
  );
};

export default ProgramsPreview;