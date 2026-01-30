import React from 'react';
import { Container, Grid, Typography, Card, CardContent, CardMedia, Button, Box, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import EngineeringIcon from '@mui/icons-material/Engineering';
import ComputerIcon from '@mui/icons-material/Computer';
import ScienceIcon from '@mui/icons-material/Science';

const ProgramsPreview = () => {
  // Sample programs data - in a real app, this would come from an API
  const programs = [
    {
      id: 1,
      title: 'Electrical Engineering',
      description: 'Comprehensive program covering electrical power systems, electronics, and control systems.',
      duration: '4 Years',
      imageUrl: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
      icon: <EngineeringIcon sx={{ fontSize: 40 }} />,
      category: 'Engineering'
    },
    {
      id: 2,
      title: 'Computer Science',
      description: 'Modern computing, software development, algorithms, and data structures.',
      duration: '3 Years',
      imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
      icon: <ComputerIcon sx={{ fontSize: 40 }} />,
      category: 'Technology'
    },
    {
      id: 3,
      title: 'Mechanical Engineering',
      description: 'Design, analysis, manufacturing, and maintenance of mechanical systems.',
      duration: '4 Years',
      imageUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
      icon: <ScienceIcon sx={{ fontSize: 40 }} />,
      category: 'Engineering'
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8, background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)' }}>
      <Box sx={{ textAlign: 'center', mb: 8 }}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontSize: { xs: '2rem', md: '2.5rem' },
              fontWeight: 700,
              mb: 2,
              background: 'linear-gradient(45deg, #2c3e50, #34495e)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Our Programs
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontSize: '1.2rem',
              color: 'text.secondary',
              maxWidth: '600px',
              mx: 'auto',
            }}
          >
            Industry-relevant technical programs designed to prepare students for successful careers.
          </Typography>
        </motion.div>
      </Box>

      <Grid container spacing={4}>
        {programs.map((program, index) => (
          <Grid item xs={12} sm={6} md={4} key={program.id}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 3,
                  overflow: 'hidden',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  background: 'white',
                  '&:hover': {
                    transform: 'translateY(-10px)',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                  },
                }}
              >
                <Box sx={{ position: 'relative', height: 200 }}>
                  <CardMedia
                    component="img"
                    height="100%"
                    image={program.imageUrl}
                    alt={program.title}
                    sx={{ objectFit: 'cover' }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 16,
                      right: 16,
                      background: 'rgba(255, 255, 255, 0.9)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: 16,
                      px: 1.5,
                      py: 0.5,
                    }}
                  >
                    <Chip
                      label={program.category}
                      size="small"
                      sx={{ 
                        backgroundColor: 'primary.main', 
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: '0.75rem'
                      }}
                    />
                  </Box>
                </Box>
                <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', pt: 3 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                    <Box sx={{ 
                      backgroundColor: 'primary.main', 
                      borderRadius: '50%', 
                      width: 80, 
                      height: 80, 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      color: 'white',
                      boxShadow: '0 4px 12px rgba(44, 62, 80, 0.3)',
                      mx: 'auto'
                    }}>
                      {program.icon}
                    </Box>
                  </Box>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="h3"
                    sx={{ fontWeight: 700, textAlign: 'center', color: 'primary.main', mb: 1 }}
                  >
                    {program.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph sx={{ flexGrow: 1, textAlign: 'center' }}>
                    {program.description}
                  </Typography>
                  <Box sx={{ mt: 'auto', pt: 2, textAlign: 'center' }}>
                    <Chip
                      label={`Duration: ${program.duration}`}
                      size="small"
                      sx={{ 
                        backgroundColor: 'accent.main', 
                        color: 'white',
                        fontWeight: 'bold'
                      }}
                    />
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ textAlign: 'center', mt: 8 }}>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            variant="contained"
            size="large"
            component={Link}
            to="/programs"
            sx={{
              background: 'linear-gradient(45deg, #2c3e50, #34495e)',
              color: 'white',
              px: 5,
              py: 1.5,
              fontSize: '1.1rem',
              fontWeight: 600,
              borderRadius: 3,
              boxShadow: '0 4px 20px rgba(44, 62, 80, 0.4)',
              '&:hover': {
                background: 'linear-gradient(45deg, #1a252f, #2c3e50)',
                boxShadow: '0 6px 25px rgba(44, 62, 80, 0.6)',
              },
            }}
          >
            View All Programs
          </Button>
        </motion.div>
      </Box>
    </Container>
  );
};

export default ProgramsPreview;