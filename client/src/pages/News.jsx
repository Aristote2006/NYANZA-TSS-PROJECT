import React, { useState, useEffect } from 'react';
import { 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  Box,
  Chip
} from '@mui/material';
import { motion } from 'framer-motion';
import { newsAPI, getImageUrl } from '../services/api'; // Import the API service

const News = () => {
  const [newsItems, setNewsItems] = useState([]); // Start with empty array
  const [loading, setLoading] = useState(true);

  // Fetch news from the API only (no mock data)
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await newsAPI.getAll();
        console.log('API Response:', response.data); // Debug: Log API response
        
        // Check if API data has images
        response.data.forEach((item, index) => {
          console.log(`News item ${index}:`, {
            title: item.title,
            hasImage: !!item.image,
            image: item.image,
            imageUrl: item.imageUrl
          });
        });
        
        // Use only API data
        setNewsItems(response.data);
      } catch (error) {
        console.error('Error fetching news:', error);
        // Empty array if API fails
        setNewsItems([]);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return (
      <Box
        sx={{
          minHeight: '100vh',
          py: { xs: 4, sm: 6, md: 8 },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #2c3e50 0%, #1a252f 100%)',
        }}
      >
        <Typography variant="h6" color="white">Loading news...</Typography>
      </Box>
    );
  }

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
          {newsItems.length > 0 ? (
            newsItems.map((news, index) => (
              <Grid item xs={12} md={6} key={news._id}>
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
                    {/* News Image */}
                    {news.image && (
                      <Box 
                        sx={{ 
                          height: 200,
                          overflow: 'hidden',
                          position: 'relative'
                        }}
                      >
                        <img
                          src={getImageUrl(news.image)}
                          alt={news.title}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover', // Maintain aspect ratio and fill container
                            transition: 'transform 0.3s ease',
                          }}
                          onError={(e) => {
                            console.log('Image failed to load:', news.image, 'Full URL:', getImageUrl(news.image)); // Debug
                            e.target.style.display = 'none';
                          }}
                          onLoad={(e) => {
                            console.log('Image loaded successfully:', news.image, 'Full URL:', getImageUrl(news.image)); // Debug
                          }}
                        />
                        <Box
                          sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)',
                            pointerEvents: 'none'
                          }}
                        />
                      </Box>
                    )}
                    
                    <CardContent sx={{ p: 4 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                        <Chip 
                          label={news.category || 'News'} 
                          size="small" 
                          sx={{ 
                            backgroundColor: 'primary.light', 
                            color: 'primary.contrastText',
                            fontWeight: 600,
                          }} 
                        />
                        <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600 }}>
                          {news.publishedDate ? new Date(news.publishedDate).toLocaleDateString() : new Date(news.createdAt).toLocaleDateString()}
                        </Typography>
                      </Box>
                      
                      <Typography variant="h6" gutterBottom sx={{ fontWeight: 700, color: 'primary.main' }}>
                        {news.title}
                      </Typography>
                      
                      <Typography variant="body2" paragraph sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                        {news.content?.substring(0, 150)}... {/* Display first 150 characters */}
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
            ))
          ) : (
            <Grid item xs={12}>
              <Box
                sx={{
                  minHeight: 300,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'rgba(255,255,255,0.1)',
                  borderRadius: 4,
                  backdropFilter: 'blur(10px)'
                }}
              >
                <Typography variant="h6" color="white">
                  No news articles available at the moment. Check back soon!
                </Typography>
              </Box>
            </Grid>
          )}
        </Grid>
      </Container>
    </Box>
  );
};

export default News;