import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import PhoneIcon from '@mui/icons-material/Phone';

const Leaders = () => {
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
    },
    {
      id: 4,
      name: 'Harerimana Jean Damascène',
      position: 'Deputy Officer in Charge of Discipline (DOD)',
      phone: '+250 788 503 309',
      image: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'
    },
    {
      id: 5,
      name: 'IZABAYO Claumbine',
      position: 'Accountant',
      phone: '+250 788 521 339',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'
    },
    {
      id: 6,
      name: 'TWAGIRIMANA Jean Baptiste',
      position: 'Recovery',
      phone: '+250 788 852 475',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'
    },
    {
      id: 7,
      name: 'TUYISHIME Ange Kizito',
      position: 'Dean of Teachers',
      phone: '+250 788 253 932',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'
    },
    {
      id: 8,
      name: 'Eng. AHIMANA Jean Marie Vianney',
      position: 'Head of ICT Department',
      phone: '+250 788 804 059',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'
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

        <Grid container spacing={{ xs: 3, sm: 4, md: 4 }}>
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
      </Container>
    </Box>
  );
};

export default Leaders;