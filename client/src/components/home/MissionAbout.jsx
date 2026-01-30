import React from 'react';
import { Container, Grid, Typography, Box, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: 16,
  background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(250,250,250,0.9) 100%)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255,255,255,0.2)',
  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 15px 40px rgba(0,0,0,0.15)',
  },
}));

const MissionAbout = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
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
            Our Mission & Vision
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
            Learn about our commitment to excellence in technical education
          </Typography>
        </motion.div>
      </Box>

      <Grid container spacing={6} alignItems="stretch">
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <StyledPaper elevation={0}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Box
                  sx={{
                    width: 50,
                    height: 50,
                    backgroundColor: 'primary.main',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mr: 2,
                    boxShadow: '0 4px 12px rgba(44, 62, 80, 0.3)',
                  }}
                >
                  <Typography variant="h5" sx={{ color: 'white', fontWeight: 'bold' }}>
                    M
                  </Typography>
                </Box>
                <Typography
                  variant="h4"
                  component="h3"
                  sx={{
                    fontSize: { xs: '1.8rem', md: '2rem' },
                    fontWeight: 700,
                    color: 'primary.main',
                  }}
                >
                  Our Mission
                </Typography>
              </Box>
              <Typography
                variant="body1"
                sx={{
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  color: 'text.primary',
                  mb: 2,
                }}
              >
                To provide high-quality technical education that empowers students with practical skills and theoretical knowledge necessary for success in the modern workforce.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  color: 'text.secondary',
                }}
              >
                We are committed to fostering innovation, critical thinking, and professional excellence in all our students, preparing them to become leaders in their respective technical fields.
              </Typography>
            </StyledPaper>
          </motion.div>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <StyledPaper elevation={0}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Box
                  sx={{
                    width: 50,
                    height: 50,
                    backgroundColor: 'accent.main',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mr: 2,
                    boxShadow: '0 4px 12px rgba(52, 152, 219, 0.3)',
                  }}
                >
                  <Typography variant="h5" sx={{ color: 'white', fontWeight: 'bold' }}>
                    A
                  </Typography>
                </Box>
                <Typography
                  variant="h4"
                  component="h3"
                  sx={{
                    fontSize: { xs: '1.8rem', md: '2rem' },
                    fontWeight: 700,
                    color: 'primary.main',
                  }}
                >
                  About NYANZA TSS
                </Typography>
              </Box>
              <Typography
                variant="body1"
                sx={{
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  color: 'text.primary',
                  mb: 2,
                }}
              >
                Established in 1995, NYANZA Technical Secondary School has been at the forefront of technical education in Kenya. Our institution offers a wide range of programs designed to meet the evolving needs of the industry.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  color: 'text.secondary',
                }}
              >
                With state-of-the-art facilities, experienced faculty, and strong industry partnerships, we ensure our graduates are job-ready and equipped with the latest technical skills.
              </Typography>
            </StyledPaper>
          </motion.div>
        </Grid>
      </Grid>
      
      {/* Stats Section */}
      <Box sx={{ mt: 8 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h3"
            component="h3"
            sx={{
              fontSize: { xs: '1.8rem', md: '2.2rem' },
              fontWeight: 700,
              mb: 6,
              textAlign: 'center',
              background: 'linear-gradient(45deg, #2c3e50, #34495e)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Our Achievements
          </Typography>
        </motion.div>
        
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <StyledPaper elevation={0} sx={{ textAlign: 'center', py: 4 }}>
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
              </StyledPaper>
            </motion.div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <StyledPaper elevation={0} sx={{ textAlign: 'center', py: 4 }}>
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
                    WebKitBackgroundClip: 'text',
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
              </StyledPaper>
            </motion.div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <StyledPaper elevation={0} sx={{ textAlign: 'center', py: 4 }}>
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
                    WebKitBackgroundClip: 'text',
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
              </StyledPaper>
            </motion.div>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default MissionAbout;