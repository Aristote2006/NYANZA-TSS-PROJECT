import React, { useState } from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, CardHeader, Button, Tabs, Tab, Avatar, Chip, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SchoolIcon from '@mui/icons-material/School';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import PeopleIcon from '@mui/icons-material/People';
import MessageIcon from '@mui/icons-material/Message';
import AssignmentIcon from '@mui/icons-material/Assignment';
import SettingsIcon from '@mui/icons-material/Settings';
import BackupIcon from '@mui/icons-material/Backup';

const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: 16,
  boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
  transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
  },
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: 16,
  background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(250,250,250,0.9) 100%)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255,255,255,0.2)',
  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 15px 40px rgba(0,0,0,0.15)',
  },
}));

const AdminDashboard = () => {
  const [tabValue, setTabValue] = useState(0);
  const location = useLocation();

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  // Mock data for dashboard stats
  const stats = [
    { title: 'Total Programs', value: 15, icon: <SchoolIcon sx={{ fontSize: 40 }} />, color: 'primary' },
    { title: 'Active Students', value: 1242, icon: <PeopleIcon sx={{ fontSize: 40 }} />, color: 'secondary' },
    { title: 'News Articles', value: 24, icon: <NewspaperIcon sx={{ fontSize: 40 }} />, color: 'primary' },
    { title: 'Staff Members', value: 42, icon: <AssignmentIcon sx={{ fontSize: 40 }} />, color: 'secondary' },
  ];

  // Mock recent activity
  const recentActivity = [
    { id: 1, action: 'Added new program', user: 'Admin', time: '2 hours ago', type: 'program' },
    { id: 2, action: 'Published news article', user: 'Admin', time: '5 hours ago', type: 'news' },
    { id: 3, action: 'Updated leader information', user: 'Admin', time: 'Yesterday', type: 'leader' },
    { id: 4, action: 'Received contact message', user: 'Visitor', time: '2 days ago', type: 'message' },
  ];

  const getChipColor = (type) => {
    switch(type) {
      case 'program': return 'primary';
      case 'news': return 'secondary';
      case 'leader': return 'primary';  // Using primary instead of info since 'info' may not be available
      case 'message': return 'secondary';  // Using secondary instead of warning since 'warning' may not be available
      default: return 'default';
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4, minHeight: '100vh', background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)', mt: 2 }}>
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
            <Avatar 
              sx={{ 
                width: 80, 
                height: 80, 
                bgcolor: 'primary.main', 
                mx: 'auto', 
                mb: 2,
                boxShadow: '0 8px 20px rgba(44, 62, 80, 0.3)'
              }}
            >
              <DashboardIcon sx={{ fontSize: 40 }} />
            </Avatar>
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
            Administrator Dashboard
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Manage your school's content and settings
          </Typography>
        </Box>

        {/* Stats Cards */}
        <Grid container spacing={3} sx={{ mb: 6 }}>
          {stats.map((stat, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <StyledCard sx={{ 
                  textAlign: 'center', 
                  py: 4, 
                  borderRadius: 3, 
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(250,250,250,0.9) 100%)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
                }}>
                  <CardContent>
                    <Box sx={{ 
                      display: 'flex', 
                      justifyContent: 'center', 
                      mb: 2,
                      color: 
                        stat.color === 'primary' ? 'primary.main' :
                        stat.color === 'secondary' ? 'secondary.main' :
                        stat.color === 'warning' ? 'warning.main' : 'primary.main'
                    }}>
                      {stat.icon}
                    </Box>
                    <Typography 
                      variant="h3" 
                      component="div" 
                      sx={{ 
                        fontWeight: 700, 
                        background: 'linear-gradient(45deg, #2c3e50, #34495e)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        mb: 1 
                      }}
                    >
                      {stat.value}
                    </Typography>
                    <Typography 
                      variant="h6" 
                      color="text.secondary" 
                      sx={{ 
                        fontWeight: 600,
                        color: 'primary.main !important'
                      }}
                    >
                      {stat.title}
                    </Typography>
                  </CardContent>
                </StyledCard>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Tabs for different management sections */}
        <Box sx={{ 
          mb: 4, 
          background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(250,250,250,0.9) 100%)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255,255,255,0.2)',
          borderRadius: 2, 
          p: 1,
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
        }}>
          <Tabs 
            value={tabValue} 
            onChange={handleTabChange} 
            centered
            sx={{
              '& .MuiTab-root': {
                textTransform: 'none',
                fontWeight: 600,
                fontSize: '1rem',
                color: 'text.secondary',
              },
              '& .Mui-selected': {
                color: 'primary.main',
              },
              '& .MuiTabs-indicator': {
                backgroundColor: 'primary.main',
                height: 3,
              }
            }}
          >
            <Tab icon={<SchoolIcon />} iconPosition="start" label="Manage Programs" />
            <Tab icon={<NewspaperIcon />} iconPosition="start" label="Manage News" />
            <Tab icon={<PeopleIcon />} iconPosition="start" label="Manage Leaders" />
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
                    <Typography variant="h6" component="h2" sx={{ fontWeight: 700, color: 'white' }}>
                      {tabValue === 0 && 'Program Management'}
                      {tabValue === 1 && 'News Management'}
                      {tabValue === 2 && 'Leaders Management'}
                      {tabValue === 3 && 'Contact Messages'}
                    </Typography>
                  }
                  sx={{ 
                    background: 'linear-gradient(45deg, #2c3e50, #34495e)', 
                    color: 'white',
                    '& .MuiCardHeader-title': {
                      color: 'white'
                    },
                    py: 2,
                    borderRadius: '16px 16px 0 0'
                  }}
                />
                <CardContent sx={{ pt: 3 }}>
                  {tabValue === 0 && (
                    <Box>
                      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                        Manage academic programs, curricula, and course information.
                      </Typography>
                      <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                          <Button 
                            variant="contained" 
                            component={Link} 
                            to="/admin-programs"
                            sx={{ 
                              width: '100%', 
                              mb: 2,
                              background: 'linear-gradient(45deg, #2c3e50, #34495e)',
                              '&:hover': {
                                background: 'linear-gradient(45deg, #1a252f, #2c3e50)',
                              }
                            }}
                          >
                            View Programs
                          </Button>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <Button 
                            variant="outlined" 
                            component={Link} 
                            to="/admin-programs/add"
                            sx={{ 
                              width: '100%', 
                              mb: 2,
                              borderColor: 'primary.main',
                              color: 'primary.main',
                              '&:hover': {
                                backgroundColor: 'primary.main',
                                color: 'white',
                                borderColor: 'primary.dark',
                              }
                            }}
                          >
                            Add New Program
                          </Button>
                        </Grid>
                      </Grid>
                    </Box>
                  )}
                  
                  {tabValue === 1 && (
                    <Box>
                      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                        Create, edit, and publish news articles and announcements.
                      </Typography>
                      <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                          <Button 
                            variant="contained" 
                            component={Link} 
                            to="/admin-news"
                            sx={{ 
                              width: '100%', 
                              mb: 2,
                              background: 'linear-gradient(45deg, #3498db, #2980b9)',
                              '&:hover': {
                                background: 'linear-gradient(45deg, #2980b9, #1c6ea4)',
                              }
                            }}
                          >
                            View News
                          </Button>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <Button 
                            variant="outlined" 
                            component={Link} 
                            to="/admin-news/add"
                            sx={{ 
                              width: '100%', 
                              mb: 2,
                              borderColor: 'secondary.main',
                              color: 'secondary.main',
                              '&:hover': {
                                backgroundColor: 'secondary.main',
                                color: 'white',
                                borderColor: 'secondary.dark',
                              }
                            }}
                          >
                            Add News Article
                          </Button>
                        </Grid>
                      </Grid>
                    </Box>
                  )}
                  
                  {tabValue === 2 && (
                    <Box>
                      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                        Manage information about school leaders and staff members.
                      </Typography>
                      <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                          <Button 
                            variant="contained" 
                            component={Link} 
                            to="/admin-leaders"
                            sx={{ 
                              width: '100%', 
                              mb: 2,
                              background: 'linear-gradient(45deg, #e74c3c, #c0392b)',
                              '&:hover': {
                                background: 'linear-gradient(45deg, #c0392b, #a93226)',
                              }
                            }}
                          >
                            View Leaders
                          </Button>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <Button 
                            variant="outlined" 
                            component={Link} 
                            to="/admin-leaders/add"
                            sx={{ 
                              width: '100%', 
                              mb: 2,
                              borderColor: 'primary.main',
                              color: 'primary.main',
                              '&:hover': {
                                backgroundColor: 'primary.main',
                                color: 'white',
                                borderColor: 'primary.dark',
                              }
                            }}
                          >
                            Add New Leader
                          </Button>
                        </Grid>
                      </Grid>
                    </Box>
                  )}
                  
                  {tabValue === 3 && (
                    <Box>
                      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                        Review and respond to messages received through the contact form.
                      </Typography>
                      <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                          <Button 
                            variant="contained" 
                            component={Link} 
                            to="/admin-messages"
                            sx={{ 
                              width: '100%', 
                              mb: 2,
                              background: 'linear-gradient(45deg, #f39c12, #d35400)',
                              '&:hover': {
                                background: 'linear-gradient(45deg, #d35400, #ba4a00)',
                              }
                            }}
                          >
                            View Messages
                          </Button>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <Button 
                            variant="outlined" 
                            component={Link} 
                            to="/admin-messages/responded"
                            sx={{ 
                              width: '100%', 
                              mb: 2,
                              borderColor: 'secondary.main',
                              color: 'secondary.main',
                              '&:hover': {
                                backgroundColor: 'secondary.main',
                                color: 'white',
                                borderColor: 'secondary.dark',
                              }
                            }}
                          >
                            View Responses
                          </Button>
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
                  title="Recent Activity"
                  sx={{ 
                    background: 'linear-gradient(45deg, #34495e, #2c3e50)', 
                    color: 'white',
                    '& .MuiCardHeader-title': {
                      color: 'white'
                    },
                    py: 2,
                    borderRadius: '16px 16px 0 0'
                  }}
                />
                <CardContent>
                  <Box>
                    {recentActivity.map(activity => (
                      <Box key={activity.id} sx={{ mb: 2, pb: 2, borderBottom: '1px solid #eee' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                          <Chip
                            label={
                              activity.type === 'program' ? 'Program' :
                              activity.type === 'news' ? 'News' :
                              activity.type === 'leader' ? 'Leader' : 'Message'
                            }
                            size="small"
                            color={activity?.type ? getChipColor(activity.type) : 'default'}
                            sx={{ mr: 1 }}
                          />
                          <Typography variant="body2" color="text.primary" sx={{ fontWeight: 600 }}>
                            {activity.action}
                          </Typography>
                        </Box>
                        <Typography variant="caption" color="text.secondary">
                          by {activity.user} • {activity.time}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </CardContent>
              </StyledPaper>
              
              <StyledPaper elevation={0}>
                <CardHeader
                  title="Quick Actions"
                  sx={{ 
                    background: 'linear-gradient(45deg, #27ae60, #2ecc71)', 
                    color: 'white',
                    '& .MuiCardHeader-title': {
                      color: 'white'
                    },
                    py: 2,
                    borderRadius: '16px 16px 0 0'
                  }}
                />
                <CardContent>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Button 
                        variant="outlined" 
                        startIcon={<SettingsIcon />}
                        component={Link} 
                        to="/admin-profile"
                        sx={{ 
                          width: '100%', 
                          mb: 1,
                          borderColor: 'primary.main',
                          color: 'primary.main',
                          '&:hover': {
                            backgroundColor: 'primary.light',
                            borderColor: 'primary.dark',
                          }
                        }}
                      >
                        Profile Settings
                      </Button>
                    </Grid>
                    <Grid item xs={12}>
                      <Button 
                        variant="outlined" 
                        startIcon={<AssignmentIcon />}
                        component={Link} 
                        to="/admin-analytics"
                        sx={{ 
                          width: '100%', 
                          mb: 1,
                          borderColor: 'secondary.main',
                          color: 'secondary.main',
                          '&:hover': {
                            backgroundColor: 'secondary.main',
                            color: 'white',
                            borderColor: 'secondary.dark',
                          }
                        }}
                      >
                        Analytics
                      </Button>
                    </Grid>
                    <Grid item xs={12}>
                      <Button 
                        variant="outlined" 
                        startIcon={<BackupIcon />}
                        component={Link} 
                        to="/admin-backup"
                        sx={{ 
                          width: '100%', 
                          mb: 1,
                          borderColor: 'primary.main',
                          color: 'primary.main',
                          '&:hover': {
                            backgroundColor: 'primary.main',
                            color: 'white',
                            borderColor: 'primary.dark',
                          }
                        }}
                      >
                        Backup Data
                      </Button>
                    </Grid>
                    <Grid item xs={12}>
                      <Button 
                        variant="contained" 
                        color="error"
                        component={Link} 
                        to="/"
                        sx={{ 
                          width: '100%',
                          background: 'linear-gradient(45deg, #e74c3c, #c0392b)',
                          '&:hover': {
                            background: 'linear-gradient(45deg, #c0392b, #a93226)',
                          }
                        }}
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
  );
};

export default AdminDashboard;