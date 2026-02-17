import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, TextField, Button, Card, CardContent, Grid, Alert, CircularProgress } from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate, useParams } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import PeopleIcon from '@mui/icons-material/People';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { leadersAPI } from '../services/api';

const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: 16,
  boxShadow: '0 12px 40px rgba(0,0,0,0.15)', /* Stronger shadow for better visibility */
  background: '#ffffff', /* Pure white background */
  border: '1px solid rgba(0,0,0,0.1)',
}));

const EditLeader = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    name: '',
    position: '',
    department: '',
    email: '',
    phone: '',
    qualification: '',
    image: null
  });
  const [previewImage, setPreviewImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);
  const navigate = useNavigate();

  // Fetch existing leader data
  useEffect(() => {
    const fetchLeader = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await leadersAPI.getById(id, token);
        const leaderData = response.data;
        
        setFormData({
          name: leaderData.name || '',
          position: leaderData.position || '',
          department: leaderData.department || leaderData.role || '',
          email: leaderData.email || '',
          phone: leaderData.phone || '',
          qualification: leaderData.qualification || '',
          image: null
        });
        
        if (leaderData.imageUrl) {
          setPreviewImage(leaderData.imageUrl);
        }
      } catch (err) {
        setError(err.response?.data?.msg || 'Failed to fetch leader data');
      } finally {
        setInitialLoading(false);
      }
    };

    fetchLeader();
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

    try {
      const token = localStorage.getItem('token');
      const formDataToSend = new FormData();
      
      formDataToSend.append('name', formData.name);
      formDataToSend.append('position', formData.position);
      formDataToSend.append('department', formData.department);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('qualification', formData.qualification);
      if (formData.image) {
        formDataToSend.append('image', formData.image);
      }

      await leadersAPI.update(id, formDataToSend, token);
      
      setSuccess(true);
      setTimeout(() => {
        navigate('/admin-leaders');
      }, 2000);
    } catch (err) {
      setError(err.response?.data?.msg || 'Failed to update leader');
    } finally {
      setLoading(false);
    }
  };

  if (initialLoading) {
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
            Loading leader data...
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
              <PeopleIcon sx={{ fontSize: 40, color: 'white' }} />
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
            Edit Leader
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Update the leader's details
          </Typography>
        </Box>

        {error && (
          <Alert severity="error" sx={{ mb: 3, borderRadius: 2 }}>
            {error}
          </Alert>
        )}

        {success && (
          <Alert severity="success" sx={{ mb: 3, borderRadius: 2 }}>
            Leader updated successfully! Redirecting...
          </Alert>
        )}

        <StyledCard>
          <CardContent sx={{ p: 4 }}>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Full Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    variant="outlined"
                    sx={{ borderRadius: 2 }}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Position"
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    required
                    variant="outlined"
                    sx={{ borderRadius: 2 }}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Department/Role"
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    variant="outlined"
                    sx={{ borderRadius: 2 }}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    variant="outlined"
                    sx={{ borderRadius: 2 }}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Phone Number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    variant="outlined"
                    sx={{ borderRadius: 2 }}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Qualification"
                    name="qualification"
                    value={formData.qualification}
                    onChange={handleChange}
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
                        {previewImage ? 'Change Photo' : 'Upload Leader Photo'}
                      </Button>
                    </label>
                    {previewImage && (
                      <Typography variant="body2" sx={{ mt: 1, color: 'text.secondary' }}>
                        Click to change the photo
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
                      {loading ? <CircularProgress size={24} sx={{ color: 'white' }} /> : 'Update Leader'}
                    </Button>
                    <Button
                      variant="outlined"
                      onClick={() => navigate('/admin-leaders')}
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

export default EditLeader;