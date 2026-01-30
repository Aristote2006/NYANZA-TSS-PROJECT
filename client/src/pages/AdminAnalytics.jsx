import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import BarChartIcon from '@mui/icons-material/BarChart';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import PeopleIcon from '@mui/icons-material/People';
import SchoolIcon from '@mui/icons-material/School';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import MessageIcon from '@mui/icons-material/Message';

const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: 16,
  boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
  transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
  },
}));

const AdminAnalytics = () => {
  // Mock analytics data
  const stats = [
    { title: 'Total Visitors', value: '24,567', icon: <PeopleIcon sx={{ fontSize: 40 }} />, color: 'primary', change: '+12.5%' },
    { title: 'Page Views', value: '189,342', icon: <ShowChartIcon sx={{ fontSize: 40 }} />, color: 'secondary', change: '+8.2%' },
    { title: 'Engagement Rate', value: '72.4%', icon: <BarChartIcon sx={{ fontSize: 40 }} />, color: 'primary', change: '+5.3%' },
    { title: 'Avg. Session Duration', value: '4m 32s', icon: <ShowChartIcon sx={{ fontSize: 40 }} />, color: 'secondary', change: '+3.1%' },
  ];

  const trafficSources = [
    { source: 'Direct', percentage: 45, color: '#3498db' },
    { source: 'Social Media', percentage: 25, color: '#e74c3c' },
    { source: 'Search Engines', percentage: 20, color: '#2ecc71' },
    { source: 'Referrals', percentage: 10, color: '#f39c12' },
  ];

  const topPages = [
    { page: '/', views: 12450 },
    { page: '/programs', views: 8765 },
    { page: '/about', views: 6543 },
    { page: '/news', views: 5432 },
    { page: '/contact', views: 4321 },
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
                boxShadow: '0 8px 20px rgba(41, 128, 185, 0.3)'
              }}
            >
              <BarChartIcon sx={{ fontSize: 40, color: 'white' }} />
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
            Analytics Dashboard
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Monitor website performance and visitor statistics
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
                      color: stat.color === 'primary' ? 'primary.main' : 'secondary.main'
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
                        color: 'primary.main !important',
                        mb: 1
                      }}
                    >
                      {stat.title}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: 'success.main',
                        fontWeight: 600
                      }}
                    >
                      {stat.change} from last month
                    </Typography>
                  </CardContent>
                </StyledCard>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
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
                p: 3
              }}>
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: 700, color: 'primary.main', mb: 3 }}>
                    Traffic Sources
                  </Typography>
                  {trafficSources.map((source, index) => (
                    <Box key={index} sx={{ mb: 2 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                        <Typography variant="body1">{source.source}</Typography>
                        <Typography variant="body1">{source.percentage}%</Typography>
                      </Box>
                      <Box sx={{ height: 8, backgroundColor: '#e0e0e0', borderRadius: 4, overflow: 'hidden' }}>
                        <Box 
                          sx={{ 
                            height: '100%', 
                            width: `${source.percentage}%`, 
                            backgroundColor: source.color,
                            transition: 'width 0.5s ease'
                          }} 
                        />
                      </Box>
                    </Box>
                  ))}
                </CardContent>
              </StyledCard>
            </motion.div>
          </Grid>
          
          <Grid item xs={12} md={6}>
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
                    Top Pages
                  </Typography>
                  {topPages.map((page, index) => (
                    <Box key={index} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2, p: 1, borderRadius: 1, bgcolor: 'background.paper' }}>
                      <Typography variant="body1" sx={{ fontWeight: 500 }}>
                        {page.page}
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        {page.views} views
                      </Typography>
                    </Box>
                  ))}
                </CardContent>
              </StyledCard>
            </motion.div>
          </Grid>
        </Grid>
        
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

export default AdminAnalytics;