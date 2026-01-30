import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';

const Leaders = () => {
  const leaders = [
    {
      id: 1,
      name: 'Mr. John Doe',
      position: 'Principal',
      bio: 'With over 20 years of educational leadership experience, Mr. Doe brings a wealth of knowledge and vision to NYANZA TSS.',
      qualifications: ['M.Ed. Educational Leadership', 'B.Sc. Education', 'Certified School Administrator']
    },
    {
      id: 2,
      name: 'Mrs. Jane Smith',
      position: 'Deputy Principal',
      bio: 'An experienced educator with a passion for curriculum development and student success.',
      qualifications: ['M.A. Curriculum Studies', 'B.Ed. Mathematics', 'Educational Psychology Certificate']
    },
    {
      id: 3,
      name: 'Mr. Robert Johnson',
      position: 'Administrative Head',
      bio: 'Expert in school administration and finance, ensuring smooth operations and resource management.',
      qualifications: ['MBA Administration', 'B.Commerce', 'Public Management Certificate']
    },
    {
      id: 4,
      name: 'Dr. Sarah Williams',
      position: 'Head of Academics',
      bio: 'Distinguished academician with expertise in technical education and curriculum innovation.',
      qualifications: ['Ph.D. Technical Education', 'M.Ed. Instructional Design', 'Curriculum Development Specialist']
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
            Meet Our Leadership Team
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
            Dedicated professionals committed to excellence in technical education and student development.
          </Typography>
        </motion.div>

        <Grid container spacing={6}>
          {leaders.map((leader, index) => (
            <Grid item xs={12} md={6} key={leader.id}>
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
                    textAlign: 'center',
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Typography variant="h5" gutterBottom sx={{ fontWeight: 700, color: 'primary.main' }}>
                      {leader.name}
                    </Typography>
                    <Typography variant="h6" gutterBottom sx={{ color: 'secondary.main', fontWeight: 600, mb: 2 }}>
                      {leader.position}
                    </Typography>
                    <Typography variant="body2" paragraph sx={{ color: 'text.secondary', lineHeight: 1.6, mb: 2 }}>
                      {leader.bio}
                    </Typography>
                    
                    <Typography variant="subtitle2" sx={{ fontWeight: 600, color: 'primary.main', mb: 1 }}>
                      Qualifications:
                    </Typography>
                    <Box sx={{ textAlign: 'left' }}>
                      {leader.qualifications.map((qual, idx) => (
                        <Typography 
                          key={idx} 
                          variant="body2" 
                          sx={{ 
                            color: 'text.secondary', 
                            mb: 0.5,
                            pl: 2,
                            position: 'relative',
                            '&::before': {
                              content: '"•"',
                              position: 'absolute',
                              left: 0,
                              color: 'primary.main',
                              fontWeight: 'bold',
                            }
                          }}
                        >
                          {qual}
                        </Typography>
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

export default Leaders;