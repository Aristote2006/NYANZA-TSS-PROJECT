import React from 'react';
import { Container, Grid, Typography, Card, CardContent, CardMedia, Button, Box, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const LeadersPreview = () => {
  // Sample leaders data - in a real app, this would come from an API
  const leaders = [
    {
      id: 1,
      name: 'Dr. James Mwangi',
      position: 'Principal',
      department: 'Administration',
      bio: 'PhD in Educational Leadership with 20+ years of experience in technical education.',
      imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    },
    {
      id: 2,
      name: 'Eng. Sarah Kariuki',
      position: 'Head of Engineering Department',
      department: 'Engineering',
      bio: 'Professional Engineer with expertise in mechanical and industrial engineering.',
      imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    },
    {
      id: 3,
      name: 'Mr. David Ochieng',
      position: 'Head of ICT Department',
      department: 'Information & Communication Technology',
      bio: 'MSc in Computer Science with specialization in cybersecurity and networking.',
      imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
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
            Meet Our Leadership
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
            Experienced educators and administrators dedicated to providing quality technical education.
          </Typography>
        </motion.div>
      </Box>

      <Grid container spacing={4}>
        {leaders.map((leader, index) => (
          <Grid item xs={12} sm={6} md={4} key={leader.id}>
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
                <Box sx={{ position: 'relative', height: 250 }}>
                  <CardMedia
                    component="img"
                    height="100%"
                    image={leader.imageUrl}
                    alt={leader.name}
                    sx={{ objectFit: 'cover' }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)',
                    }}
                  />
                </Box>
                <CardContent sx={{ flexGrow: 1, pt: 3, background: 'linear-gradient(to bottom, rgba(255,255,255,0.1) 0%, white 100%)' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Avatar 
                      src={leader.imageUrl} 
                      alt={leader.name}
                      sx={{ width: 60, height: 60, mr: 2, border: '3px solid', borderColor: 'primary.main' }}
                    />
                    <Box>
                      <Typography
                        gutterBottom
                        variant="h6"
                        component="h3"
                        sx={{ fontWeight: 700, color: 'primary.main' }}
                      >
                        {leader.name}
                      </Typography>
                      <Typography variant="body2" color="secondary.main" sx={{ fontWeight: 600 }}>
                        {leader.position}
                      </Typography>
                    </Box>
                  </Box>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {leader.bio}
                  </Typography>
                  <Box sx={{ mt: 2 }}>
                    <Typography variant="caption" color="text.secondary" sx={{ fontStyle: 'italic' }}>
                      {leader.department}
                    </Typography>
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
            to="/leaders"
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
            View All Leaders
          </Button>
        </motion.div>
      </Box>
    </Container>
  );
};

export default LeadersPreview;