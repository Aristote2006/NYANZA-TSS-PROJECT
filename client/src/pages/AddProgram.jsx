import React, { useState } from 'react';
import { Container, Typography, Box, TextField, Button, Card, CardContent, Grid, Alert, CircularProgress } from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import SchoolIcon from '@mui/icons-material/School';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { programsAPI } from '../services/api';

const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: 16,
  boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
  background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(250,250,250,0.9) 100%)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255,255,255,0.2)',
}));

const AddProgram = () => {
  const [formData, setFormData] = useState({
    title: '',
    duration: '',
    description: '',
    requirements: '',
    image: null
  });
  const [previewImage, setPreviewImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

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

    try {
      const token = localStorage.getItem('token');
      const formDataToSend = new FormData();
      
      formDataToSend.append('title', formData.title);
      formDataToSend.append('duration', formData.duration);
      formDataToSend.append('description', formData.description);
      formDataToSend.append('requirements', formData.requirements);
      if (formData.image) {
        formDataToSend.append('image', formData.image);
      }

      await programsAPI.create(formDataToSend, token);
      
      setSuccess(true);
      setTimeout(() => {
        navigate('/admin-programs');
      }, 2000);
    } catch (err) {
      setError(err.response?.data?.msg || 'Failed to add program');
    } finally {
      setLoading(false);
    }
  };

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
              <SchoolIcon sx={{ fontSize: 40, color: 'white' }} />
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
            Add New Program
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Create a new academic program
          </Typography>
        </Box>

        {error && (
          <Alert severity="error" sx={{ mb: 3, borderRadius: 2 }}>
            {error}
          </Alert>
        )}

        {success && (
          <Alert severity="success" sx={{ mb: 3, borderRadius: 2 }}>
            Program added successfully! Redirecting...
          </Alert>
        )}

        <StyledCard>
          <CardContent sx={{ p: 4 }}>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Program Title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                    variant="outlined"
                    sx={{ borderRadius: 2 }}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Program Duration"
                    name="duration"
                    value={formData.duration}
                    onChange={handleChange}
                    required
                    placeholder="e.g., 4 years, 2 semesters"
                    variant="outlined"
                    sx={{ borderRadius: 2 }}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Small Description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                    multiline
                    rows={3}
                    variant="outlined"
                    sx={{ borderRadius: 2 }}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Requirements"
                    name="requirements"
                    value={formData.requirements}
                    onChange={handleChange}
                    required
                    multiline
                    rows={4}
                    placeholder="List the requirements for this program..."
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
                          maxHeight: '200px', 
                          borderRadius: '8px',
                          marginBottom: '16px'
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
                        {previewImage ? 'Change Image' : 'Upload Program Image'}
                      </Button>
                    </label>
                    {previewImage && (
                      <Typography variant="body2" sx={{ mt: 1, color: 'text.secondary' }}>
                        Click to change the image
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
                      {loading ? <CircularProgress size={24} sx={{ color: 'white' }} /> : 'Add Program'}
                    </Button>
                    <Button
                      variant="outlined"
                      onClick={() => navigate('/admin-programs')}
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

export default AddProgram;