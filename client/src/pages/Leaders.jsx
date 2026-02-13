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
      qualification: 'Masters in Mechanical and Production Engineering',
      image: '/assets/images/manager.jpg'
    },
    {
      id: 2,
      name: 'Nyirumuringa Peter',
      position: 'Secretary',
      phone: '+250 784 159 152',
      qualification: 'Bachelor in Office Administration and Management(OAM)',
      image: '/assets/images/secretary.jpeg'
    },
    {
      id: 3,
      name: 'Twagirayezu Pacifique',
      position: 'Deputy School Manager in Charge of Studies (DOS)',
      phone: '+250 788 718 711',
      qualification: 'Bachelor in Computer Engineering',
      image: '/assets/images/dos.jpg'
    },
    {
      id: 4,
      name: 'Harerimana Jean Damascène',
      position: 'Deputy Officer in Charge of Discipline (DOD)',
      phone: '+250 788 503 309',
      qualification: 'Bachelor in Social Sciences',
      image: '/assets/images/prefet.jpg'
    },
    {
      id: 5,
      name: 'IZABAYO Claumbine',
      position: 'Accountant',
      phone: '+250 788 521 339',
      qualification: 'Bachelor in Business Management/Accounting',
      image: '/assets/images/accountant.jpg'
    },
    {
      id: 6,
      name: 'TWAGIRIMANA Jean Baptiste',
      position: 'Recovery',
      phone: '+250 788 852 475',
      qualification: 'Bachelor of Business Administration',
      image: '/assets/images/baptiste.jpg.jpeg'
    },
    {
      id: 7,
      name: 'TUYISHIME Ange Kizito',
      position: 'Dean of Teachers',
      phone: '+250 788 253 932',
      qualification: 'Bachelor in Civil Engineering',
      image: '/assets/images/HEAD TEACHER.jpg.jpeg'
    },
    {
      id: 8,
      name: 'KANKINDI Amina',
      position: 'Dean of Teachers(Women)',
      phone: '+250 781 139 687',
      qualification: 'Bachelor in Automobile Technology',
      image: '/assets/images/AMINA1.jpg.jpeg'
    },
    {
      id: 9,
      name: 'MUKASHYAKA Collette',
      position: 'Metron/Animatrice',
      phone: '+250 783 572 642',
      image: '/assets/images/METRON.jpg.jpeg'
    },
    {
      id: 10,
      name: 'AKINGENEYE Clementine',
      position: 'Metron/Animatrice',
      phone: '+250 790 678 571',
      image: '/assets/images/METRON 2.jpg.jpeg'
    },
    {
      id: 11,
      name: 'NIYONSHUTI Yves',
      position: 'Patron/Animateur',
      phone: '‎+250 737 830 774',
      image: '/assets/images/PATRON 2.jpg.jpeg'
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
                      
                      {/* Qualification Section - Hide for IDs 9, 10, 11 */}
                      {![9, 10, 11].includes(leader.id) && (
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
                      )}
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
      
      {/* Achievements Section */}
      <Container maxWidth="lg" sx={{ py: 8, mt: 8, background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)' }}>
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontSize: { xs: '2rem', md: '2.5rem' },
              fontWeight: 700,
              mb: 6,
              background: 'linear-gradient(45deg, #2c3e50, #34495e)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Our Achievements
          </Typography>
        </Box>
        
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Box
              sx={{
                textAlign: 'center',
                py: 4,
                background: 'rgba(255, 255, 255, 0.98)',
                borderRadius: 3,
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 15px 40px rgba(0,0,0,0.15)',
                },
              }}
            >
              <Typography
                variant="h2"
                component="div"
                sx={{
                  fontSize: '3rem',
                  fontWeight: 700,
                  color: 'primary.main',
                  mb: 1,
                  background: 'linear-gradient(45deg, #2c3e50, #34495e)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                28+
              </Typography>
              <Typography variant="h6" color="primary.main" sx={{ fontWeight: 600 }}>
                Years of Excellence
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                Dedicated to quality education
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box
              sx={{
                textAlign: 'center',
                py: 4,
                background: 'rgba(255, 255, 255, 0.98)',
                borderRadius: 3,
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 15px 40px rgba(0,0,0,0.15)',
                },
              }}
            >
              <Typography
                variant="h2"
                component="div"
                sx={{
                  fontSize: '3rem',
                  fontWeight: 700,
                  color: 'accent.main',
                  mb: 1,
                  background: 'linear-gradient(45deg, #3498db, #2980b9)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebKitTextFillColor: 'transparent',
                }}
              >
                5000+
              </Typography>
              <Typography variant="h6" color="primary.main" sx={{ fontWeight: 600 }}>
                Alumni Graduated
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                Successful professionals worldwide
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box
              sx={{
                textAlign: 'center',
                py: 4,
                background: 'rgba(255, 255, 255, 0.98)',
                borderRadius: 3,
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 15px 40px rgba(0,0,0,0.15)',
                },
              }}
            >
              <Typography
                variant="h2"
                component="div"
                sx={{
                  fontSize: '3rem',
                  fontWeight: 700,
                  color: 'secondary.main',
                  mb: 1,
                  background: 'linear-gradient(45deg, #e74c3c, #c0392b)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebKitTextFillColor: 'transparent',
                }}
              >
                15+
              </Typography>
              <Typography variant="h6" color="primary.main" sx={{ fontWeight: 600 }}>
                Programs Offered
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                Diverse technical disciplines
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Leaders;