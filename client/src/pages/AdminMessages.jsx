import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, Button, Chip, Alert } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import MessageIcon from '@mui/icons-material/Message';
import ReplyIcon from '@mui/icons-material/Reply';
import DeleteIcon from '@mui/icons-material/Delete';
import { contactAPI } from '../services/api';
import { useNavigate } from 'react-router-dom';

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
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Fetch messages from API
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const token = localStorage.getItem('adminToken');
        if (!token) {
          navigate('/admin-login');
          return;
        }
        
        const response = await contactAPI.getAll(token);
        setMessages(response.data);
      } catch (err) {
        console.error('Error fetching messages:', err);
        if (err.response?.status === 401) {
          localStorage.removeItem('adminToken');
          navigate('/admin-login');
        } else {
          setError('Failed to fetch messages');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, [navigate]);

  const handleDeleteMessage = async (id) => {
    if (window.confirm('Are you sure you want to delete this message?')) {
      try {
        const token = localStorage.getItem('adminToken');
        await contactAPI.deleteMessage(id, token);
        setMessages(messages.filter(msg => msg._id !== id));
      } catch (err) {
        console.error('Error deleting message:', err);
        setError('Failed to delete message');
      }
    }
  };

  const handleMarkAsRead = async (id) => {
    try {
      const token = localStorage.getItem('adminToken');
      await contactAPI.markAsRead(id, token);
      setMessages(messages.map(msg => 
        msg._id === id ? { ...msg, status: 'in-progress' } : msg
      ));
    } catch (err) {
      console.error('Error marking as read:', err);
      setError('Failed to update message status');
    }
  };

  if (loading) {
    return (
      <Container maxWidth="lg" sx={{ py: 4, background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)' }}>
        <Box sx={{ textAlign: 'center', py: 8 }}>
          <Typography variant="h6">Loading messages...</Typography>
        </Box>
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

        {error && (
          <Alert severity="error" sx={{ mb: 3 }}>
            {error}
          </Alert>
        )}

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
          {messages.length > 0 ? (
            messages.map((message, index) => (
              <Grid item xs={12} key={message._id}>
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
                            label={message.status === 'pending' ? 'Unread' : message.status === 'in-progress' ? 'Read' : 'Replied'} 
                            size="small" 
                            color={
                              message.status === 'pending' ? 'warning' : 
                              message.status === 'resolved' ? 'success' : 'default'
                            } 
                            sx={{ mr: 1 }}
                          />
                        </Box>
                        <Box sx={{ textAlign: 'right' }}>
                          <Typography variant="body2" color="text.secondary">
                            {new Date(message.createdAt).toLocaleDateString()}
                          </Typography>
                        </Box>
                      </Box>
                      <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                        {message.message}
                      </Typography>
                      <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
                        {message.status === 'pending' && (
                          <Button
                            variant="outlined"
                            onClick={() => handleMarkAsRead(message._id)}
                            sx={{
                              borderColor: 'primary.main',
                              color: 'primary.main',
                              '&:hover': {
                                backgroundColor: 'primary.light',
                                borderColor: 'primary.dark',
                              }
                            }}
                          >
                            Mark as Read
                          </Button>
                        )}
                        <Button
                          variant="outlined"
                          startIcon={<ReplyIcon />}
                          component={Link}
                          to={`/admin-messages/reply/${message._id}`}
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
                          onClick={() => handleDeleteMessage(message._id)}
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
            ))
          ) : (
            <Grid item xs={12}>
              <Box sx={{ textAlign: 'center', py: 8 }}>
                <Typography variant="h6" color="text.secondary">
                  No messages found
                </Typography>
              </Box>
            </Grid>
          )}
        </Grid>
      </motion.div>
    </Container>
  );
};

export default AdminMessages;