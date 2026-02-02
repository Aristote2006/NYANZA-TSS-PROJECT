import React from 'react';
import { Container, Grid, Typography, Card, CardContent, Button, Box, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PhoneIcon from '@mui/icons-material/Phone';

const LeadersPreview = () => {
  // First 3 leaders from the main Leaders page
  const leaders = [
    {
      id: 1,
      name: 'Eng. Ngabonziza Germain',
      position: 'School Manager',
      phone: '+250 788 309 436',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'
    },
    {
      id: 2,
      name: 'Nyirumuringa Peter',
      position: 'Secretary',
      phone: '+250 784 159 152',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'
    },
    {
      id: 3,
      name: 'Twagirayezu Pacifique',
      position: 'Deputy Officer in Charge of Studies (DOS)',
      phone: '+250 788 718 711',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'
    }
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

      <Grid container spacing={{ xs: 3, sm: 4, md: 4 }}>
        {leaders.map((leader, index) => (
          <Grid item xs={12} sm={6} md={4} key={leader.id}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <Card
                sx={{
                  height: '100%',
                  background: 'rgba(255, 255, 255, 0.98)',
                  borderRadius: 3,
                  boxShadow: '0 25px 50px rgba(0,0,0,0.15)',
                  overflow: 'hidden',
                  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  '&:hover': {
                    boxShadow: '0 35px 70px rgba(0,0,0,0.25)',
                    transform: 'scale(1.03)',
                  },
                  display: 'flex',
                  flexDirection: 'column',
                  minHeight: { xs: 420, sm: 440, md: 460 },
                }}
              >
                <Box
                  component="img"
                  src={leader.image}
                  alt={leader.name}
                  sx={{
                    width: '100%',
                    height: { xs: 180, sm: 200, md: 220 },
                    objectFit: 'cover',
                    borderBottom: '4px solid #e74c3c',
                  }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/400x220/e74c3c/FFFFFF?text=' + encodeURIComponent(leader.name);
                  }}
                />
                
                <CardContent sx={{ 
                  p: { xs: 2, sm: 2.5, md: 3 }, 
                  flexGrow: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '100%',
                }}>
                  <Box sx={{ mb: 2 }}>
                    <Typography 
                      variant="h6" 
                      align="center"
                      sx={{ 
                        fontWeight: 800, 
                        color: '#2c3e50',
                        fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
                        mb: 1.5,
                        lineHeight: 1.3,
                        minHeight: { xs: '2.6rem', sm: '2.8rem', md: '3rem' },
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      {leader.name}
                    </Typography>
                    
                    <Box
                      sx={{
                        backgroundColor: '#e74c3c',
                        color: 'white',
                        px: { xs: 2, sm: 2.5, md: 3 },
                        py: { xs: 1, sm: 1.2, md: 1.5 },
                        borderRadius: 2,
                        fontWeight: 700,
                        fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.85rem' },
                        textAlign: 'center',
                        boxShadow: '0 4px 15px rgba(231, 76, 60, 0.3)',
                        minHeight: { xs: '2.2rem', sm: '2.4rem', md: '2.6rem' },
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      {leader.position}
                    </Box>
                  </Box>
                  
                  <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    mt: 'auto',
                    p: { xs: 1, sm: 1.5, md: 2 },
                    backgroundColor: 'rgba(52, 152, 219, 0.1)',
                    borderRadius: 2,
                    border: '1px solid rgba(52, 152, 219, 0.2)',
                  }}>
                    <IconButton 
                      size="small"
                      sx={{ 
                        color: '#3498db',
                        mr: 1,
                        p: 0.5,
                        '&:hover': {
                          backgroundColor: 'rgba(52, 152, 219, 0.1)',
                          transform: 'scale(1.1)',
                        }
                      }}
                      onClick={() => window.location.href = `tel:${leader.phone.replace(/\s/g, '')}`}
                    >
                      <PhoneIcon sx={{ fontSize: { xs: '1.2rem', sm: '1.3rem', md: '1.4rem' } }} />
                    </IconButton>
                    <Typography 
                      variant="body2"
                      sx={{ 
                        fontWeight: 600,
                        color: '#2c3e50',
                        fontSize: { xs: '0.85rem', sm: '0.9rem', md: '0.95rem' },
                        cursor: 'pointer',
                        '&:hover': {
                          color: '#3498db',
                          textDecoration: 'underline',
                        }
                      }}
                      onClick={() => window.location.href = `tel:${leader.phone.replace(/\s/g, '')}`}
                    >
                      {leader.phone}
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