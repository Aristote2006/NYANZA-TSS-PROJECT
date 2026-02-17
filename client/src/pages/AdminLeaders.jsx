import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, Button, Avatar, Alert, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import PeopleIcon from '@mui/icons-material/People';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { leadersAPI } from '../services/api';

const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: 16,
  boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
  transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
  },
}));

const AdminLeaders = () => {
  const [leaders, setLeaders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [deleteItemId, setDeleteItemId] = useState(null);

  // Fetch leaders from the API
  useEffect(() => {
    const fetchLeaders = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await leadersAPI.getAll(token);
        setLeaders(response.data);
      } catch (err) {
        setError(err.response?.data?.msg || 'Failed to fetch leaders');
      } finally {
        setLoading(false);
      }
    };

    fetchLeaders();
  }, []);

  const handleDelete = async () => {
    try {
      const token = localStorage.getItem('token');
      await leadersAPI.delete(deleteItemId, token);
      setLeaders(leaders.filter(leader => leader._id !== deleteItemId));
      setSuccess('Leader deleted successfully');
      handleCloseDeleteDialog();
    } catch (err) {
      setError(err.response?.data?.msg || 'Failed to delete leader');
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
                bgcolor: 'primary.main', 
                mx: 'auto', 
                mb: 2,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 8px 20px rgba(231, 76, 60, 0.3)'
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
            Leaders Management
          </Typography>
          <Typography variant="h6" color="text.secondary">
            View, edit, and manage school leaders and staff
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
            Leaders ({leaders.length})
          </Typography>
          <Button
            variant="contained"
            component={Link}
            to="/admin-leaders/add"
            startIcon={<AddIcon />}
            sx={{
              background: 'linear-gradient(45deg, #e74c3c, #c0392b)',
              '&:hover': {
                background: 'linear-gradient(45deg, #c0392b, #a93226)',
              }
            }}
          >
            Add New Leader
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
              Loading leaders...
            </Typography>
          </Box>
        ) : leaders.length === 0 ? (
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
              No leaders found
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Add your first leader using the "Add New Leader" button above
            </Typography>
          </Box>
        ) : (
          <Grid container spacing={3}>
            {leaders.map((leader, index) => (
              <Grid item xs={12} md={6} key={leader._id || leader.id}>
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
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <Avatar 
                          sx={{ 
                            width: 60, 
                            height: 60, 
                            bgcolor: 'primary.main',
                            mr: 2,
                            fontSize: '1.5rem'
                          }}
                        >
                          {leader.name?.charAt(0) || 'U'}
                        </Avatar>
                        <Box>
                          <Typography variant="h6" sx={{ fontWeight: 700, color: 'primary.main' }}>
                            {leader.name}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {leader.position}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {leader.department || leader.role}
                          </Typography>
                        </Box>
                      </Box>
                      <Box sx={{ mb: 2 }}>
                        <Typography variant="body2" color="text.secondary">
                          <strong>Email:</strong> {leader.email || 'N/A'}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          <strong>Phone:</strong> {leader.phone || 'N/A'}
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', gap: 1, ml: 2 }}>
                        <Button
                          variant="contained"
                          size="small"
                          startIcon={<EditIcon />}
                          component={Link}
                          to={`/admin-leaders/edit/${leader._id || leader.id}`}
                          sx={{
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
                          size="small"
                          startIcon={<DeleteIcon />}
                          color="error"
                          onClick={() => handleOpenDeleteDialog(leader._id || leader.id)}
                          sx={{
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
            Confirm Delete
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="delete-dialog-description">
              Are you sure you want to delete this leader? This action cannot be undone.
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

export default AdminLeaders;