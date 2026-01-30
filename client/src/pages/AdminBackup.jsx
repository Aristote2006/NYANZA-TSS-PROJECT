import React from 'react';
import { Container, Typography, Box, Card, CardContent, Button, LinearProgress, Alert } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import BackupIcon from '@mui/icons-material/Backup';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import ScheduleIcon from '@mui/icons-material/Schedule';

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
  // Mock backup data
  const backups = [
    { id: 1, date: '2024-01-15 10:30 AM', size: '245 MB', type: 'Full Backup' },
    { id: 2, date: '2024-01-14 10:30 AM', size: '238 MB', type: 'Full Backup' },
    { id: 3, date: '2024-01-13 10:30 AM', size: '235 MB', type: 'Full Backup' },
    { id: 4, date: '2024-01-12 10:30 AM', size: '232 MB', type: 'Full Backup' },
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
          <Alert severity="info" sx={{ mb: 2 }}>
            Last backup: January 15, 2024 at 10:30 AM (245 MB)
          </Alert>
          
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
              
              <Box sx={{ mb: 3 }}>
                <LinearProgress variant="determinate" value={65} sx={{ mb: 1 }} />
                <Typography variant="body2" color="text.secondary">Creating backup... 65%</Typography>
              </Box>
              
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button
                  variant="contained"
                  startIcon={<CloudUploadIcon />}
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
                  startIcon={<CloudDownloadIcon />}
                  sx={{
                    borderColor: 'secondary.main',
                    color: 'secondary.main',
                    '&:hover': {
                      backgroundColor: 'secondary.light',
                      borderColor: 'secondary.dark',
                    }
                  }}
                >
                  Restore from Backup
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
            
            <Box>
              {backups.map((backup, index) => (
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
                      Size: {backup.size}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <Button
                      variant="outlined"
                      size="small"
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
          </CardContent>
        </StyledCard>
        
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Button
            variant="contained"
            component={Link}
            to="/admin-dashboard"
            sx={{
              background: 'linear-gradient(45deg, #2c3e50, #34495e)',
              '&:hover': {
                background: 'linear-gradient(45deg, #1a252f, #2c3e50)',
              }
            }}
          >
            Back to Dashboard
          </Button>
        </Box>
      </motion.div>
    </Container>
  );
};

export default AdminBackup;