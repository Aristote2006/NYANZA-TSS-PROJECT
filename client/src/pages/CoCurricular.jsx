import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { motion } from 'framer-motion';

const CoCurricular = () => {
  const activities = [
    {
      id: 1,
      title: 'Peace and Love Proclaimer Club (PLP)',
      description: 'A student-led initiative promoting peace, love, and unity among students through community service and awareness campaigns.',
      image: '/assets/images/plplogo.png',
      category: 'Student Clubs'
    },
    {
      id: 2,
      title: 'School Band',
      description: 'A student-led ensemble dedicated to musical performances and competitions.',
      image: '/assets/images/schoolband.jpg',
      category: 'Student Clubs'
    },
    {
      id: 3,
      title: 'Traditional Dance Troupe',
      description: 'Preserving and showcasing Rwandan cultural heritage through traditional dance performances and competitions.',
      image: '/assets/images/troop.jpg',
      category: 'Cultural Activities'
    },
    {
      id: 4,
      title: 'Umuganda Community Service',
      description: 'Monthly community work participation where students engage in environmental cleaning, infrastructure development, and social projects.',
      image: '/assets/images/public.jpg',
      category: 'Community Service'
    },
    {
      id: 5,
      title: 'Sports Teams',
      description: 'Active participation in various sports including volleyball, basketball, and football with regular training and competitions.',
      image: '/assets/images/volleyball.jpg',
      category: 'Sports'
    },
    {
      id: 6,
      title: 'Academic Competitions',
      description: 'Participation in science fairs, mathematics competitions, and technical skills challenges at district and national levels.',
      image: '/assets/images/computer.jpg',
      category: 'Academic Activities'
    }
  ];

  const events = [
    {
      id: 1,
      title: 'Annual Cultural Day',
      date: 'Every September',
      description: 'Celebration of Rwandan culture with traditional dances, music, and food'
    },
    {
      id: 2,
      title: 'Sports Day',
      date: 'Every March',
      description: 'Inter-house sports competitions and athletic events'
    },
    {
      id: 3,
      title: 'Science Fair',
      date: 'Every November',
      description: 'Student projects showcasing innovation and technical skills'
    },
    {
      id: 4,
      title: 'Community Outreach',
      date: 'Monthly',
      description: 'Umuganda activities and community service projects'
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
            Co-Curricular Activities
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
            Discover the vibrant student life at NYANZA TSS through our diverse co-curricular programs and activities.
          </Typography>
        </motion.div>

        {/* Student Life Section */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h4"
            align="center"
            sx={{
              fontSize: { xs: '1.4rem', sm: '1.6rem', md: '1.8rem' },
              fontWeight: 700,
              mb: 6,
              color: '#3498db',
              textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
            }}
          >
            Student Life & Activities
          </Typography>
          
          <Grid container spacing={{ xs: 3, sm: 4, md: 4 }} sx={{ alignItems: 'stretch' }}>
            {activities.map((activity, index) => (
              <Grid item xs={12} sm={6} md={4} key={activity.id}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
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
                    <CardMedia
                      component="img"
                      height="200"
                      image={activity.image}
                      alt={activity.title}
                      sx={{
                        objectFit: 'cover',
                        borderBottom: '3px solid #3498db',
                      }}
                    />
                    <CardContent sx={{ 
                      p: { xs: 2, sm: 2.5, md: 3 }, 
                      flex: '1 0 auto',
                    }}>
                      <Box sx={{ mb: 2 }}>
                        <Typography 
                          variant="h6" 
                          sx={{ 
                            fontWeight: 700, 
                            color: '#2c3e50',
                            fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
                            mb: 1,
                          }}
                        >
                          {activity.title}
                        </Typography>
                        <Box
                          sx={{
                            backgroundColor: '#3498db',
                            color: 'white',
                            px: 1.5,
                            py: 0.5,
                            borderRadius: 1,
                            fontWeight: 600,
                            fontSize: '0.75rem',
                            display: 'inline-block',
                            mb: 1.5,
                          }}
                        >
                          {activity.category}
                        </Box>
                      </Box>
                      <Typography 
                        variant="body2"
                        sx={{ 
                          color: '#7f8c8d',
                          lineHeight: 1.6,
                        }}
                      >
                        {activity.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default CoCurricular;