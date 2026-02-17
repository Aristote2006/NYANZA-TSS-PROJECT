import React, { useState, useEffect } from 'react';
import { 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  Button, 
  Box,
  CircularProgress,
  Alert,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText
} from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import { programsAPI } from '../services/api';

// Styled components
const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: 16,
  boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 12px 40px rgba(0,0,0,0.15)',
  },
  background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(250,250,250,0.9) 100%)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255,255,255,0.2)',
}));

const AdminPrograms = () => {
  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [deleteItemId, setDeleteItemId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const response = await programsAPI.getAll();
        setPrograms(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching programs:', err);
        setError('Failed to load programs');
        setLoading(false);
      }
    };

    fetchPrograms();
  }, []);

  const handleDelete = async () => {
    try {
      const token = localStorage.getItem('token');
      
      // Debug: Check if token exists
      console.log('Token from localStorage:', token ? 'Token exists' : 'No token found');
      console.log('Token length:', token ? token.length : 'N/A');
      
      if (!token) {
        setError('No authentication token found. Please log in again.');
        setTimeout(() => {
          navigate('/admin-login');
        }, 2000);
        return;
      }
      
      // Additional token validation
      try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        const exp = payload.exp;
        const now = Math.floor(Date.now() / 1000);
        
        if (exp < now) {
          console.log('Token expired');
          setError('Session expired. Please log in again.');
          localStorage.removeItem('token');
          setTimeout(() => {
            navigate('/admin-login');
          }, 2000);
          return;
        }
      } catch (e) {
        console.log('Invalid token format');
        setError('Invalid session. Please log in again.');
        localStorage.removeItem('token');
        setTimeout(() => {
          navigate('/admin-login');
        }, 2000);
        return;
      }
      
      console.log('Attempting to delete program with ID:', deleteItemId);
      await programsAPI.delete(deleteItemId, token);
      setPrograms(programs.filter(program => program._id !== deleteItemId));
      setSuccess('Program deleted successfully');
      handleCloseDeleteDialog();
    } catch (err) {
      console.error('Delete error details:', err);
      console.error('Error response:', err.response);
      if (err.response?.status === 401) {
        setError('Authentication failed. Please log in again.');
        localStorage.removeItem('token');
        setTimeout(() => {
          navigate('/admin-login');
        }, 2000);
      } else {
        setError(err.response?.data?.msg || 'Failed to delete program');
      }
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

  // Clear success message after 3 seconds
  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        setSuccess('');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [success]);

  // Clear error message after 5 seconds
  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError('');
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  return (
    <Container maxWidth="lg" sx={{ py: 4, background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)' }}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Box sx={{ mb: 4, textAlign: 'center' }}>
          <Typography 
            variant="h3" 
            component="h1" 
            sx={{ 
              fontWeight: 800, 
              background: 'linear-gradient(45deg, #2c3e50, #34495e)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 2
            }}
          >
            Manage Programs
          </Typography>
          <Typography variant="h6" color="text.secondary">
            View, edit, and delete existing programs
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

        {/* Add New Program Button */}
        <Box sx={{ mb: 4, textAlign: 'center' }}>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={() => navigate('/admin-programs/add')}
            sx={{
              py: 1.5,
              px: 4,
              background: 'linear-gradient(45deg, #2c3e50, #34495e)',
              '&:hover': {
                background: 'linear-gradient(45deg, #1a252f, #2c3e50)',
              },
              borderRadius: 2,
              fontWeight: 600,
              fontSize: '1rem'
            }}
          >
            Add New Program
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
              Loading programs...
            </Typography>
          </Box>
        ) : programs.length === 0 ? (
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
              No programs found
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Add your first program using the "Add New Program" button above
            </Typography>
          </Box>
        ) : (
          <Grid container spacing={3}>
            {programs.map((program, index) => (
              <Grid item xs={12} md={6} lg={4} key={program._id || program.id}>
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
                  }}>
                    <CardContent sx={{ 
                      flexGrow: 1, 
                      p: 3,
                      display: 'flex',
                      flexDirection: 'column'
                    }}>
                      <Box sx={{ 
                        mb: 2, 
                        textAlign: 'center',
                        minHeight: '60px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        <Typography 
                          variant="h6" 
                          sx={{ 
                            fontWeight: 700, 
                            color: '#2c3e50',
                            fontSize: '1.1rem',
                            lineHeight: 1.3
                          }}
                        >
                          {program.title}
                        </Typography>
                      </Box>
                      
                      <Box sx={{ mb: 2, flexGrow: 1 }}>
                        <Typography 
                          variant="body2" 
                          color="text.secondary" 
                          sx={{ 
                            mb: 1,
                            display: '-webkit-box',
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden'
                          }}
                        >
                          {program.description}
                        </Typography>
                        <Typography 
                          variant="body2" 
                          color="primary" 
                          sx={{ fontWeight: 600 }}
                        >
                          Duration: {program.duration}
                        </Typography>
                      </Box>
                      
                      <Box sx={{ 
                        display: 'flex', 
                        gap: 1,
                        mt: 'auto'
                      }}>
                        <Button
                          variant="contained"
                          startIcon={<EditIcon />}
                          color="primary"
                          onClick={() => navigate(`/admin-programs/edit/${program._id}`)}
                          sx={{
                            flex: 1,
                            backgroundColor: 'primary.main',
                            color: 'white',
                            minWidth: '80px',
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
                          onClick={() => handleOpenDeleteDialog(program._id || program.id)}
                          sx={{
                            flex: 1,
                            backgroundColor: 'error.main',
                            color: 'white',
                            minWidth: '80px',
                            '&:hover': {
                              backgroundColor: 'error.dark',
                            }
                          }}
                        >
                          Delete
                        </Button>
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
            Confirm Deletion
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="delete-dialog-description">
              Are you sure you want to delete this program? This action cannot be undone.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDeleteDialog} color="primary">
              Cancel
            </Button>
            <Button 
              onClick={handleDelete} 
              color="error" 
              variant="contained"
              autoFocus
            >
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </motion.div>
    </Container>
  );
};

export default AdminPrograms;