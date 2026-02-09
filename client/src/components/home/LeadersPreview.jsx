import React from 'react';
import { Container, Grid, Typography, Card, CardContent, Button, Box, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PhoneIcon from '@mui/icons-material/Phone';

const LeadersPreview = () => {
  // First, third, and fourth leaders from the main Leaders page (matching exact structure)
  const leaders = [
    {
      id: 1,
      name: 'Eng. Ngabonziza Germain',
      position: 'School Manager',
      phone: '+250 788 309 436',
      qualification: 'BSc in Engineering, MBA',
      image: '/assets/images/manager.jpg'
    },
    {
      id: 3,
      name: 'Twagirayezu Pacifique',
      position: 'Deputy School Manager in Charge of Studies (DOS)',
      phone: '+250 788 718 711',
      qualification: 'Master of Education, BSc in Mathematics',
      image: '/assets/images/dos.jpg'
    },
    {
      id: 4,
      name: 'Harerimana Jean Damascène',
      position: 'Deputy Officer in Charge of Discipline (DOD)',
      phone: '+250 788 503 309',
      qualification: 'Bachelor of Science in Education',
      image: '/assets/images/prefet.jpg'
    }
  ];

  return (
    <Box
      sx={{
        minHeight: '100vh',
        py: { xs: 4, sm: 6, md: 8 },
        background: 'linear-gradient(135deg, #1a252f 0%, #2c3e50 100%)',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 20% 50%, rgba(52, 152, 219, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(46, 204, 113, 0.1) 0%, transparent 50%), radial-gradient(circle at 40% 80%, rgba(155, 89, 182, 0.1) 0%, transparent 50%)',
          zIndex: 1,
        }
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h2"
            align="center"
            sx={{
              fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.8rem', lg: '3.5rem' },
              fontWeight: 800,
              mb: { xs: 2, md: 3 },
              background: 'linear-gradient(45deg, #f1c40f, #e67e22)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            }}
          >
            Our Leadership Team
          </Typography>
          <Typography
            align="center"
            sx={{
              fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
              color: '#ecf0f1',
              mb: { xs: 6, md: 8 },
              maxWidth: '600px',
              mx: 'auto',
              textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
            }}
          >
            Meet the dedicated professionals leading NYANZA TSS towards excellence in technical education.
          </Typography>
        </motion.div>

        <Grid container spacing={{ xs: 3, sm: 4, md: 4 }} sx={{ alignItems: 'stretch' }}>
          {leaders.map((leader, index) => (
            <Grid item xs={12} sm={6} md={4} key={leader.id}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -15 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    background: 'rgba(255, 255, 255, 0.98)',
                    borderRadius: 3,
                    boxShadow: '0 25px 50px rgba(0,0,0,0.15)',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <Box
                    component="img"
                    src={leader.image}
                    alt={leader.name}
                    sx={{
                      width: '100%',
                      height: 'auto',
                      objectFit: 'cover',
                      objectPosition: 'center',
                      borderBottom: '4px solid #e74c3c',
                    }}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://via.placeholder.com/400x300/e74c3c/FFFFFF?text=' + encodeURIComponent(leader.name);
                    }}
                  />
                  
                  <CardContent sx={{ 
                    p: { xs: 2, sm: 2.5, md: 3 }, 
                    flex: '0 0 auto',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
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
                          mb: 2,
                        }}
                      >
                        {leader.position}
                      </Box>
                      
                      {/* Qualification Section */}
                      <Box
                        sx={{
                          backgroundColor: '#3498db',
                          color: 'white',
                          px: { xs: 2, sm: 2.5, md: 3 },
                          py: { xs: 1, sm: 1.2, md: 1.5 },
                          borderRadius: 2,
                          fontWeight: 600,
                          fontSize: { xs: '0.7rem', sm: '0.75rem', md: '0.8rem' },
                          textAlign: 'center',
                          boxShadow: '0 4px 15px rgba(52, 152, 219, 0.3)',
                          minHeight: { xs: '2.2rem', sm: '2.4rem', md: '2.6rem' },
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <Typography
                          component="span"
                          sx={{
                            fontSize: { xs: '0.7rem', sm: '0.75rem', md: '0.8rem' },
                            fontWeight: 600,
                          }}
                        >
                          Qualifications: {leader.qualification}
                        </Typography>
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
                background: 'linear-gradient(45deg, #f1c40f, #e67e22)',
                color: 'white',
                px: 5,
                py: 1.5,
                fontSize: '1.1rem',
                fontWeight: 600,
                borderRadius: 3,
                boxShadow: '0 4px 20px rgba(241, 196, 15, 0.4)',
                '&:hover': {
                  background: 'linear-gradient(45deg, #e67e22, #d35400)',
                  boxShadow: '0 6px 25px rgba(230, 126, 34, 0.6)',
                },
              }}
            >
              View All Leaders
            </Button>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default LeadersPreview;