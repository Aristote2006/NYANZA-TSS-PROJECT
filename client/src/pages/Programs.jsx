import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import logoImg from '../assets/images/logo.png';

const Programs = () => {
  const programs = [
    {
      id: 1,
      name: 'Electrical Engineering',
      description: 'Comprehensive training in electrical systems, power generation, and electronics.',
      duration: '4 Years',
      requirements: 'KCSE Mean Grade C+ and above',
      facilities: ['Modern Labs', 'Workshops', 'Library']
    },
    {
      id: 2,
      name: 'Mechanical Engineering',
      description: 'Hands-on experience in machinery design, manufacturing, and maintenance.',
      duration: '4 Years',
      requirements: 'KCSE Mean Grade C+ and above',
      facilities: ['Machine Shop', 'CAD Lab', 'Testing Center']
    },
    {
      id: 3,
      name: 'Computer Studies',
      description: 'Programming, networking, and software development with industry-standard tools.',
      duration: '4 Years',
      requirements: 'KCSE Mean Grade C+ and above',
      facilities: ['Computer Lab', 'Internet Access', 'Software Suite']
    },
    {
      id: 4,
      name: 'Automotive Technology',
      description: 'Vehicle maintenance, diagnostics, and repair techniques.',
      duration: '3 Years',
      requirements: 'KCSE Mean Grade C and above',
      facilities: ['Auto Workshop', 'Diagnostic Tools', 'Test Vehicles']
    },
    {
      id: 5,
      name: 'Building Technology',
      description: 'Construction techniques, architectural design, and project management.',
      duration: '4 Years',
      requirements: 'KCSE Mean Grade C+ and above',
      facilities: ['Construction Yard', 'Drawing Studio', 'Materials Lab']
    },
    {
      id: 6,
      name: 'Applied Sciences',
      description: 'Chemistry, Physics, and Biology applications in industrial settings.',
      duration: '4 Years',
      requirements: 'KCSE Mean Grade C+ and above',
      facilities: ['Science Labs', 'Research Center', 'Equipment']
    }
  ];

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
              mb: 2,
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
              fontSize: { xs: '1.1rem', md: '1.3rem' },
              color: 'text.secondary',
              mb: 8,
              maxWidth: '600px',
              mx: 'auto',
            }}
          >
            Explore our diverse range of technical and vocational programs designed to prepare you for industry success.
          </Typography>
        </motion.div>

        <Grid container spacing={6}>
          {programs.map((program, index) => (
            <Grid item xs={12} md={6} lg={4} key={program.id}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
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
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Box sx={{ width: 50, height: 50, mr: 2, overflow: 'hidden', borderRadius: '50%' }}>
                        <img 
                          src={logoImg} 
                          alt="NYANZA TSS Logo"
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                      </Box>
                      <Typography variant="h6" sx={{ fontWeight: 700, color: 'primary.main' }}>
                        {program.name}
                      </Typography>
                    </Box>
                    
                    <Typography variant="body2" paragraph sx={{ color: 'text.secondary', lineHeight: 1.6, mb: 2 }}>
                      {program.description}
                    </Typography>
                    
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                      <Chip 
                        label={program.duration} 
                        size="small" 
                        sx={{ 
                          backgroundColor: 'primary.light', 
                          color: 'primary.contrastText',
                          fontWeight: 600,
                        }} 
                      />
                      <Chip 
                        label={program.requirements} 
                        size="small" 
                        sx={{ 
                          backgroundColor: 'secondary.light', 
                          color: 'secondary.contrastText',
                          fontWeight: 600,
                        }} 
                      />
                    </Box>
                    
                    <Typography variant="subtitle2" sx={{ fontWeight: 600, color: 'primary.main', mb: 1 }}>
                      Facilities:
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {program.facilities.map((facility, idx) => (
                        <Chip 
                          key={idx}
                          label={facility}
                          size="small"
                          sx={{ 
                            backgroundColor: 'grey.200', 
                            color: 'text.primary',
                            fontSize: '0.75rem',
                          }} 
                        />
                      ))}
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