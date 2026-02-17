import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, CardHeader, Button, Tabs, Tab, Chip, CircularProgress, Alert, Snackbar, Dialog, DialogTitle, DialogContent, DialogActions, TextField, FormControl, InputLabel, Select, MenuItem, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SchoolIcon from '@mui/icons-material/School';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import PeopleIcon from '@mui/icons-material/People';
import MessageIcon from '@mui/icons-material/Message';
import AssignmentIcon from '@mui/icons-material/Assignment';
import SettingsIcon from '@mui/icons-material/Settings';
import BackupIcon from '@mui/icons-material/Backup';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import GroupIcon from '@mui/icons-material/Group';
import EventNoteIcon from '@mui/icons-material/EventNote';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import AddIcon from '@mui/icons-material/Add';
import RefreshIcon from '@mui/icons-material/Refresh';
import LogoutIcon from '@mui/icons-material/Logout';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import CloseIcon from '@mui/icons-material/Close';

const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: 16,
  boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
  transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 25px 50px rgba(0,0,0,0.2)',
  },
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '4px',
    background: 'linear-gradient(90deg, #3498db, #2c3e50)',
  },
}));

const StyledPaper = styled(Card)(({ theme }) => ({
  borderRadius: 16,
  background: 'linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(250,250,250,0.95) 100%)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255,255,255,0.3)',
  boxShadow: '0 15px 35px rgba(0,0,0,0.1)',
  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 20px 45px rgba(0,0,0,0.15)',
  },
}));

const StyledDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    borderRadius: 20,
    background: 'linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(250,250,250,0.95) 100%)',
    backdropFilter: 'blur(15px)',
    border: '1px solid rgba(255,255,255,0.3)',
    boxShadow: '0 25px 50px rgba(0,0,0,0.2)',
    maxWidth: '800px',
    width: '90%',
  },
}));

const FormContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: 16,
  background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(248,249,250,0.8) 100%)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255,255,255,0.2)',
  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
}));

const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: 12,
  padding: '12px 24px',
  fontWeight: 600,
  textTransform: 'none',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 8px 25px rgba(0,0,0,0.2)',
  },
}));

const AdminDashboard = () => {
  const [tabValue, setTabValue] = useState(0);
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });
  const [openModal, setOpenModal] = useState(false);
  const [modalType, setModalType] = useState(''); // 'program', 'news', 'leader'
  const [formData, setFormData] = useState({
    title: '',
    duration: '',
    description: '',
    requirements: '',
    image: null,
    name: '',
    position: '',
    phone: '',
    qualification: '',
    content: '',
    category: '',
    author: '',
    biography: '',
  });
  const [previewImage, setPreviewImage] = useState(null);
  
  const location = useLocation();
  const navigate = useNavigate();

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const showSnackbar = (message, severity = 'success') => {
    setSnackbar({ open: true, message, severity });
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  // Simulate data fetching
  const refreshData = async () => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      showSnackbar('Dashboard data refreshed successfully!', 'success');
    } catch (error) {
      showSnackbar('Failed to refresh data', 'error');
    } finally {
      setLoading(false);
    }
  };

  // Enhanced recent activity with more realistic data
  const [recentActivity, setRecentActivity] = useState([
    { id: 1, action: 'Added new Computer Science program', user: 'Admin', time: '2 hours ago', type: 'program', status: 'completed' },
    { id: 2, action: 'Published quarterly newsletter', user: 'Admin', time: '5 hours ago', type: 'news', status: 'published' },
    { id: 3, action: 'Updated leadership team information', user: 'Admin', time: 'Yesterday', type: 'leader', status: 'updated' },
    { id: 4, action: 'Responded to parent inquiry', user: 'Admin', time: '2 days ago', type: 'message', status: 'responded' },
    { id: 5, action: 'Created new user account', user: 'Admin', time: '3 days ago', type: 'admin', status: 'created' },
  ]);

  const getChipColor = (type) => {
    switch(type) {
      case 'program': return 'primary';
      case 'news': return 'secondary';
      case 'leader': return 'primary';
      case 'message': return 'secondary';
      case 'admin': return 'info';
      default: return 'default';
    }
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'completed': return '#27ae60';
      case 'published': return '#3498db';
      case 'updated': return '#f39c12';
      case 'responded': return '#9b59b6';
      case 'created': return '#1abc9c';
      default: return '#95a5a6';
    }
  };

  const handleLogout = () => {
    showSnackbar('Logging out...', 'info');
    setTimeout(() => {
      navigate('/admin-login');
    }, 1000);
  };

  const handleOpenModal = (type) => {
    setModalType(type);
    setOpenModal(true);
    // Reset form data
    setFormData({
      title: '',
      duration: '',
      description: '',
      requirements: '',
      image: null,
      name: '',
      position: '',
      phone: '',
      qualification: '',
      content: '',
      category: '',
      author: '',
      biography: '',
    });
    setPreviewImage(null);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setModalType('');
  };

  const handleFormChange = (e) => {
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
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      showSnackbar(`${modalType.charAt(0).toUpperCase() + modalType.slice(1)} added successfully!`, 'success');
      handleCloseModal();
    } catch (error) {
      showSnackbar(`Failed to add ${modalType}`, 'error');
    } finally {
      setLoading(false);
    }
  };

  // Auto-refresh data every 30 seconds (simulated)
  useEffect(() => {
    const interval = setInterval(() => {
      setRecentActivity(prev => [
        {
          id: Date.now(),
          action: 'System auto-refresh completed',
          user: 'System',
          time: 'Just now',
          type: 'admin',
          status: 'completed'
        },
        ...prev.slice(0, 4)
      ]);
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box sx={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
      pt: 2,
      pb: 4
    }}>
      <Container maxWidth="xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Enhanced Header with Actions */}
          <Box sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between', 
            alignItems: { xs: 'flex-start', sm: 'center' },
            gap: 3,
            mb: 4,
            p: { xs: 2, sm: 3, md: 4 },
            borderRadius: 3,
            background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(250,250,250,0.9) 100%)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.3)',
            boxShadow: '0 15px 35px rgba(0,0,0,0.1)'
          }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
              <Box 
                sx={{ 
                  width: { xs: 60, sm: 70, md: 80 }, 
                  height: { xs: 60, sm: 70, md: 80 }, 
                  borderRadius: '50%', 
                  background: 'linear-gradient(135deg, #3498db, #2c3e50)',
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  boxShadow: '0 10px 25px rgba(52, 152, 219, 0.3)',
                  flexShrink: 0
                }}
              >
                <DashboardIcon sx={{ color: 'white', fontSize: { xs: 30, sm: 35, md: 40 } }} />
              </Box>
              <Box>
                <Typography 
                  variant="h4" 
                  component="h1" 
                  sx={{ 
                    fontWeight: 700, 
                    background: 'linear-gradient(45deg, #2c3e50, #3498db)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' },
                    mb: 0.5
                  }}
                >
                  Admin Dashboard
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Box 
                    sx={{ 
                      width: 10, 
                      height: 10, 
                      borderRadius: '50%', 
                      backgroundColor: '#27ae60',
                      boxShadow: '0 0 10px rgba(39, 174, 96, 0.5)'
                    }} 
                  />
                  <Typography variant="body2" color="text.secondary">
                    System Status: Operational
                  </Typography>
                </Box>
              </Box>
            </Box>
                        
            <Box sx={{ 
              display: 'flex', 
              gap: 1, 
              flexWrap: 'wrap',
              '& > *': { minWidth: { xs: '100%', sm: 'auto' } }
            }}>
              <Button
                variant="contained"
                color="primary"
                startIcon={<AddIcon />}
                sx={{ 
                  borderRadius: 2, 
                  py: 1.5,
                  px: 2,
                  textTransform: 'none',
                  fontWeight: 600,
                  boxShadow: '0 4px 15px rgba(52, 152, 219, 0.3)'
                }}
              >
                New Entry
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                startIcon={loading ? <CircularProgress size={20} /> : <RefreshIcon />}
                onClick={refreshData}
                disabled={loading}
                sx={{ 
                  borderRadius: 2, 
                  py: 1.5,
                  px: 2,
                  textTransform: 'none',
                  fontWeight: 600
                }}
              >
                {loading ? 'Refreshing...' : 'Refresh'}
              </Button>
              <Button
                variant="outlined"
                color="error"
                startIcon={<LogoutIcon />}
                onClick={handleLogout}
                sx={{ 
                  borderRadius: 2, 
                  py: 1.5,
                  px: 2,
                  textTransform: 'none',
                  fontWeight: 600
                }}
              >
                Logout
              </Button>
            </Box>
          </Box>

          {/* Enhanced Stats Cards - More Responsive */}
          <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} sx={{ mb: 6 }}>
            {[
              { title: 'Total Programs', value: 15, icon: <SchoolIcon sx={{ fontSize: { xs: 30, sm: 35, md: 40 } }} />, color: 'primary', trend: '+2.5%', status: 'up' },
              { title: 'Active Students', value: 1242, icon: <GroupIcon sx={{ fontSize: { xs: 30, sm: 35, md: 40 } }} />, color: 'secondary', trend: '+5.2%', status: 'up' },
              { title: 'News Articles', value: 24, icon: <EventNoteIcon sx={{ fontSize: { xs: 30, sm: 35, md: 40 } }} />, color: 'info', trend: '+1.8%', status: 'up' },
              { title: 'Staff Members', value: 42, icon: <AssignmentIcon sx={{ fontSize: { xs: 30, sm: 35, md: 40 } }} />, color: 'success', trend: '+0.5%', status: 'up' },
            ].map((stat, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <StyledCard sx={{ 
                    textAlign: 'center', 
                    py: { xs: 3, sm: 4 }, 
                    px: { xs: 2, sm: 3 },
                    position: 'relative',
                    overflow: 'hidden',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column'
                  }}>
                    <CardContent>
                      <Box sx={{ 
                        display: 'flex', 
                        justifyContent: 'center', 
                        mb: 3,
                        color: 
                          stat.color === 'primary' ? 'primary.main' :
                          stat.color === 'secondary' ? 'secondary.main' :
                          stat.color === 'info' ? '#3498db' :
                          stat.color === 'success' ? '#27ae60' : 'primary.main',
                        position: 'relative'
                      }}>
                        {stat.icon}
                        <Box sx={{
                          position: 'absolute',
                          top: -5,
                          right: -5,
                          width: 20,
                          height: 20,
                          borderRadius: '50%',
                          backgroundColor: stat.status === 'up' ? '#27ae60' : '#e74c3c',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}>
                          <Box sx={{
                            width: 8,
                            height: 8,
                            borderRadius: '50%',
                            backgroundColor: 'white'
                          }} />
                        </Box>
                      </Box>
                      <Typography 
                        variant="h2" 
                        component="div" 
                        sx={{ 
                          fontWeight: 800, 
                          background: 'linear-gradient(45deg, #2c3e50, #34495e)',
                          backgroundClip: 'text',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          mb: 2,
                          fontSize: { xs: '2rem', sm: '2.2rem', md: '2.5rem' }
                        }}
                      >
                        {stat.value}
                      </Typography>
                      <Typography 
                        variant="h6" 
                        sx={{ 
                          fontWeight: 700,
                          color: '#2c3e50',
                          mb: 2,
                          textTransform: 'uppercase',
                          letterSpacing: '1px'
                        }}
                      >
                        {stat.title}
                      </Typography>
                      <Box sx={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        gap: 1
                      }}>
                        <TrendingUpIcon 
                          sx={{ 
                            fontSize: 18, 
                            color: stat.status === 'up' ? '#27ae60' : '#e74c3c',
                            transform: stat.status === 'up' ? 'rotate(45deg)' : 'rotate(-45deg)'
                          }} 
                        />
                        <Typography 
                          variant="body2" 
                          sx={{ 
                            fontWeight: 700,
                            color: stat.status === 'up' ? '#27ae60' : '#e74c3c'
                          }}
                        >
                          {stat.trend}
                        </Typography>
                      </Box>
                    </CardContent>
                  </StyledCard>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          {/* Enhanced Tabs for Management Sections */}
          <Box sx={{ 
            mb: 6, 
            background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(250,250,250,0.9) 100%)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.2)',
            borderRadius: 3, 
            p: 1,
            boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
            position: 'relative',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '3px',
              background: 'linear-gradient(90deg, #3498db, #2c3e50, #e74c3c)',
              borderRadius: '3px 3px 0 0'
            }
          }}>
            <Tabs 
              value={tabValue} 
              onChange={handleTabChange} 
              variant="scrollable"
              scrollButtons="auto"
              allowScrollButtonsMobile
              sx={{
                '& .MuiTab-root': {
                  textTransform: 'none',
                  fontWeight: 700,
                  fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' },
                  color: 'text.secondary',
                  py: { xs: 1.5, sm: 2 },
                  px: { xs: 1, sm: 2, md: 3 },
                  minHeight: { xs: 50, sm: 60 },
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    color: 'primary.main',
                    backgroundColor: 'rgba(44, 62, 80, 0.05)'
                  }
                },
                '& .Mui-selected': {
                  color: 'primary.main',
                },
                '& .MuiTabs-indicator': {
                  backgroundColor: 'primary.main',
                  height: 4,
                  borderRadius: '2px 2px 0 0'
                }
              }}
            >
              <Tab icon={<SchoolIcon />} iconPosition="start" label="Program Management" />
              <Tab icon={<EventNoteIcon />} iconPosition="start" label="News Management" />
              <Tab icon={<PeopleIcon />} iconPosition="start" label="Leaders Management" />
              <Tab icon={<MessageIcon />} iconPosition="start" label="Contact Messages" />
            </Tabs>
          </Box>

          <Grid container spacing={4}>
            <Grid item xs={12} md={8}>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <StyledPaper elevation={0}>
                  <CardHeader
                    title={
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Box sx={{ 
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: 50,
                          height: 50,
                          borderRadius: '50%',
                          background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)',
                          boxShadow: '0 4px 15px rgba(44, 62, 80, 0.3)'
                        }}>
                          {tabValue === 0 && <SchoolIcon sx={{ color: 'white' }} />}
                          {tabValue === 1 && <EventNoteIcon sx={{ color: 'white' }} />}
                          {tabValue === 2 && <PeopleIcon sx={{ color: 'white' }} />}
                          {tabValue === 3 && <MessageIcon sx={{ color: 'white' }} />}
                        </Box>
                        <Typography variant="h5" component="h2" sx={{ fontWeight: 700, color: 'white' }}>
                          {tabValue === 0 && 'Program Management'}
                          {tabValue === 1 && 'News Management'}
                          {tabValue === 2 && 'Leaders Management'}
                          {tabValue === 3 && 'Contact Messages'}
                        </Typography>
                      </Box>
                    }
                    sx={{ 
                      background: 'linear-gradient(45deg, #2c3e50, #34495e)', 
                      color: 'white',
                      '& .MuiCardHeader-title': {
                        color: 'white'
                      },
                      py: 3,
                      borderRadius: '16px 16px 0 0',
                      position: 'relative',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '4px',
                        background: 'linear-gradient(90deg, #3498db, #2ecc71)',
                        borderRadius: '16px 16px 0 0'
                      }
                    }}
                  />
                  <CardContent sx={{ pt: 4 }}>
                    {tabValue === 0 && (
                      <Box>
                        <Typography variant="body1" color="text.secondary" sx={{ mb: 4, fontWeight: 500, fontSize: '1.1rem' }}>
                          Manage academic programs, curricula, and course information.
                        </Typography>
                        <Grid container spacing={3}>
                          <Grid item xs={12} sm={6}>
                            <StyledButton 
                              variant="contained" 
                              fullWidth
                              onClick={() => handleOpenModal('program')}
                              sx={{ 
                                py: 2,
                                mb: 2,
                                background: 'linear-gradient(45deg, #2c3e50, #34495e)',
                                '&:hover': {
                                  background: 'linear-gradient(45deg, #1a252f, #2c3e50)',
                                  transform: 'translateY(-2px)',
                                  boxShadow: '0 8px 20px rgba(44, 62, 80, 0.3)'
                                },
                                fontWeight: 600,
                                fontSize: '1rem',
                                borderRadius: 2,
                                boxShadow: '0 4px 15px rgba(44, 62, 80, 0.2)'
                              }}
                              startIcon={<AddIcon />}
                            >
                              Add New Program
                            </StyledButton>
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <StyledButton 
                              variant="outlined" 
                              fullWidth
                              href="/admin-programs"
                              sx={{ 
                                py: 2,
                                mb: 2,
                                borderColor: 'primary.main',
                                color: 'primary.main',
                                '&:hover': {
                                  backgroundColor: 'primary.main',
                                  color: 'white',
                                  borderColor: 'primary.dark',
                                  transform: 'translateY(-2px)',
                                  boxShadow: '0 8px 20px rgba(44, 62, 80, 0.2)'
                                },
                                fontWeight: 600,
                                fontSize: '1rem',
                                borderRadius: 2
                              }}
                              startIcon={<SchoolIcon />}
                            >
                              View All Programs
                            </StyledButton>
                          </Grid>
                        </Grid>
                      </Box>
                    )}
                    
                    {tabValue === 1 && (
                      <Box>
                        <Typography variant="body1" color="text.secondary" sx={{ mb: 4, fontWeight: 500, fontSize: '1.1rem' }}>
                          Create, edit, and publish news articles and announcements.
                        </Typography>
                        <Grid container spacing={3}>
                          <Grid item xs={12} sm={6}>
                            <StyledButton 
                              variant="contained" 
                              fullWidth
                              onClick={() => handleOpenModal('news')}
                              sx={{ 
                                py: 2,
                                mb: 2,
                                background: 'linear-gradient(45deg, #3498db, #2980b9)',
                                '&:hover': {
                                  background: 'linear-gradient(45deg, #2980b9, #1c6ea4)',
                                  transform: 'translateY(-2px)',
                                  boxShadow: '0 8px 20px rgba(52, 152, 219, 0.3)'
                                },
                                fontWeight: 600,
                                fontSize: '1rem',
                                borderRadius: 2,
                                boxShadow: '0 4px 15px rgba(52, 152, 219, 0.2)'
                              }}
                              startIcon={<AddIcon />}
                            >
                              Create Article
                            </StyledButton>
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <StyledButton 
                              variant="outlined" 
                              fullWidth
                              href="/admin-news"
                              sx={{ 
                                py: 2,
                                mb: 2,
                                borderColor: 'secondary.main',
                                color: 'secondary.main',
                                '&:hover': {
                                  backgroundColor: 'secondary.main',
                                  color: 'white',
                                  borderColor: 'secondary.dark',
                                  transform: 'translateY(-2px)',
                                  boxShadow: '0 8px 20px rgba(52, 152, 219, 0.2)'
                                },
                                fontWeight: 600,
                                fontSize: '1rem',
                                borderRadius: 2
                              }}
                              startIcon={<EventNoteIcon />}
                            >
                              View News Articles
                            </StyledButton>
                          </Grid>
                        </Grid>
                      </Box>
                    )}
                    
                    {tabValue === 2 && (
                      <Box>
                        <Typography variant="body1" color="text.secondary" sx={{ mb: 4, fontWeight: 500, fontSize: '1.1rem' }}>
                          Manage information about school leaders and staff members.
                        </Typography>
                        <Grid container spacing={3}>
                          <Grid item xs={12} sm={6}>
                            <StyledButton 
                              variant="contained" 
                              fullWidth
                              onClick={() => handleOpenModal('leader')}
                              sx={{ 
                                py: 2,
                                mb: 2,
                                background: 'linear-gradient(45deg, #e74c3c, #c0392b)',
                                '&:hover': {
                                  background: 'linear-gradient(45deg, #c0392b, #a93226)',
                                  transform: 'translateY(-2px)',
                                  boxShadow: '0 8px 20px rgba(231, 76, 60, 0.3)'
                                },
                                fontWeight: 600,
                                fontSize: '1rem',
                                borderRadius: 2,
                                boxShadow: '0 4px 15px rgba(231, 76, 60, 0.2)'
                              }}
                              startIcon={<AddIcon />}
                            >
                              Add New Leader
                            </StyledButton>
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <StyledButton 
                              variant="outlined" 
                              fullWidth
                              href="/admin-leaders"
                              sx={{ 
                                py: 2,
                                mb: 2,
                                borderColor: 'error.main',
                                color: 'error.main',
                                '&:hover': {
                                  backgroundColor: 'error.main',
                                  color: 'white',
                                  borderColor: 'error.dark',
                                  transform: 'translateY(-2px)',
                                  boxShadow: '0 8px 20px rgba(231, 76, 60, 0.2)'
                                },
                                fontWeight: 600,
                                fontSize: '1rem',
                                borderRadius: 2
                              }}
                              startIcon={<PeopleIcon />}
                            >
                              View All Leaders
                            </StyledButton>
                          </Grid>
                        </Grid>
                      </Box>
                    )}
                    
                    {tabValue === 3 && (
                      <Box>
                        <Typography variant="body1" color="text.secondary" sx={{ mb: 4, fontWeight: 500, fontSize: '1.1rem' }}>
                          Review and respond to messages received through the contact form.
                        </Typography>
                        <Grid container spacing={3}>
                          <Grid item xs={12} sm={6}>
                            <StyledButton 
                              variant="contained" 
                              fullWidth
                              href="/admin-messages"
                              sx={{ 
                                py: 2,
                                mb: 2,
                                background: 'linear-gradient(45deg, #f39c12, #d35400)',
                                '&:hover': {
                                  background: 'linear-gradient(45deg, #d35400, #ba4a00)',
                                  transform: 'translateY(-2px)',
                                  boxShadow: '0 8px 20px rgba(243, 156, 18, 0.3)'
                                },
                                fontWeight: 600,
                                fontSize: '1rem',
                                borderRadius: 2,
                                boxShadow: '0 4px 15px rgba(243, 156, 18, 0.2)'
                              }}
                              startIcon={<MessageIcon />}
                            >
                              View Messages
                            </StyledButton>
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <StyledButton 
                              variant="outlined" 
                              fullWidth
                              href="/admin-messages/responded"
                              sx={{ 
                                py: 2,
                                mb: 2,
                                borderColor: 'secondary.main',
                                color: 'secondary.main',
                                '&:hover': {
                                  backgroundColor: 'secondary.main',
                                  color: 'white',
                                  borderColor: 'secondary.dark',
                                  transform: 'translateY(-2px)',
                                  boxShadow: '0 8px 20px rgba(44, 62, 80, 0.2)'
                                },
                                fontWeight: 600,
                                fontSize: '1rem',
                                borderRadius: 2
                              }}
                              startIcon={<AssignmentIcon />}
                            >
                              View Responses
                            </StyledButton>
                          </Grid>
                        </Grid>
                      </Box>
                    )}
                  </CardContent>
                </StyledPaper>
              </motion.div>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <StyledPaper elevation={0} sx={{ mb: 4 }}>
                  <CardHeader
                    title={
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Box sx={{ 
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: 40,
                          height: 40,
                          borderRadius: '50%',
                          background: 'linear-gradient(135deg, #34495e, #2c3e50)',
                          boxShadow: '0 4px 12px rgba(44, 62, 80, 0.3)'
                        }}>
                          <TrendingUpIcon sx={{ color: 'white', fontSize: 20 }} />
                        </Box>
                        <Typography variant="h6" component="h2" sx={{ fontWeight: 700, color: 'white' }}>
                          Recent Activity
                        </Typography>
                      </Box>
                    }
                    sx={{ 
                      background: 'linear-gradient(45deg, #34495e, #2c3e50)', 
                      color: 'white',
                      '& .MuiCardHeader-title': {
                        color: 'white'
                      },
                      py: 2,
                      borderRadius: '16px 16px 0 0',
                      position: 'relative',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '3px',
                        background: 'linear-gradient(90deg, #3498db, #9b59b6)',
                        borderRadius: '16px 16px 0 0'
                      }
                    }}
                  />
                  <CardContent>
                    <Box>
                      {recentActivity.map((activity, index) => (
                        <Box 
                          key={activity.id} 
                          sx={{ 
                            mb: 3, 
                            pb: 3, 
                            borderBottom: index < recentActivity.length - 1 ? '1px solid rgba(0,0,0,0.08)' : 'none',
                            position: 'relative',
                            pl: 5
                          }}
                        >
                          <Box sx={{ 
                            position: 'absolute',
                            left: 0,
                            top: 0,
                            width: 32,
                            height: 32,
                            borderRadius: '50%',
                            backgroundColor: `${getStatusColor(activity.status)}20`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            border: `2px solid ${getStatusColor(activity.status)}`
                          }}>
                            {activity.type === 'program' && <SchoolIcon sx={{ fontSize: 16, color: getStatusColor(activity.status) }} />}
                            {activity.type === 'news' && <EventNoteIcon sx={{ fontSize: 16, color: getStatusColor(activity.status) }} />}
                            {activity.type === 'leader' && <PeopleIcon sx={{ fontSize: 16, color: getStatusColor(activity.status) }} />}
                            {activity.type === 'message' && <MessageIcon sx={{ fontSize: 16, color: getStatusColor(activity.status) }} />}
                          </Box>
                          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                            <Chip
                              label={
                                activity.type === 'program' ? 'Program' :
                                activity.type === 'news' ? 'News' :
                                activity.type === 'leader' ? 'Leader' : 'Message'
                              }
                              size="small"
                              color={getChipColor(activity.type)}
                              sx={{ mr: 1, fontWeight: 600 }}
                            />
                            <Typography variant="body2" color="text.primary" sx={{ fontWeight: 600 }}>
                              {activity.action}
                            </Typography>
                          </Box>
                          <Typography variant="caption" color="text.secondary" sx={{ display: 'block' }}>
                            by {activity.user} • {activity.time}
                          </Typography>
                          <Box sx={{ 
                            display: 'inline-block',
                            mt: 1,
                            px: 1.5,
                            py: 0.5,
                            borderRadius: 1,
                            backgroundColor: `${getStatusColor(activity.status)}20`,
                            border: `1px solid ${getStatusColor(activity.status)}`,
                          }}>
                            <Typography variant="caption" sx={{ 
                              fontWeight: 700, 
                              color: getStatusColor(activity.status),
                              textTransform: 'uppercase'
                            }}>
                              {activity.status}
                            </Typography>
                          </Box>
                        </Box>
                      ))}
                    </Box>
                  </CardContent>
                </StyledPaper>
                
                <StyledPaper elevation={0}>
                  <CardHeader
                    title={
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Box sx={{ 
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: 40,
                          height: 40,
                          borderRadius: '50%',
                          background: 'linear-gradient(135deg, #27ae60, #2ecc71)',
                          boxShadow: '0 4px 12px rgba(39, 174, 96, 0.3)'
                        }}>
                          <SettingsIcon sx={{ color: 'white', fontSize: 20 }} />
                        </Box>
                        <Typography variant="h6" component="h2" sx={{ fontWeight: 700, color: 'white' }}>
                          Quick Actions
                        </Typography>
                      </Box>
                    }
                    sx={{ 
                      background: 'linear-gradient(45deg, #27ae60, #2ecc71)', 
                      color: 'white',
                      '& .MuiCardHeader-title': {
                        color: 'white'
                      },
                      py: 2,
                      borderRadius: '16px 16px 0 0',
                      position: 'relative',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '3px',
                        background: 'linear-gradient(90deg, #27ae60, #f1c40f)',
                        borderRadius: '16px 16px 0 0'
                      }
                    }}
                  />
                  <CardContent>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <Button 
                          variant="outlined" 
                          startIcon={<SettingsIcon />}
                          href="/admin-profile"
                          fullWidth
                          sx={{ 
                            py: 1.5,
                            mb: 1.5,
                            borderColor: 'primary.main',
                            color: 'primary.main',
                            '&:hover': {
                              backgroundColor: 'primary.main',
                              color: 'white',
                              borderColor: 'primary.dark',
                              transform: 'translateY(-2px)',
                              boxShadow: '0 6px 15px rgba(44, 62, 80, 0.2)'
                            },
                            fontWeight: 600,
                            borderRadius: 2
                          }}
                        >
                          Profile Settings
                        </Button>
                      </Grid>
                      <Grid item xs={12}>
                        <Button 
                          variant="outlined" 
                          startIcon={<AnalyticsIcon />}
                          href="/admin-analytics"
                          fullWidth
                          sx={{ 
                            py: 1.5,
                            mb: 1.5,
                            borderColor: 'secondary.main',
                            color: 'secondary.main',
                            '&:hover': {
                              backgroundColor: 'secondary.main',
                              color: 'white',
                              borderColor: 'secondary.dark',
                              transform: 'translateY(-2px)',
                              boxShadow: '0 6px 15px rgba(52, 152, 219, 0.2)'
                            },
                            fontWeight: 600,
                            borderRadius: 2
                          }}
                        >
                          Analytics Dashboard
                        </Button>
                      </Grid>
                      <Grid item xs={12}>
                        <Button 
                          variant="outlined" 
                          startIcon={<BackupIcon />}
                          href="/admin-backup"
                          fullWidth
                          sx={{ 
                            py: 1.5,
                            mb: 1.5,
                            borderColor: 'primary.main',
                            color: 'primary.main',
                            '&:hover': {
                              backgroundColor: 'primary.main',
                              color: 'white',
                              borderColor: 'primary.dark',
                              transform: 'translateY(-2px)',
                              boxShadow: '0 6px 15px rgba(44, 62, 80, 0.2)'
                            },
                            fontWeight: 600,
                            borderRadius: 2
                          }}
                        >
                          Backup Data
                        </Button>
                      </Grid>
                      <Grid item xs={12}>
                        <Button 
                          variant="contained" 
                          color="error"
                          href="/"
                          fullWidth
                          sx={{ 
                            py: 1.5,
                            background: 'linear-gradient(45deg, #e74c3c, #c0392b)',
                            '&:hover': {
                              background: 'linear-gradient(45deg, #c0392b, #a93226)',
                              transform: 'translateY(-2px)',
                              boxShadow: '0 6px 15px rgba(231, 76, 60, 0.3)'
                            },
                            fontWeight: 600,
                            borderRadius: 2,
                            boxShadow: '0 4px 12px rgba(231, 76, 60, 0.2)'
                          }}
                          startIcon={<SettingsIcon />}
                        >
                          Logout
                        </Button>
                      </Grid>
                    </Grid>
                  </CardContent>
                </StyledPaper>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
      
      {/* Add Program Modal */}
      <StyledDialog
        open={openModal && modalType === 'program'}
        onClose={handleCloseModal}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle sx={{ 
          background: 'linear-gradient(45deg, #2c3e50, #34495e)',
          color: 'white',
          py: 2,
          px: 3,
          borderRadius: '20px 20px 0 0'
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <SchoolIcon sx={{ fontSize: 32 }} />
              <Typography variant="h5" component="h2" sx={{ fontWeight: 700 }}>
                Add New Program
              </Typography>
            </Box>
            <IconButton 
              onClick={handleCloseModal}
              sx={{ color: 'white', '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)' } }}
            >
              <CloseIcon />
            </IconButton>
          </Box>
        </DialogTitle>
        <DialogContent sx={{ p: 0 }}>
          <FormContainer>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Program Title"
                    name="title"
                    value={formData.title}
                    onChange={handleFormChange}
                    required
                    variant="outlined"
                    sx={{ 
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 2,
                        '&:hover fieldset': {
                          borderColor: 'primary.main',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: 'primary.main',
                        },
                      }
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Program Duration"
                    name="duration"
                    value={formData.duration}
                    onChange={handleFormChange}
                    required
                    placeholder="e.g., 4 years, 2 semesters"
                    variant="outlined"
                    sx={{ 
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 2,
                      }
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Requirements"
                    name="requirements"
                    value={formData.requirements}
                    onChange={handleFormChange}
                    required
                    placeholder="e.g., High school diploma, Math proficiency"
                    variant="outlined"
                    sx={{ 
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 2,
                      }
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Description"
                    name="description"
                    value={formData.description}
                    onChange={handleFormChange}
                    required
                    multiline
                    rows={4}
                    placeholder="Describe the program in detail..."
                    variant="outlined"
                    sx={{ 
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 2,
                      }
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Box sx={{ 
                    border: '2px dashed #ccc', 
                    borderRadius: 2, 
                    p: 3, 
                    textAlign: 'center',
                    backgroundColor: previewImage ? 'transparent' : '#fafafa',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      borderColor: 'primary.main',
                      backgroundColor: previewImage ? 'transparent' : '#f0f0f0'
                    }
                  }}>
                    {previewImage ? (
                      <Box sx={{ position: 'relative' }}>
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
                        <Button
                          variant="outlined"
                          size="small"
                          onClick={() => setPreviewImage(null)}
                          sx={{ 
                            position: 'absolute',
                            top: 8,
                            right: 8,
                            minWidth: 'auto',
                            padding: '4px'
                          }}
                        >
                          <CloseIcon sx={{ fontSize: 16 }} />
                        </Button>
                      </Box>
                    ) : (
                      <Box sx={{ py: 3 }}>
                        <CloudUploadIcon sx={{ fontSize: 48, color: '#ccc', mb: 2 }} />
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                          Drag & drop an image here or click to browse
                        </Typography>
                      </Box>
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
                          color: 'primary.main',
                          '&:hover': {
                            backgroundColor: 'primary.main',
                            color: 'white'
                          }
                        }}
                      >
                        {previewImage ? 'Change Image' : 'Upload Program Image'}
                      </Button>
                    </label>
                  </Box>
                </Grid>
              </Grid>
            </form>
          </FormContainer>
        </DialogContent>
        <DialogActions sx={{ p: 3, background: 'rgba(0,0,0,0.02)' }}>
          <Button
            onClick={handleCloseModal}
            sx={{
              py: 1.5,
              px: 3,
              borderRadius: 2,
              borderColor: 'error.main',
              color: 'error.main',
              '&:hover': {
                backgroundColor: 'error.main',
                color: 'white'
              }
            }}
            variant="outlined"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            form="program-form"
            variant="contained"
            disabled={loading}
            sx={{
              py: 1.5,
              px: 3,
              background: 'linear-gradient(45deg, #2c3e50, #34495e)',
              '&:hover': {
                background: 'linear-gradient(45deg, #1a252f, #2c3e50)',
              },
              borderRadius: 2,
              boxShadow: '0 4px 15px rgba(44, 62, 80, 0.3)'
            }}
          >
            {loading ? <CircularProgress size={24} sx={{ color: 'white' }} /> : 'Add Program'}
          </Button>
        </DialogActions>
      </StyledDialog>

      {/* Add News Modal */}
      <StyledDialog
        open={openModal && modalType === 'news'}
        onClose={handleCloseModal}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle sx={{ 
          background: 'linear-gradient(45deg, #3498db, #2980b9)',
          color: 'white',
          py: 2,
          px: 3,
          borderRadius: '20px 20px 0 0'
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <EventNoteIcon sx={{ fontSize: 32 }} />
              <Typography variant="h5" component="h2" sx={{ fontWeight: 700 }}>
                Create News Article
              </Typography>
            </Box>
            <IconButton 
              onClick={handleCloseModal}
              sx={{ color: 'white', '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)' } }}
            >
              <CloseIcon />
            </IconButton>
          </Box>
        </DialogTitle>
        <DialogContent sx={{ p: 0 }}>
          <FormContainer>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Article Title"
                    name="title"
                    value={formData.title}
                    onChange={handleFormChange}
                    required
                    variant="outlined"
                    sx={{ 
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 2,
                      }
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <FormControl fullWidth>
                    <InputLabel>Category</InputLabel>
                    <Select
                      name="category"
                      value={formData.category}
                      onChange={handleFormChange}
                      label="Category"
                      sx={{ borderRadius: 2 }}
                    >
                      <MenuItem value="announcement">Announcement</MenuItem>
                      <MenuItem value="event">Event</MenuItem>
                      <MenuItem value="achievement">Achievement</MenuItem>
                      <MenuItem value="news">News</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Author"
                    name="author"
                    value={formData.author || ''}
                    onChange={handleFormChange}
                    variant="outlined"
                    sx={{ 
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 2,
                      }
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Content"
                    name="content"
                    value={formData.content}
                    onChange={handleFormChange}
                    required
                    multiline
                    rows={6}
                    placeholder="Write your article content here..."
                    variant="outlined"
                    sx={{ 
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 2,
                      }
                    }}
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
                      <Box sx={{ position: 'relative' }}>
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
                        <Button
                          variant="outlined"
                          size="small"
                          onClick={() => setPreviewImage(null)}
                          sx={{ 
                            position: 'absolute',
                            top: 8,
                            right: 8,
                            minWidth: 'auto',
                            padding: '4px'
                          }}
                        >
                          <CloseIcon sx={{ fontSize: 16 }} />
                        </Button>
                      </Box>
                    ) : (
                      <Box sx={{ py: 3 }}>
                        <CloudUploadIcon sx={{ fontSize: 48, color: '#ccc', mb: 2 }} />
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                          Upload featured image
                        </Typography>
                      </Box>
                    )}
                    <input
                      accept="image/*"
                      style={{ display: 'none' }}
                      id="news-image-upload"
                      type="file"
                      onChange={handleImageChange}
                    />
                    <label htmlFor="news-image-upload">
                      <Button 
                        variant="outlined" 
                        component="span"
                        startIcon={<CloudUploadIcon />}
                        sx={{ 
                          borderRadius: 2,
                          borderColor: 'primary.main',
                          color: 'primary.main',
                          '&:hover': {
                            backgroundColor: 'primary.main',
                            color: 'white'
                          }
                        }}
                      >
                        {previewImage ? 'Change Image' : 'Upload Image'}
                      </Button>
                    </label>
                  </Box>
                </Grid>
              </Grid>
            </form>
          </FormContainer>
        </DialogContent>
        <DialogActions sx={{ p: 3, background: 'rgba(0,0,0,0.02)' }}>
          <Button
            onClick={handleCloseModal}
            sx={{
              py: 1.5,
              px: 3,
              borderRadius: 2,
              borderColor: 'error.main',
              color: 'error.main',
              '&:hover': {
                backgroundColor: 'error.main',
                color: 'white'
              }
            }}
            variant="outlined"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            form="news-form"
            variant="contained"
            disabled={loading}
            sx={{
              py: 1.5,
              px: 3,
              background: 'linear-gradient(45deg, #3498db, #2980b9)',
              '&:hover': {
                background: 'linear-gradient(45deg, #2980b9, #1c6ea4)',
              },
              borderRadius: 2,
              boxShadow: '0 4px 15px rgba(52, 152, 219, 0.3)'
            }}
          >
            {loading ? <CircularProgress size={24} sx={{ color: 'white' }} /> : 'Publish Article'}
          </Button>
        </DialogActions>
      </StyledDialog>

      {/* Add Leader Modal */}
      <StyledDialog
        open={openModal && modalType === 'leader'}
        onClose={handleCloseModal}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle sx={{ 
          background: 'linear-gradient(45deg, #e74c3c, #c0392b)',
          color: 'white',
          py: 2,
          px: 3,
          borderRadius: '20px 20px 0 0'
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <PeopleIcon sx={{ fontSize: 32 }} />
              <Typography variant="h5" component="h2" sx={{ fontWeight: 700 }}>
                Add New Leader
              </Typography>
            </Box>
            <IconButton 
              onClick={handleCloseModal}
              sx={{ color: 'white', '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)' } }}
            >
              <CloseIcon />
            </IconButton>
          </Box>
        </DialogTitle>
        <DialogContent sx={{ p: 0 }}>
          <FormContainer>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Full Name"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    required
                    variant="outlined"
                    sx={{ 
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 2,
                      }
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Position"
                    name="position"
                    value={formData.position}
                    onChange={handleFormChange}
                    required
                    placeholder="e.g., School Director, Head of Department"
                    variant="outlined"
                    sx={{ 
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 2,
                      }
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Phone Number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleFormChange}
                    required
                    placeholder="+250 788 123 456"
                    variant="outlined"
                    sx={{ 
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 2,
                      }
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Qualification"
                    name="qualification"
                    value={formData.qualification}
                    onChange={handleFormChange}
                    required
                    placeholder="e.g., Master's in Education"
                    variant="outlined"
                    sx={{ 
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 2,
                      }
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Biography"
                    name="biography"
                    value={formData.biography || ''}
                    onChange={handleFormChange}
                    multiline
                    rows={4}
                    placeholder="Brief biography of the leader..."
                    variant="outlined"
                    sx={{ 
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 2,
                      }
                    }}
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
                      <Box sx={{ position: 'relative' }}>
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
                        <Button
                          variant="outlined"
                          size="small"
                          onClick={() => setPreviewImage(null)}
                          sx={{ 
                            position: 'absolute',
                            top: 8,
                            right: 8,
                            minWidth: 'auto',
                            padding: '4px'
                          }}
                        >
                          <CloseIcon sx={{ fontSize: 16 }} />
                        </Button>
                      </Box>
                    ) : (
                      <Box sx={{ py: 3 }}>
                        <CloudUploadIcon sx={{ fontSize: 48, color: '#ccc', mb: 2 }} />
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                          Upload profile picture
                        </Typography>
                      </Box>
                    )}
                    <input
                      accept="image/*"
                      style={{ display: 'none' }}
                      id="leader-image-upload"
                      type="file"
                      onChange={handleImageChange}
                    />
                    <label htmlFor="leader-image-upload">
                      <Button 
                        variant="outlined" 
                        component="span"
                        startIcon={<CloudUploadIcon />}
                        sx={{ 
                          borderRadius: 2,
                          borderColor: 'primary.main',
                          color: 'primary.main',
                          '&:hover': {
                            backgroundColor: 'primary.main',
                            color: 'white'
                          }
                        }}
                      >
                        {previewImage ? 'Change Image' : 'Upload Photo'}
                      </Button>
                    </label>
                  </Box>
                </Grid>
              </Grid>
            </form>
          </FormContainer>
        </DialogContent>
        <DialogActions sx={{ p: 3, background: 'rgba(0,0,0,0.02)' }}>
          <Button
            onClick={handleCloseModal}
            sx={{
              py: 1.5,
              px: 3,
              borderRadius: 2,
              borderColor: 'error.main',
              color: 'error.main',
              '&:hover': {
                backgroundColor: 'error.main',
                color: 'white'
              }
            }}
            variant="outlined"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            form="leader-form"
            variant="contained"
            disabled={loading}
            sx={{
              py: 1.5,
              px: 3,
              background: 'linear-gradient(45deg, #e74c3c, #c0392b)',
              '&:hover': {
                background: 'linear-gradient(45deg, #c0392b, #a93226)',
              },
              borderRadius: 2,
              boxShadow: '0 4px 15px rgba(231, 76, 60, 0.3)'
            }}
          >
            {loading ? <CircularProgress size={24} sx={{ color: 'white' }} /> : 'Add Leader'}
          </Button>
        </DialogActions>
      </StyledDialog>

      {/* Notification Snackbar */}
      <Snackbar 
        open={snackbar.open} 
        autoHideDuration={6000} 
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert 
          onClose={handleCloseSnackbar} 
          severity={snackbar.severity}
          variant="filled"
          sx={{ 
            width: '100%',
            borderRadius: 2,
            boxShadow: '0 8px 25px rgba(0,0,0,0.2)'
          }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default AdminDashboard;