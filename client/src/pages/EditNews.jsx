import React, { useState, useEffect } from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  TextField, 
  Button, 
  Card, 
  CardContent, 
  Grid, 
  Alert, 
  CircularProgress,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate, useParams } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { newsAPI } from '../services/api';

const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: 16,
  boxShadow: '0 12px 40px rgba(0,0,0,0.15)', /* Stronger shadow for better visibility */
  background: '#ffffff', /* Pure white background */
  border: '1px solid rgba(0,0,0,0.1)',
}));

const EditNews = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    category: 'news',
    image: null
  });
  const [previewImage, setPreviewImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        const response = await newsAPI.getById(id);
        const newsData = response.data;
        
        setFormData({
          title: newsData.title || '',
          content: newsData.content || '',
          category: newsData.category || 'news',
          image: null
        });
        
        // Set preview image if exists
        if (newsData.image) {
          setPreviewImage(newsData.image);
        }
      } catch (err) {
        setError('Failed to load news article');
        console.error('Error fetching news:', err);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchNews();
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        image: file
      }));
      
      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    // Validation
    if (!formData.title.trim()) {
      setError('News title is required');
      setLoading(false);
      return;
    }
    if (!formData.content.trim()) {
      setError('News content is required');
      setLoading(false);
      return;
    }

    try {
      const token = localStorage.getItem('token');
      const formDataToSend = new FormData();
      
      formDataToSend.append('title', formData.title);
      formDataToSend.append('content', formData.content);
      formDataToSend.append('category', formData.category);
      if (formData.image) {
        formDataToSend.append('image', formData.image);
      }

      await newsAPI.update(id, formDataToSend, token);
      
      setSuccess(true);
      setTimeout(() => {
        navigate('/admin-news');
      }, 2000);
    } catch (err) {
      setError(err.response?.data?.msg || 'Failed to update news article');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <Container maxWidth="md" sx={{ py: 4 }}>
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
            Loading news article...
          </Typography>
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Box 
              sx={{ 
                width: 80, 
                height: 80, 
                bgcolor: 'primary.main', 
                mx: 'auto', 
                mb: 2,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 8px 20px rgba(44, 62, 80, 0.3)'
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
            Edit News Article
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Update the news article details
          </Typography>
        </Box>

        {error && (
          <Alert severity="error" sx={{ mb: 3, borderRadius: 2 }}>
            {error}
          </Alert>
        )}

        {success && (
          <Alert severity="success" sx={{ mb: 3, borderRadius: 2 }}>
            News article updated successfully! Redirecting...
          </Alert>
        )}

        <StyledCard>
          <CardContent sx={{ p: 4 }}>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="News Title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                    variant="outlined"
                    sx={{ borderRadius: 2 }}
                  />
                </Grid>

                <Grid item xs={12}>
                  <FormControl fullWidth variant="outlined" sx={{ borderRadius: 2 }}>
                    <InputLabel>Category</InputLabel>
                    <Select
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      label="Category"
                      sx={{ borderRadius: 2 }}
                    >
                      <MenuItem value="news">News</MenuItem>
                      <MenuItem value="announcement">Announcement</MenuItem>
                      <MenuItem value="event">Event</MenuItem>
                      <MenuItem value="achievement">Achievement</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="News Content"
                    name="content"
                    value={formData.content}
                    onChange={handleChange}
                    required
                    multiline
                    rows={6}
                    placeholder="Write the news article content here..."
                    variant="outlined"
                    sx={{ borderRadius: 2 }}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Box sx={{ 
                    border: '2px dashed #ccc', 
                    borderRadius: 2, 
                    p: 3, 
                    textAlign: 'center',
                    backgroundColor: previewImage ? 'transparent' : '#fafafa'
                  }}>
                    {previewImage ? (
                      <img 
                        src={previewImage} 
                        alt="Preview" 
                        style={{ 
                          maxWidth: '100%', 
                          maxHeight: '300px',
                          width: 'auto',
                          height: 'auto',
                          borderRadius: '8px',
                          marginBottom: '16px',
                          objectFit: 'contain',
                          boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                        }} 
                      />
                    ) : (
                      <CloudUploadIcon sx={{ fontSize: 48, color: '#ccc', mb: 2 }} />
                    )}
                    <input
                      accept="image/*"
                      style={{ display: 'none' }}
                      id="image-upload"
                      type="file"
                      onChange={handleImageChange}
                    />
                    <label htmlFor="image-upload">
                      <Button 
                        variant="outlined" 
                        component="span"
                        startIcon={<CloudUploadIcon />}
                        sx={{ 
                          borderRadius: 2,
                          borderColor: 'primary.main',
                          color: 'primary.main'
                        }}
                      >
                        {previewImage ? 'Change Image' : 'Upload News Image'}
                      </Button>
                    </label>
                    <Typography variant="body2" sx={{ mt: 1, color: 'text.secondary' }}>
                      {previewImage ? 'Click to change the image' : 'Upload an image for this news article (optional)'}
                    </Typography>
                    {previewImage && (
                      <Typography variant="caption" sx={{ mt: 1, display: 'block', color: 'text.secondary' }}>
                        Image will be displayed with high quality on the news page
                      </Typography>
                    )}
                  </Box>
                </Grid>

                <Grid item xs={12}>
                  <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
                    <Button
                      type="submit"
                      variant="contained"
                      disabled={loading}
                      sx={{
                        flex: 1,
                        py: 1.5,
                        background: 'linear-gradient(45deg, #2c3e50, #34495e)',
                        '&:hover': {
                          background: 'linear-gradient(45deg, #1a252f, #2c3e50)',
                        },
                        borderRadius: 2
                      }}
                    >
                      {loading ? <CircularProgress size={24} sx={{ color: 'white' }} /> : 'Update News'}
                    </Button>
                    <Button
                      variant="outlined"
                      onClick={() => navigate('/admin-news')}
                      sx={{
                        flex: 1,
                        py: 1.5,
                        borderRadius: 2,
                        borderColor: 'error.main',
                        color: 'error.main'
                      }}
                    >
                      Cancel
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </StyledCard>
      </motion.div>
    </Container>
  );
};

export default EditNews;