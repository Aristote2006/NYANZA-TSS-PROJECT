import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import logoImg from '../assets/images/logo.png';

const Programs = () => {
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
    },
    {
      id: 4,
      name: 'Automobile Technology',
      description: 'Vehicle maintenance, diagnostics, and repair techniques.',
      duration: '3 Years',
      requirements: 'Being passionate about automobiles and mechanics',
      image: '/assets/images/automobile.jpg'
         },
    {
      id: 5,
      name: 'Building Construction Technology',
      description: 'Construction techniques, architectural design, and project management.',
      duration: '3 Years',
      requirements: 'Being passionate about construction and architecture',
      image: '/assets/images/construction.jpg'
        },
    {
      id: 6,
      name: 'Electrical Technology',
      description: 'Electrical systems, machinery design, and maintenance techniques.',
      duration: '3 Years',
      requirements: 'Being passionate about electricity and electronics',
      image: '/assets/images/electrical.jpg'
        },
    {
      id: 7,
      name: 'Manufacturing Technology',
      description: 'Modern manufacturing techniques, machine operation, and Welding.',
      duration: '3 Years',
      requirements: 'Being passionate about manufacturing and Welding',
      image: '/assets/images/manufacturing.jpg'
        },
    {
      id: 8,
      name: 'Land Survey',
      description: 'Land surveying, mapping, and geographic information systems.',
      duration: '3 Years',
      requirements: 'Being passionate about surveying and mapping',
      image: '/assets/images/landsurvey.jpg'
        },
    {
      id: 9,
      name: 'Interior Design',
      description: 'Interior design, furniture making, and construction techniques.',
      duration: '3 Years',
      requirements: 'Being passionate about interior design and construction',
      image: '/assets/images/mainstaff.jpg'
        },
    {
      id: 10,
      name: 'Public Works',
      description: 'Water systems, pipe installation, and bridge design.',
      duration: '3 Years',
      requirements: 'Being passionate about public works and infrastructure',
      image: '/assets/images/public.jpg'
        },
    {
      id: 11,
      name: 'Wood Technology',
      description: 'Woodwork, furniture making, and construction techniques.',
      duration: '3 Years',
      requirements: 'Being passionate about woodwork and construction',
      image: '/assets/images/wood.jpg'
        },
    {
      id: 12,
      name: 'Renewable Energy',
      description: 'Solar energy, wind energy, and renewable energy systems.',
      duration: '3 Years',
      requirements: 'Being passionate about renewable energy and sustainability',
      image: '/assets/images/mainstaff.jpg'
        }
  ];

  return (
    <Box
      sx={{
        minHeight: '100vh',
        py: { xs: 4, sm: 6, md: 8 },
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
              fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.8rem', lg: '3.5rem' },
              fontWeight: 800,
              mb: { xs: 2, md: 3 },
              background: 'linear-gradient(45deg, #ecf0f1, #bdc3c7)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
            }}
          >
            Academic Programs
          </Typography>
          <Typography
            align="center"
            sx={{
              fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
              color: 'text.secondary',
              mb: { xs: 6, md: 8 },
              maxWidth: '600px',
              mx: 'auto',
            }}
          >
            Explore our diverse range of technical and vocational programs designed to prepare you for industry success.
          </Typography>
        </motion.div>

        <Grid container spacing={3}>
          {programs.map((program, index) => (
            <Grid item xs={12} sm={6} md={6} lg={4} key={program.id}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    background: 'white',
                    borderRadius: 4,
                    boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: { xs: 500, sm: 550, md: 600 },
                  }}
                >
                  <Box
                    component="img"
                    src={program.image}
                    alt={program.name}
                    sx={{
                      width: '100%',
                      height: { xs: 220, sm: 250, md: 280 },
                      objectFit: 'cover',
                      objectPosition: 'center',
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
      </Container>
    </Box>
  );
};

export default Programs;