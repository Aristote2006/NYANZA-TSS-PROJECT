import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, Button, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import PeopleIcon from '@mui/icons-material/People';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
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

const AdminLeaders = () => {
  // Mock data for leaders
  const leaders = [
    { id: 1, name: 'John Doe', position: 'Principal', department: 'Administration', email: 'john.doe@nyanzatss.edu.ke', phone: '+254 712 345 678' },
    { id: 2, name: 'Jane Smith', position: 'Vice Principal', department: 'Academics', email: 'jane.smith@nyanzatss.edu.ke', phone: '+254 712 345 679' },
    { id: 3, name: 'Robert Johnson', position: 'Head of ICT', department: 'Computer Science', email: 'robert.johnson@nyanzatss.edu.ke', phone: '+254 712 345 680' },
    { id: 4, name: 'Emily Davis', position: 'Librarian', department: 'Library', email: 'emily.davis@nyanzatss.edu.ke', phone: '+254 712 345 681' },
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

        <Grid container spacing={3}>
          {leaders.map((leader, index) => (
            <Grid item xs={12} md={6} key={leader.id}>
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
                        {leader.name.charAt(0)}
                      </Avatar>
                      <Box>
                        <Typography variant="h6" sx={{ fontWeight: 700, color: 'primary.main' }}>
                          {leader.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {leader.position}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {leader.department}
                        </Typography>
                      </Box>
                    </Box>
                    <Box sx={{ mb: 2 }}>
                      <Typography variant="body2" color="text.secondary">
                        <strong>Email:</strong> {leader.email}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        <strong>Phone:</strong> {leader.phone}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
                      <Button
                        variant="outlined"
                        startIcon={<EditIcon />}
                        component={Link}
                        to={`/admin-leaders/edit/${leader.id}`}
                        sx={{
                          borderColor: 'primary.main',
                          color: 'primary.main',
                          '&:hover': {
                            backgroundColor: 'primary.light',
                            borderColor: 'primary.dark',
                          }
                        }}
                      >
                        Edit
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

export default AdminLeaders;