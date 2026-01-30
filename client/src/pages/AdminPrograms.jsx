import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import SchoolIcon from '@mui/icons-material/School';
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

const AdminPrograms = () => {
  // Mock data for programs
  const programs = [
    { id: 1, name: 'Computer Science', duration: '4 years', students: 120, description: 'Comprehensive computer science program' },
    { id: 2, name: 'Engineering', duration: '5 years', students: 95, description: 'Mechanical and electrical engineering' },
    { id: 3, name: 'Business Administration', duration: '4 years', students: 80, description: 'Modern business management' },
    { id: 4, name: 'Health Sciences', duration: '3 years', students: 110, description: 'Medical and health sciences' },
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
                boxShadow: '0 8px 20px rgba(44, 62, 80, 0.3)'
              }}
            >
              <SchoolIcon sx={{ fontSize: 40, color: 'white' }} />
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
            Program Management
          </Typography>
          <Typography variant="h6" color="text.secondary">
            View, edit, and manage academic programs
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4 }}>
          <Typography variant="h5" sx={{ fontWeight: 600, color: 'primary.main' }}>
            Programs ({programs.length})
          </Typography>
          <Button
            variant="contained"
            component={Link}
            to="/admin-programs/add"
            startIcon={<AddIcon />}
            sx={{
              background: 'linear-gradient(45deg, #2c3e50, #34495e)',
              '&:hover': {
                background: 'linear-gradient(45deg, #1a252f, #2c3e50)',
              }
            }}
          >
            Add New Program
          </Button>
        </Box>

        <Grid container spacing={3}>
          {programs.map((program, index) => (
            <Grid item xs={12} md={6} lg={4} key={program.id}>
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
                  boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
                }}>
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: 700, color: 'primary.main', mb: 1 }}>
                      {program.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                      {program.description}
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                      <Typography variant="body2">
                        <strong>Duration:</strong> {program.duration}
                      </Typography>
                      <Typography variant="body2">
                        <strong>Students:</strong> {program.students}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
                      <Button
                        variant="outlined"
                        startIcon={<EditIcon />}
                        component={Link}
                        to={`/admin-programs/edit/${program.id}`}
                        sx={{
                          flex: 1,
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
                          flex: 1,
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

export default AdminPrograms;