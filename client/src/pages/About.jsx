import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';
import storyImage from '../assets/images/he.jpeg';
import missionImage from '../assets/images/viewup.webp';
import visionImage from '../assets/images/dorm.webp';
import wholeImage from '../assets/images/whole.webp';

const About = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        py: { xs: 4, sm: 6, md: 8 },
        background: 'linear-gradient(135deg, #2c3e50 0%, #1a252f 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
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
              mb: { xs: 4, md: 6 },
              background: 'linear-gradient(45deg, #ecf0f1, #bdc3c7)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
            }}
          >
            About NYANZA TSS
          </Typography>
        </motion.div>

        <Grid container spacing={4} sx={{ mb: { xs: 6, md: 8 } }}>
          <Grid item xs={12}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card
                sx={{
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: 4,
                  boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                  p: { xs: 2, sm: 3, md: 4 },
                  position: 'relative',
                  overflow: 'hidden',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `url(${wholeImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: 0.15,
                    zIndex: 1,
                  },
                  '& > *': {
                    position: 'relative',
                    zIndex: 2,
                  }
                }}
              >
                <Grid container spacing={2} alignItems="center">
                  <Grid item xs={12} md={6}>
                    <Box
                      component="img"
                      src={storyImage}
                      alt="NYANZA TSS Campus"
                      sx={{
                        width: '100%',
                        height: { xs: '200px', sm: '250px', md: '300px' },
                        objectFit: 'cover',
                        borderRadius: 2,
                        opacity: 0.9,
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography variant="h4" gutterBottom sx={{ color: 'primary.main', fontWeight: 700, textShadow: '1px 1px 2px rgba(255,255,255,0.5)', fontSize: { xs: '1.5rem', md: '2rem' } }}>
                      Our Story
                    </Typography>
                    <Typography variant="body1" paragraph sx={{ lineHeight: 1.8, color: '#1a252f', textShadow: '0px 0px 1px rgba(255,255,255,0.7)', fontWeight: 600, fontSize: { xs: '0.9rem', md: '1rem' } }}>
                      The foundation of Nyanza Technical Secondary School is rooted in a vision of national progress. On November 4th, 2005, our institution was officially inaugurated by His Excellency Paul Kagame, the President of the Republic of Rwanda, marking a new chapter in technical education for the region. Since that milestone, Nyanza TSS has grown into more than just a school; it has become a vibrant community of excellence. We aren't just teaching students how to use tools—we are empowering the next generation of Rwandan innovators, entrepreneurs, and leaders to compete on the global stage. As we look toward the future, we remain rooted in our history while reaching for international standards, ensuring that every graduate who leaves our gates is ready to build a better world.
                    </Typography>
                    <Typography variant="body1" paragraph sx={{ lineHeight: 1.8, color: '#1a252f', textShadow: '0px 0px 1px rgba(255,255,255,0.7)', fontWeight: 600, fontSize: { xs: '0.9rem', md: '1rem' } }}>
                      Located in the heart of Nyanza, our school combines traditional academic rigor with 
                      innovative teaching methodologies, preparing students for the challenges of tomorrow's 
                      technological landscape.
                    </Typography>
                  </Grid>
                </Grid>
              </Card>
            </motion.div>
          </Grid>
        </Grid>

        <Grid container spacing={4} sx={{ mb: { xs: 6, md: 8 } }}>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Card
                sx={{
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: 4,
                  boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                  p: { xs: 2, sm: 3, md: 4 },
                  height: '100%',
                  minHeight: { xs: 300, sm: 350, md: 400 },
                  position: 'relative',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `url(${missionImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: 0.2,
                    zIndex: 1,
                  },
                  '& > *': {
                    position: 'relative',
                    zIndex: 2,
                  }
                }}
              >
                <Typography variant="h4" gutterBottom sx={{ color: 'primary.main', fontWeight: 700, textShadow: '1px 1px 2px rgba(255,255,255,0.5)', fontSize: { xs: '1.5rem', md: '2rem' } }}>
                  Our Mission
                </Typography>
                <Typography variant="body1" paragraph sx={{ lineHeight: 1.8, color: '#1a252f', textShadow: '0px 0px 1px rgba(255,255,255,0.7)', fontWeight: 600, fontSize: { xs: '0.9rem', md: '1rem' }, flexGrow: 1 }}>
                  At Nyanza Technical Secondary School, our mission is to drive the development of national and regional youth through targeted educational initiatives. We are committed to providing high-quality technical education that delivers real value, ensuring our students are prepared for competitive employment on a global scale. Beyond technical skills, we focus on nurturing responsible and committed citizens who are ready to serve and impact both Rwandan society and the world at large.
                </Typography>
              </Card>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Card
                sx={{
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: 4,
                  boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                  p: { xs: 2, sm: 3, md: 4 },
                  height: '100%',
                  minHeight: { xs: 300, sm: 350, md: 400 },
                  position: 'relative',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `url(${visionImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: 0.2,
                    zIndex: 1,
                  },
                  '& > *': {
                    position: 'relative',
                    zIndex: 2,
                  }
                }}
              >
                <Typography variant="h4" gutterBottom sx={{ color: 'primary.main', fontWeight: 700, textShadow: '1px 1px 2px rgba(255,255,255,0.5)', fontSize: { xs: '1.5rem', md: '2rem' } }}>
                  Our Vision
                </Typography>
                <Typography variant="body1" paragraph sx={{ lineHeight: 1.8, color: '#1a252f', textShadow: '0px 0px 1px rgba(255,255,255,0.7)', fontWeight: 600, fontSize: { xs: '0.9rem', md: '1rem' }, flexGrow: 1 }}>
                  Our vision is to be a cornerstone of national development by providing relevant, world-class technical education. We strive to meet and exceed international standards by fostering a culture of excellence and innovation. By prioritizing continuous improvement and global benchmarking, we aim to remain a leading institution that empowers the next generation of technical professionals.
                </Typography>
              </Card>
            </motion.div>
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Card
                sx={{
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: 4,
                  boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                  textAlign: 'center',
                  p: { xs: 2, sm: 3, md: 4 },
                  position: 'relative',
                  overflow: 'hidden',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `url(${wholeImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: 0.1,
                    zIndex: 1,
                  },
                  '& > *': {
                    position: 'relative',
                    zIndex: 2,
                  }
                }}
              >
                <Typography variant="h5" gutterBottom sx={{ color: 'primary.main', fontWeight: 700, fontSize: { xs: '1.2rem', md: '1.5rem' } }}>
                  Modern Facilities
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6, fontSize: { xs: '0.85rem', md: '1rem' } }}>
                  State-of-the-art laboratories, workshops, and learning environments designed to foster 
                  hands-on experience and practical learning.
                </Typography>
              </Card>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Card
                sx={{
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: 4,
                  boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                  textAlign: 'center',
                  p: { xs: 2, sm: 3, md: 4 },
                  position: 'relative',
                  overflow: 'hidden',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `url(${missionImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: 0.1,
                    zIndex: 1,
                  },
                  '& > *': {
                    position: 'relative',
                    zIndex: 2,
                  }
                }}
              >
                <Typography variant="h5" gutterBottom sx={{ color: 'primary.main', fontWeight: 700, fontSize: { xs: '1.2rem', md: '1.5rem' } }}>
                  Academic Excellence
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6, fontSize: { xs: '0.85rem', md: '1rem' } }}>
                  Proven track record of outstanding academic performance and successful career placement 
                  of our graduates.
                </Typography>
              </Card>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <Card
                sx={{
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: 4,
                  boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                  textAlign: 'center',
                  p: { xs: 2, sm: 3, md: 4 },
                  position: 'relative',
                  overflow: 'hidden',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `url(${visionImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: 0.1,
                    zIndex: 1,
                  },
                  '& > *': {
                    position: 'relative',
                    zIndex: 2,
                  }
                }}
              >
                <Typography variant="h5" gutterBottom sx={{ color: 'primary.main', fontWeight: 700, fontSize: { xs: '1.2rem', md: '1.5rem' } }}>
                  Community Impact
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6, fontSize: { xs: '0.85rem', md: '1rem' } }}>
                  Active engagement with the local community and commitment to sustainable development 
                  initiatives.
                </Typography>
              </Card>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;