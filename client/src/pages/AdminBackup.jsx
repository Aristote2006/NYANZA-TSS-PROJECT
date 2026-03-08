import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, Card, CardContent, Button, LinearProgress, Alert, CircularProgress, Snackbar, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import BackupIcon from '@mui/icons-material/Backup';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import ScheduleIcon from '@mui/icons-material/Schedule';
import DeleteIcon from '@mui/icons-material/Delete';
import RestoreIcon from '@mui/icons-material/Restore';
import { backupAPI } from '../services/api';

const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: 16,
  boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
  transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
  },
}));

const AdminBackup = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [backups, setBackups] = useState([]);
  const [creatingBackup, setCreatingBackup] = useState(false);
  const [progress, setProgress] = useState(0);
  const [selectedBackup, setSelectedBackup] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogType, setDialogType] = useState(null); // 'delete' or 'restore'

  useEffect(() => {
    fetchBackups();
  }, []);

  const fetchBackups = async () => {
    try {
      const token = localStorage.getItem('token') || localStorage.getItem('adminToken');
      
      if (!token) {
        setError('No authentication token found. Please log in again.');
        setTimeout(() => navigate('/admin-login'), 2000);
        return;
      }

      const response = await backupAPI.getAll(token);
      setBackups(response.data);
      setLoading(false);
    } catch (err) {
      console.error('Error fetching backups:', err);
      setError('Failed to load backup data. Please try again later.');
      setLoading(false);
    }
  };

  const handleCreateBackup = async (type = 'full') => {
    try {
      setCreatingBackup(true);
      setProgress(0);
      const token = localStorage.getItem('token') || localStorage.getItem('adminToken');
      
      if (!token) {
        setError('No authentication token found.');
        return;
      }

      // Simulate progress
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 90) {
            clearInterval(interval);
            return prev;
          }
          return prev + 10;
        });
      }, 200);

      const response = await backupAPI.create(type, token);
      
      clearInterval(interval);
      setProgress(100);
      
      setTimeout(() => {
        setCreatingBackup(false);
        setProgress(0);
        setSuccessMessage('Backup created successfully!');
        fetchBackups();
        setTimeout(() => setSuccessMessage(''), 3000);
      }, 500);
    } catch (err) {
      console.error('Error creating backup:', err);
      setCreatingBackup(false);
      setProgress(0);
      setError('Failed to create backup. Please try again.');
      setTimeout(() => setError(''), 3000);
    }
  };

  const handleDownload = async (filename) => {
    try {
      const token = localStorage.getItem('token') || localStorage.getItem('adminToken');
      if (!token) {
        setError('No authentication token found.');
        return;
      }

      const response = await backupAPI.download(filename, token);
      
      // Create blob and download
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', filename);
      document.body.appendChild(link);
      link.click();
      link.remove();
      
      setSuccessMessage('Backup downloaded successfully!');
      setTimeout(() => setSuccessMessage(''), 3000);
    } catch (err) {
      console.error('Error downloading backup:', err);
      setError('Failed to download backup.');
      setTimeout(() => setError(''), 3000);
    }
  };

  const handleDeleteClick = (backup) => {
    setSelectedBackup(backup);
    setDialogType('delete');
    setDialogOpen(true);
  };

  const handleDeleteConfirm = async () => {
    try {
      const token = localStorage.getItem('token') || localStorage.getItem('adminToken');
      if (!token) {
        setError('No authentication token found.');
        setDialogOpen(false);
        return;
      }

      await backupAPI.delete(selectedBackup.filename, token);
      setSuccessMessage('Backup deleted successfully!');
      fetchBackups();
      setDialogOpen(false);
      setSelectedBackup(null);
      setTimeout(() => setSuccessMessage(''), 3000);
    } catch (err) {
      console.error('Error deleting backup:', err);
      setError('Failed to delete backup.');
      setDialogOpen(false);
      setTimeout(() => setError(''), 3000);
    }
  };

  const handleRestoreClick = (backup) => {
    setSelectedBackup(backup);
    setDialogType('restore');
    setDialogOpen(true);
  };

  const handleRestoreConfirm = async () => {
    try {
      const token = localStorage.getItem('token') || localStorage.getItem('adminToken');
      if (!token) {
        setError('No authentication token found.');
        setDialogOpen(false);
        return;
      }

      await backupAPI.restore(selectedBackup.filename, token);
      setSuccessMessage('System restored successfully!');
      fetchBackups();
      setDialogOpen(false);
      setSelectedBackup(null);
      setTimeout(() => setSuccessMessage(''), 3000);
    } catch (err) {
      console.error('Error restoring backup:', err);
      setError('Failed to restore backup.');
      setDialogOpen(false);
      setTimeout(() => setError(''), 3000);
    }
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setSelectedBackup(null);
    setDialogType(null);
  };

  if (loading) {
    return (
      <Container maxWidth="lg" sx={{ py: 4, display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
        <CircularProgress size={60} />
      </Container>
    );
  }

  if (error && backups.length === 0) {
    return (
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>
        <Button variant="contained" component={Link} to="/admin-dashboard">
          Back to Dashboard
        </Button>
      </Container>
    );
  }

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
                boxShadow: '0 8px 20px rgba(243, 156, 18, 0.3)'
              }}
            >
              <BackupIcon sx={{ fontSize: 40, color: 'white' }} />
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
            Backup Management
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Manage and monitor system backups
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          {backups.length > 0 && (
            <Alert severity="info" sx={{ mb: 2 }}>
              Last backup: {new Date(backups[0].createdAt).toLocaleString()} ({backups[0].size})
            </Alert>
          )}
          
          <StyledCard sx={{ 
            borderRadius: 3, 
            background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(250,250,250,0.9) 100%)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.2)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
            p: 3,
            mb: 3
          }}>
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: 700, color: 'primary.main', mb: 3 }}>
                Create New Backup
              </Typography>
              
              {creatingBackup && (
                <Box sx={{ mb: 3 }}>
                  <LinearProgress variant="determinate" value={progress} sx={{ mb: 1 }} />
                  <Typography variant="body2" color="text.secondary">Creating backup... {progress}%</Typography>
                </Box>
              )}
              
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button
                  variant="contained"
                  startIcon={<CloudUploadIcon />}
                  onClick={() => handleCreateBackup('full')}
                  disabled={creatingBackup}
                  sx={{
                    background: 'linear-gradient(45deg, #f39c12, #d35400)',
                    '&:hover': {
                      background: 'linear-gradient(45deg, #d35400, #ba4a00)',
                    }
                  }}
                >
                  Create Full Backup
                </Button>
                <Button
                  variant="outlined"
                  startIcon={<ScheduleIcon />}
                  sx={{
                    borderColor: 'primary.main',
                    color: 'primary.main',
                    '&:hover': {
                      backgroundColor: 'primary.light',
                      borderColor: 'primary.dark',
                    }
                  }}
                >
                  Schedule Backup
                </Button>
                <Button
                  variant="outlined"
                  startIcon={<RestoreIcon />}
                  sx={{
                    borderColor: 'secondary.main',
                    color: 'secondary.main',
                    '&:hover': {
                      backgroundColor: 'secondary.light',
                      borderColor: 'secondary.dark',
                    }
                  }}
                >
                  Restore System
                </Button>
              </Box>
            </CardContent>
          </StyledCard>
        </Box>

        <StyledCard sx={{ 
          borderRadius: 3, 
          background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(250,250,250,0.9) 100%)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255,255,255,0.2)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
          p: 3
        }}>
          <CardContent>
            <Typography variant="h6" sx={{ fontWeight: 700, color: 'primary.main', mb: 3 }}>
              Previous Backups
            </Typography>
            
            {backups.length === 0 ? (
              <Alert severity="info">No backups found. Create your first backup to get started.</Alert>
            ) : (
              <Box>
                {backups.map((backup) => (
                  <Box 
                    key={backup.id} 
                    sx={{ 
                      display: 'flex', 
                      justifyContent: 'space-between', 
                      alignItems: 'center', 
                      p: 2, 
                      mb: 2, 
                      borderRadius: 2, 
                      bgcolor: 'background.paper',
                      border: '1px solid',
                      borderColor: 'divider'
                    }}
                  >
                    <Box>
                      <Typography variant="body1" sx={{ fontWeight: 600 }}>
                        {backup.type} - {backup.date}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Size: {backup.size} • File: {backup.filename}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                      <Button
                        variant="outlined"
                        size="small"
                        startIcon={<CloudDownloadIcon />}
                        onClick={() => handleDownload(backup.filename)}
                        sx={{
                          borderColor: 'secondary.main',
                          color: 'secondary.main',
                          '&:hover': {
                            backgroundColor: 'secondary.light',
                            borderColor: 'secondary.dark',
                          }
                        }}
                      >
                        Download
                      </Button>
                      <Button
                        variant="outlined"
                        size="small"
                        startIcon={<RestoreIcon />}
                        onClick={() => handleRestoreClick(backup)}
                        sx={{
                          borderColor: 'primary.main',
                          color: 'primary.main',
                          '&:hover': {
                            backgroundColor: 'primary.light',
                            borderColor: 'primary.dark',
                          }
                        }}
                      >
                        Restore
                      </Button>
                      <Button
                        variant="outlined"
                        size="small"
                        startIcon={<DeleteIcon />}
                        onClick={() => handleDeleteClick(backup)}
                        color="error"
                        sx={{
                          '&:hover': {
                            backgroundColor: 'error.light',
                          }
                        }}
                      >
                        Delete
                      </Button>
                    </Box>
                  </Box>
                ))}
              </Box>
            )}
          </CardContent>
        </StyledCard>
        
        {/* Dialog for delete confirmation */}
        <Dialog open={dialogOpen && dialogType === 'delete'} onClose={handleCloseDialog}>
          <DialogTitle>Confirm Delete</DialogTitle>
          <DialogContent>
            Are you sure you want to delete this backup? This action cannot be undone.
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog} color="primary">
              Cancel
            </Button>
            <Button onClick={handleDeleteConfirm} color="error" variant="contained">
              Delete
            </Button>
          </DialogActions>
        </Dialog>
        
        {/* Dialog for restore confirmation */}
        <Dialog open={dialogOpen && dialogType === 'restore'} onClose={handleCloseDialog}>
          <DialogTitle>Confirm Restore</DialogTitle>
          <DialogContent>
            <Alert severity="warning" sx={{ mb: 2 }}>
              Warning: Restoring from a backup will replace all current data with the backed up data.
            </Alert>
            Are you sure you want to restore from this backup?
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog} color="primary">
              Cancel
            </Button>
            <Button onClick={handleRestoreConfirm} color="warning" variant="contained">
              Restore
            </Button>
          </DialogActions>
        </Dialog>
        
        <Snackbar 
          open={!!successMessage} 
          autoHideDuration={3000} 
          onClose={() => setSuccessMessage('')}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert severity="success" sx={{ width: '100%' }}>
            {successMessage}
          </Alert>
        </Snackbar>
        
        <Snackbar 
          open={!!error && (!adminUser || backups.length > 0)} 
          autoHideDuration={3000} 
          onClose={() => setError('')}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert severity="error" sx={{ width: '100%' }}>
            {error}
          </Alert>
        </Snackbar>
      </motion.div>
    </Container>
  );
};

export default AdminBackup;