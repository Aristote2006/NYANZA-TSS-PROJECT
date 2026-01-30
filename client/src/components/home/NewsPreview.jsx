import React from 'react';
import { Container, Grid, Typography, Card, CardContent, CardMedia, Button, Box, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const NewsPreview = () => {
  // Sample news data - in a real app, this would come from an API
  const newsItems = [
    {
      id: 1,
      title: 'New State-of-the-Art Laboratory Opens',
      summary: 'Our new computer laboratory with 100 stations opens for student use.',
      imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      date: 'January 15, 2026',
      category: 'Facilities',
      isFeatured: true,
    },
    {
      id: 2,
      title: 'Alumni Achieve 95% Job Placement Rate',
      summary: 'Latest statistics show exceptional employment outcomes for our graduates.',
      imageUrl: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1626&q=80',
      date: 'December 28, 2025',
      category: 'Achievements',
      isFeatured: true,
    },
    {
      id: 3,
      title: 'Industry Partnerships Expand',
      summary: 'New collaborations with leading tech companies for student internships.',
      imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      date: 'November 10, 2025',
      category: 'Partnerships',
      isFeatured: true,
    },
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
            Latest News & Updates
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
            Stay informed about the latest developments and achievements at NYANZA TSS.
          </Typography>
        </motion.div>
      </Box>

      <Grid container spacing={4}>
        {newsItems.map((news, index) => (
          <Grid item xs={12} sm={6} md={4} key={news.id}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 3,
                  overflow: 'hidden',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  background: 'white',
                  '&:hover': {
                    transform: 'translateY(-10px)',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                  },
                }}
              >
                <Box sx={{ position: 'relative' }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={news.imageUrl}
                    alt={news.title}
                    sx={{ objectFit: 'cover' }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 16,
                      left: 16,
                      background: 'rgba(255, 255, 255, 0.9)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: 16,
                      px: 1.5,
                      py: 0.5,
                    }}
                  >
                    <Chip
                      label={news.category}
                      size="small"
                      sx={{ 
                        backgroundColor: 'primary.main', 
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: '0.75rem'
                      }}
                    />
                  </Box>
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 16,
                      right: 16,
                      background: 'rgba(0, 0, 0, 0.7)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: 16,
                      px: 1.5,
                      py: 0.5,
                    }}
                  >
                    <Typography variant="caption" color="white">
                      {news.date}
                    </Typography>
                  </Box>
                </Box>
                <CardContent sx={{ flexGrow: 1, pt: 3 }}>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="h3"
                    sx={{ fontWeight: 700, color: 'primary.main', mb: 1 }}
                  >
                    {news.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph sx={{ flexGrow: 1 }}>
                    {news.summary}
                  </Typography>
                  <Box sx={{ textAlign: 'right', mt: 2 }}>
                    <Button
                      size="small"
                      component={Link}
                      to={`/news/${news.id}`}
                      sx={{
                        color: 'primary.main',
                        fontWeight: 600,
                        textTransform: 'none',
                        '&:hover': {
                          color: 'secondary.main',
                        }
                      }}
                    >
                      Read More →
                    </Button>
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
            to="/news"
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
            Read More News
          </Button>
        </motion.div>
      </Box>
    </Container>
  );
};

export default NewsPreview;