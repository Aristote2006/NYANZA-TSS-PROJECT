import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, Button, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: 16,
  boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
  transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
  },
}));

const AdminNews = () => {
  // Mock data for news articles
  const newsArticles = [
    { id: 1, title: 'New Academic Year Begins', date: '2024-01-15', author: 'Admin', category: 'Announcement', views: 1200, status: 'Published' },
    { id: 2, title: 'Science Fair Winners Announced', date: '2024-01-10', author: 'Dr. Smith', category: 'Achievement', views: 850, status: 'Published' },
    { id: 3, title: 'Upcoming Sports Day', date: '2024-01-05', author: 'Coach Johnson', category: 'Event', views: 620, status: 'Published' },
    { id: 4, title: 'Infrastructure Development Update', date: '2024-01-01', author: 'Admin', category: 'Development', views: 420, status: 'Draft' },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4, background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)' }}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Box sx={{ textAlign: 'center', mb: 6, mt: 2 }}>
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Box 
              sx={{ 
                width: 80, 
                height: 80, 
                bgcolor: 'secondary.main', 
                mx: 'auto', 
                mb: 2,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 8px 20px rgba(52, 152, 219, 0.3)'
              }}
            >
              <NewspaperIcon sx={{ fontSize: 40, color: 'white' }} />
            </Box>
          </motion.div>
          <Typography
            variant="h3"
            component="h1"
            sx={{
              fontSize: { xs: '1.8rem', md: '2.2rem' },
              fontWeight: 700,
              mb: 2,
              background: 'linear-gradient(45deg, #2c3e50, #34495e)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            News Management
          </Typography>
          <Typography variant="h6" color="text.secondary">
            View, edit, and manage news articles
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4 }}>
          <Typography variant="h5" sx={{ fontWeight: 600, color: 'primary.main' }}>
            News Articles ({newsArticles.length})
          </Typography>
          <Button
            variant="contained"
            component={Link}
            to="/admin-news/add"
            startIcon={<AddIcon />}
            sx={{
              background: 'linear-gradient(45deg, #3498db, #2980b9)',
              '&:hover': {
                background: 'linear-gradient(45deg, #2980b9, #1c6ea4)',
              }
            }}
          >
            Add News Article
          </Button>
        </Box>

        <Grid container spacing={3}>
          {newsArticles.map((article, index) => (
            <Grid item xs={12} key={article.id}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <StyledCard sx={{ 
                  borderRadius: 3, 
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(250,250,250,0.9) 100%)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                  p: 2
                }}>
                  <CardContent>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                      <Box>
                        <Typography variant="h6" sx={{ fontWeight: 700, color: 'primary.main', mb: 1 }}>
                          {article.title}
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 1, mb: 1 }}>
                          <Chip 
                            label={article.category} 
                            size="small" 
                            sx={{ 
                              background: 'linear-gradient(45deg, #3498db, #2980b9)',
                              color: 'white'
                            }} 
                          />
                          <Chip 
                            label={article.status} 
                            size="small" 
                            color={article.status === 'Published' ? 'success' : 'warning'} 
                          />
                        </Box>
                      </Box>
                      <Box sx={{ textAlign: 'right' }}>
                        <Typography variant="body2" color="text.secondary">
                          {article.date}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          By {article.author}
                        </Typography>
                      </Box>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
                      <Typography variant="body2" color="text.secondary">
                        Views: {article.views}
                      </Typography>
                      <Box sx={{ display: 'flex', gap: 1 }}>
                        <Button
                          variant="outlined"
                          startIcon={<EditIcon />}
                          component={Link}
                          to={`/admin-news/edit/${article.id}`}
                          sx={{
                            borderColor: 'primary.main',
                            color: 'primary.main',
                            '&:hover': {
                              backgroundColor: 'primary.light',
                              borderColor: 'primary.dark',
                            }
                          }}
                        >
                          Edit
                        </Button>
                        <Button
                          variant="outlined"
                          startIcon={<DeleteIcon />}
                          color="error"
                          sx={{
                            borderColor: 'error.main',
                            color: 'error.main',
                            '&:hover': {
                              backgroundColor: 'error.light',
                              borderColor: 'error.dark',
                            }
                          }}
                        >
                          Delete
                        </Button>
                      </Box>
                    </Box>
                  </CardContent>
                </StyledCard>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Container>
  );
};

export default AdminNews;