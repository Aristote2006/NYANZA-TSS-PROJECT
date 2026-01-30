import React from 'react';
import { Container, Typography, Box, Card, CardContent, Button, TextField, Avatar, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';

const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: 16,
  boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
  transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
  },
}));

const AdminProfile = () => {
  // Mock admin user data
  const adminUser = {
    name: 'Admin User',
    email: 'admin@nyanzatss.edu.ke',
    phone: '+254 712 345 678',
    position: 'System Administrator',
    department: 'IT Department',
    joinDate: 'January 1, 2024',
    avatar: null // In a real app, this would be an image URL
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
                boxShadow: '0 8px 20px rgba(44, 62, 80, 0.3)'
              }}
            >
              <AccountCircleIcon sx={{ fontSize: 40, color: 'white' }} />
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
            Profile Settings
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Manage your account information and settings
          </Typography>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <StyledCard sx={{ 
                borderRadius: 3, 
                background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(250,250,250,0.9) 100%)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.2)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                textAlign: 'center',
                p: 3
              }}>
                <Avatar 
                  sx={{ 
                    width: 120, 
                    height: 120, 
                    bgcolor: 'primary.main',
                    mx: 'auto',
                    fontSize: '3rem',
                    mb: 2
                  }}
                >
                  {adminUser.name.charAt(0)}
                </Avatar>
                <Typography variant="h5" sx={{ fontWeight: 700, color: 'primary.main', mb: 1 }}>
                  {adminUser.name}
                </Typography>
                <Typography variant="h6" color="text.secondary" sx={{ mb: 1 }}>
                  {adminUser.position}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {adminUser.department}
                </Typography>
                
                <Button
                  variant="contained"
                  startIcon={<EditIcon />}
                  sx={{
                    mt: 3,
                    background: 'linear-gradient(45deg, #2c3e50, #34495e)',
                    '&:hover': {
                      background: 'linear-gradient(45deg, #1a252f, #2c3e50)',
                    }
                  }}
                >
                  Change Photo
                </Button>
              </StyledCard>
            </motion.div>
          </Grid>
          
          <Grid item xs={12} md={8}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
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
                    Personal Information
                  </Typography>
                  
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Full Name"
                        defaultValue={adminUser.name}
                        variant="outlined"
                        InputProps={{
                          startAdornment: (
                            <AccountCircleIcon sx={{ mr: 1, color: 'primary.main' }} />
                          ),
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Email Address"
                        defaultValue={adminUser.email}
                        variant="outlined"
                        InputProps={{
                          startAdornment: (
                            <EmailIcon sx={{ mr: 1, color: 'primary.main' }} />
                          ),
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Phone Number"
                        defaultValue={adminUser.phone}
                        variant="outlined"
                        InputProps={{
                          startAdornment: (
                            <PhoneIcon sx={{ mr: 1, color: 'primary.main' }} />
                          ),
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Position"
                        defaultValue={adminUser.position}
                        variant="outlined"
                        InputProps={{
                          startAdornment: (
                            <LocationOnIcon sx={{ mr: 1, color: 'primary.main' }} />
                          ),
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Department"
                        defaultValue={adminUser.department}
                        variant="outlined"
                        InputProps={{
                          startAdornment: (
                            <LocationOnIcon sx={{ mr: 1, color: 'primary.main' }} />
                          ),
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Join Date"
                        defaultValue={adminUser.joinDate}
                        variant="outlined"
                        disabled
                        InputProps={{
                          startAdornment: (
                            <LocationOnIcon sx={{ mr: 1, color: 'primary.main' }} />
                          ),
                        }}
                      />
                    </Grid>
                  </Grid>
                  
                  <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 4, gap: 2 }}>
                    <Button
                      variant="outlined"
                      component={Link}
                      to="/admin-dashboard"
                      sx={{
                        borderColor: 'primary.main',
                        color: 'primary.main',
                        '&:hover': {
                          backgroundColor: 'primary.light',
                          borderColor: 'primary.dark',
                        }
                      }}
                    >
                      Cancel
                    </Button>
                    <Button
                      variant="contained"
                      startIcon={<SaveIcon />}
                      sx={{
                        background: 'linear-gradient(45deg, #27ae60, #2ecc71)',
                        '&:hover': {
                          background: 'linear-gradient(45deg, #219653, #27ae60)',
                        }
                      }}
                    >
                      Save Changes
                    </Button>
                  </Box>
                </CardContent>
              </StyledCard>
            </motion.div>
          </Grid>
        </Grid>
      </motion.div>
    </Container>
  );
};

export default AdminProfile;