import React from 'react';
import { Container, Grid, Typography, Link, Box, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <Box 
      component="footer" 
      sx={{ 
        background: 'linear-gradient(135deg, #2c3e50 0%, #1a252f 100%)',
        color: 'white', 
        py: 6,
        mt: 'auto'
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Box
                sx={{ 
                  width: 40, 
                  height: 40, 
                  backgroundColor: 'accent.main', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  mr: 1
                }}
              >
                <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold', fontSize: '1rem' }}>
                  N
                </Typography>
              </Box>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>
                NYANZA TSS
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ opacity: 0.8, mb: 3 }}>
              Providing quality technical education to empower the next generation of skilled professionals.
            </Typography>
            
            {/* Social Media Icons */}
            <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
              <motion.div whileHover={{ scale: 1.2, rotate: 5 }}>
                <IconButton 
                  href="#" 
                  color="inherit" 
                  sx={{ 
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    '&:hover': { 
                      backgroundColor: 'accent.main',
                      transform: 'scale(1.1)'
                    }
                  }}
                >
                  <FacebookIcon />
                </IconButton>
              </motion.div>
              <motion.div whileHover={{ scale: 1.2, rotate: -5 }}>
                <IconButton 
                  href="#" 
                  color="inherit" 
                  sx={{ 
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    '&:hover': { 
                      backgroundColor: 'accent.main',
                      transform: 'scale(1.1)'
                    }
                  }}
                >
                  <TwitterIcon />
                </IconButton>
              </motion.div>
              <motion.div whileHover={{ scale: 1.2, rotate: 5 }}>
                <IconButton 
                  href="#" 
                  color="inherit" 
                  sx={{ 
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    '&:hover': { 
                      backgroundColor: 'accent.main',
                      transform: 'scale(1.1)'
                    }
                  }}
                >
                  <LinkedInIcon />
                </IconButton>
              </motion.div>
              <motion.div whileHover={{ scale: 1.2, rotate: -5 }}>
                <IconButton 
                  href="#" 
                  color="inherit" 
                  sx={{ 
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    '&:hover': { 
                      backgroundColor: 'accent.main',
                      transform: 'scale(1.1)'
                    }
                  }}
                >
                  <InstagramIcon />
                </IconButton>
              </motion.div>
              <motion.div whileHover={{ scale: 1.2, rotate: 5 }}>
                <IconButton 
                  href="#" 
                  color="inherit" 
                  sx={{ 
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    '&:hover': { 
                      backgroundColor: 'accent.main',
                      transform: 'scale(1.1)'
                    }
                  }}
                >
                  <YouTubeIcon />
                </IconButton>
              </motion.div>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={2}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 3, position: 'relative' }}>
              Quick Links
              <Box 
                sx={{ 
                  position: 'absolute', 
                  bottom: '-8px', 
                  left: 0, 
                  width: '40px', 
                  height: '3px', 
                  backgroundColor: 'accent.main',
                  borderRadius: '3px'
                }}
              />
            </Typography>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '10px' }}>
                <Link href="/" color="inherit" underline="hover" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <span style={{ fontSize: '0.8rem' }}>→</span> Home
                </Link>
              </li>
              <li style={{ marginBottom: '10px' }}>
                <Link href="/about" color="inherit" underline="hover" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <span style={{ fontSize: '0.8rem' }}>→</span> About
                </Link>
              </li>
              <li style={{ marginBottom: '10px' }}>
                <Link href="/programs" color="inherit" underline="hover" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <span style={{ fontSize: '0.8rem' }}>→</span> Programs
                </Link>
              </li>
              <li style={{ marginBottom: '10px' }}>
                <Link href="/news" color="inherit" underline="hover" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <span style={{ fontSize: '0.8rem' }}>→</span> News
                </Link>
              </li>
              <li>
                <Link href="/contact" color="inherit" underline="hover" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <span style={{ fontSize: '0.8rem' }}>→</span> Contact
                </Link>
              </li>
            </ul>
          </Grid>
          
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 3, position: 'relative' }}>
              Contact Info
              <Box 
                sx={{ 
                  position: 'absolute', 
                  bottom: '-8px', 
                  left: 0, 
                  width: '40px', 
                  height: '3px', 
                  backgroundColor: 'accent.main',
                  borderRadius: '3px'
                }}
              />
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.8, mb: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
              📧 Email: info@nyanzatss.edu.ke
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.8, mb: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
              📞 Phone: +254 700 000 000
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.8, mb: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
              📍 Location: Nairobi, Kenya
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.8, mt: 2 }}>
              Office Hours: Mon-Fri 8:00 AM - 5:00 PM
            </Typography>
          </Grid>
          
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 3, position: 'relative' }}>
              Quick Access
              <Box 
                sx={{ 
                  position: 'absolute', 
                  bottom: '-8px', 
                  left: 0, 
                  width: '40px', 
                  height: '3px', 
                  backgroundColor: 'accent.main',
                  borderRadius: '3px'
                }}
              />
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.8, mb: 1 }}>
              <Link href="/admissions" color="inherit" underline="hover">Admissions</Link>
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.8, mb: 1 }}>
              <Link href="/events" color="inherit" underline="hover">Events Calendar</Link>
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.8, mb: 1 }}>
              <Link href="/careers" color="inherit" underline="hover">Careers</Link>
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.8, mb: 1 }}>
              <Link href="/library" color="inherit" underline="hover">Library</Link>
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.8 }}>
              <Link href="/student-portal" color="inherit" underline="hover">Student Portal</Link>
            </Typography>
          </Grid>
        </Grid>
        
        <Box sx={{ pt: 4, borderTop: '1px solid rgba(255,255,255,0.1)', mt: 4, textAlign: 'center' }}>
          <Typography variant="body2" sx={{ opacity: 0.6 }}>
            © {new Date().getFullYear()} NYANZA TECHNICAL SECONDARY SCHOOL. All rights reserved.
          </Typography>
          <Typography variant="caption" sx={{ opacity: 0.5, mt: 1, display: 'block' }}>
            Designed by Aristotle.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;