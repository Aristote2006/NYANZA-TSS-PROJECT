import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, Chip } from '@mui/material';
import { motion } from 'framer-motion';

const News = () => {
  const newsItems = [
    {
      id: 1,
      title: 'Engineering Students Excel in National Competition',
      excerpt: 'Our engineering students showcased exceptional skills at the national technical competition...',
      date: 'January 15, 2026',
      category: 'Academics'
    },
    {
      id: 2,
      title: 'New Laboratory Equipment Arrival',
      excerpt: 'State-of-the-art equipment has arrived for our science and engineering labs...',
      date: 'January 10, 2026',
      category: 'Facilities'
    },
    {
      id: 3,
      title: 'Graduation Ceremony Success',
      excerpt: 'Another successful graduation ceremony celebrating our accomplished alumni...',
      date: 'December 28, 2025',
      category: 'Events'
    },
    {
      id: 4,
      title: 'Industry Partnership Announced',
      excerpt: 'Exciting partnership with leading tech companies for student internships...',
      date: 'December 20, 2025',
      category: 'Partnerships'
    },
    {
      id: 5,
      title: 'Sports Achievements Update',
      excerpt: 'Our sports teams continue to excel in regional competitions...',
      date: 'December 15, 2025',
      category: 'Sports'
    },
    {
      id: 6,
      title: 'Alumni Network Expansion',
      excerpt: 'Connecting with our growing network of successful graduates worldwide...',
      date: 'December 10, 2025',
      category: 'Community'
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
            Latest News & Updates
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
            Stay informed about the latest developments, achievements, and events at NYANZA TSS.
          </Typography>
        </motion.div>

        <Grid container spacing={6}>
          {newsItems.map((news, index) => (
            <Grid item xs={12} md={6} key={news.id}>
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
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                      <Chip 
                        label={news.category} 
                        size="small" 
                        sx={{ 
                          backgroundColor: 'primary.light', 
                          color: 'primary.contrastText',
                          fontWeight: 600,
                        }} 
                      />
                      <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600 }}>
                        {news.date}
                      </Typography>
                    </Box>
                    
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 700, color: 'primary.main' }}>
                      {news.title}
                    </Typography>
                    
                    <Typography variant="body2" paragraph sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                      {news.excerpt}
                    </Typography>
                    
                    <Box sx={{ mt: 2 }}>
                      <Chip 
                        label="Read More" 
                        size="small" 
                        variant="outlined"
                        sx={{ 
                          borderColor: 'primary.main',
                          color: 'primary.main',
                          fontWeight: 600,
                          cursor: 'pointer',
                          '&:hover': {
                            backgroundColor: 'primary.main',
                            color: 'white',
                          }
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

export default News;