import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, Button, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import MessageIcon from '@mui/icons-material/Message';
import ReplyIcon from '@mui/icons-material/Reply';
import DeleteIcon from '@mui/icons-material/Delete';

const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: 16,
  boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
  transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
  },
}));

const AdminMessages = () => {
  // Mock data for messages
  const messages = [
    { id: 1, name: 'James Wilson', email: 'james@example.com', subject: 'Admission Inquiry', message: 'I would like to know more about the admission process for Computer Science program.', date: '2024-01-15', status: 'Unread' },
    { id: 2, name: 'Sarah Thompson', email: 'sarah@example.com', subject: 'Scholarship Application', message: 'I am interested in applying for the merit scholarship. What documents are required?', date: '2024-01-14', status: 'Read' },
    { id: 3, name: 'Michael Brown', email: 'michael@example.com', subject: 'Facilities Tour', message: 'Can I schedule a tour of the facilities next week?', date: '2024-01-13', status: 'Replied' },
    { id: 4, name: 'Emma Johnson', email: 'emma@example.com', subject: 'Alumni Event', message: 'I would like to participate in the upcoming alumni event. How can I register?', date: '2024-01-12', status: 'Read' },
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
                bgcolor: 'warning.main', 
                mx: 'auto', 
                mb: 2,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 8px 20px rgba(243, 156, 18, 0.3)'
              }}
            >
              <MessageIcon sx={{ fontSize: 40, color: 'white' }} />
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
            Contact Messages
          </Typography>
          <Typography variant="h6" color="text.secondary">
            View and respond to messages from visitors
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4 }}>
          <Typography variant="h5" sx={{ fontWeight: 600, color: 'primary.main' }}>
            Messages ({messages.length})
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button
              variant="outlined"
              sx={{
                borderColor: 'primary.main',
                color: 'primary.main',
                '&:hover': {
                  backgroundColor: 'primary.light',
                  borderColor: 'primary.dark',
                }
              }}
            >
              Filter Messages
            </Button>
            <Button
              variant="contained"
              sx={{
                background: 'linear-gradient(45deg, #f39c12, #d35400)',
                '&:hover': {
                  background: 'linear-gradient(45deg, #d35400, #ba4a00)',
                }
              }}
            >
              Mark All as Read
            </Button>
          </Box>
        </Box>

        <Grid container spacing={3}>
          {messages.map((message, index) => (
            <Grid item xs={12} key={message.id}>
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
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                      <Box>
                        <Typography variant="h6" sx={{ fontWeight: 700, color: 'primary.main', mb: 1 }}>
                          {message.subject}
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                          <Typography variant="body2" color="text.secondary">
                            From: {message.name}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            | {message.email}
                          </Typography>
                        </Box>
                        <Chip 
                          label={message.status} 
                          size="small" 
                          color={message.status === 'Unread' ? 'warning' : message.status === 'Replied' ? 'success' : 'default'} 
                          sx={{ mr: 1 }}
                        />
                      </Box>
                      <Box sx={{ textAlign: 'right' }}>
                        <Typography variant="body2" color="text.secondary">
                          {message.date}
                        </Typography>
                      </Box>
                    </Box>
                    <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                      {message.message}
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
                      <Button
                        variant="outlined"
                        startIcon={<ReplyIcon />}
                        component={Link}
                        to={`/admin-messages/reply/${message.id}`}
                        sx={{
                          borderColor: 'primary.main',
                          color: 'primary.main',
                          '&:hover': {
                            backgroundColor: 'primary.light',
                            borderColor: 'primary.dark',
                          }
                        }}
                      >
                        Reply
                      </Button>
                      <Button
                        variant="outlined"
                        startIcon={<DeleteIcon />}
                        color="error"
                        sx={{
                          borderColor: 'error.main',
                          color: 'error.main',
                          '&:hover': {
                            backgroundColor: 'error.light',
                            borderColor: 'error.dark',
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
      </motion.div>
    </Container>
  );
};

export default AdminMessages;