import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, Button, Chip, Alert, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { newsAPI, getImageUrl } from '../services/api';

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
  const [newsArticles, setNewsArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [deleteItemId, setDeleteItemId] = useState(null);
  const navigate = useNavigate();

  // Fetch news articles from the API
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await newsAPI.getAll(token);
        setNewsArticles(response.data);
      } catch (err) {
        setError(err.response?.data?.msg || 'Failed to fetch news articles');
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const handleDelete = async () => {
    try {
      const token = localStorage.getItem('token');
      await newsAPI.delete(deleteItemId, token);
      setNewsArticles(newsArticles.filter(article => article._id !== deleteItemId));
      setSuccess('News article deleted successfully');
      handleCloseDeleteDialog();
    } catch (err) {
      setError(err.response?.data?.msg || 'Failed to delete news article');
    }
  };

  const handleOpenDeleteDialog = (id) => {
    setDeleteItemId(id);
    setOpenDeleteDialog(true);
  };

  const handleCloseDeleteDialog = () => {
    setOpenDeleteDialog(false);
    setDeleteItemId(null);
  };

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

        {error && (
          <Alert severity="error" sx={{ mb: 3, borderRadius: 2 }}>
            {error}
          </Alert>
        )}

        {success && (
          <Alert severity="success" sx={{ mb: 3, borderRadius: 2 }}>
            {success}
          </Alert>
        )}

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

        {loading ? (
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
            <Typography variant="h6" color="text.secondary">
              Loading news articles...
            </Typography>
          </Box>
        ) : newsArticles.length === 0 ? (
          <Box
            sx={{
              minHeight: 300,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(255,255,255,0.1)',
              borderRadius: 4,
              backdropFilter: 'blur(10px)',
              flexDirection: 'column'
            }}
          >
            <Typography variant="h6" color="text.secondary" sx={{ mb: 2 }}>
              No news articles found
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Add your first news article using the "Add News Article" button above
            </Typography>
          </Box>
        ) : (
          <Grid container spacing={3}>
            {newsArticles.map((article, index) => (
              <Grid item xs={12} key={article._id || article.id}>
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
                    overflow: 'hidden'
                  }}>
                    <CardContent sx={{ p: 0 }}>
                      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
                        {/* Image Section */}
                        {article.image && (
                          <Box 
                            sx={{ 
                              width: { xs: '100%', md: 200 },
                              height: { xs: 150, md: 'auto' },
                              minHeight: 150,
                              position: 'relative',
                              overflow: 'hidden'
                            }}
                          >
                            <img
                              src={getImageUrl(article.image)}
                              alt={article.title}
                              style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                transition: 'transform 0.3s ease'
                              }}
                              onError={(e) => {
                                console.log('Admin image failed to load:', article.image, 'Full URL:', getImageUrl(article.image)); // Debug
                                e.target.style.display = 'none';
                              }}
                            />
                          </Box>
                        )}
                        
                        {/* Content Section */}
                        <Box sx={{ 
                          flex: 1, 
                          p: 3,
                          display: 'flex',
                          flexDirection: 'column'
                        }}>
                          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                            <Box>
                              <Typography variant="h6" sx={{ fontWeight: 700, color: 'primary.main', mb: 1 }}>
                                {article.title}
                              </Typography>
                              <Box sx={{ display: 'flex', gap: 1, mb: 1 }}>
                                <Chip 
                                  label={article.category || 'News'} 
                                  size="small" 
                                  sx={{ 
                                    background: 'linear-gradient(45deg, #3498db, #2980b9)',
                                    color: 'white'
                                  }} 
                                />
                                <Chip 
                                  label={article.status || 'Published'} 
                                  size="small" 
                                  sx={{ 
                                    background: 'linear-gradient(45deg, #27ae60, #219653)',
                                    color: 'white'
                                  }} 
                                />
                              </Box>
                              <Typography variant="body2" color="text.secondary">
                                Published: {new Date(article.createdAt).toLocaleDateString()}
                              </Typography>
                            </Box>
                            
                            <Box sx={{ display: 'flex', gap: 1 }}>
                              <Button
                                variant="contained"
                                startIcon={<EditIcon />}
                                color="primary"
                                onClick={() => navigate(`/admin-news/edit/${article._id}`)}
                                sx={{
                                  backgroundColor: 'primary.main',
                                  color: 'white',
                                  '&:hover': {
                                    backgroundColor: 'primary.dark',
                                  }
                                }}
                              >
                                Edit
                              </Button>
                              <Button
                                variant="contained"
                                startIcon={<DeleteIcon />}
                                color="error"
                                onClick={() => handleOpenDeleteDialog(article._id)}
                                sx={{
                                  backgroundColor: 'error.main',
                                  color: 'white',
                                  '&:hover': {
                                    backgroundColor: 'error.dark',
                                  }
                                }}
                              >
                                Delete
                              </Button>
                            </Box>
                          </Box>
                          
                          <Typography 
                            variant="body2" 
                            color="text.secondary" 
                            sx={{ 
                              mb: 2,
                              display: '-webkit-box',
                              WebkitLineClamp: 3,
                              WebkitBoxOrient: 'vertical',
                              overflow: 'hidden'
                            }}
                          >
                            {article.content?.substring(0, 200)}...
                          </Typography>
                        </Box>
                      </Box>
                    </CardContent>
                  </StyledCard>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        )}

        {/* Delete Confirmation Dialog */}
        <Dialog
          open={openDeleteDialog}
          onClose={handleCloseDeleteDialog}
          aria-labelledby="delete-dialog-title"
          aria-describedby="delete-dialog-description"
        >
          <DialogTitle id="delete-dialog-title">
            Confirm Delete
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="delete-dialog-description">
              Are you sure you want to delete this news article? This action cannot be undone.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDeleteDialog}>Cancel</Button>
            <Button onClick={handleDelete} color="error" variant="contained">
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </motion.div>
    </Container>
  );
};

export default AdminNews;