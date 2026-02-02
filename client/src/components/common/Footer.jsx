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
        py: { xs: 4, sm: 6 },
        mt: 'auto'
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3} sx={{ mb: { xs: 3, sm: 4 } }}>
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Box
                sx={{ 
                  width: { xs: 30, sm: 40 }, 
                  height: { xs: 30, sm: 40 }, 
                  backgroundColor: 'accent.main', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  mr: 1
                }}
              >
                <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold', fontSize: { xs: '0.8rem', sm: '1rem' } }}>
                  N
                </Typography>
              </Box>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 700, fontSize: { xs: '1rem', sm: '1.2rem' } }}>
                NYANZA TSS
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ opacity: 0.8, mb: 3, fontSize: { xs: '0.8rem', sm: '0.9rem' } }}>
              Providing quality technical education to empower the next generation of skilled professionals.
            </Typography>
            
            {/* Social Media Icons */}
            <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
              <motion.div whileHover={{ scale: 1.2, rotate: 5 }}>
                <IconButton 
                  href="#" 
                  color="inherit" 
                  sx={{ 
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    width: { xs: 30, sm: 36 },
                    height: { xs: 30, sm: 36 },
                    '&:hover': { 
                      backgroundColor: 'accent.main',
                      transform: 'scale(1.1)'
                    }
                  }}
                >
                  <FacebookIcon sx={{ fontSize: { xs: 16, sm: 20 } }} />
                </IconButton>
              </motion.div>
              <motion.div whileHover={{ scale: 1.2, rotate: -5 }}>
                <IconButton 
                  href="#" 
                  color="inherit" 
                  sx={{ 
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    width: { xs: 30, sm: 36 },
                    height: { xs: 30, sm: 36 },
                    '&:hover': { 
                      backgroundColor: 'accent.main',
                      transform: 'scale(1.1)'
                    }
                  }}
                >
                  <TwitterIcon sx={{ fontSize: { xs: 16, sm: 20 } }} />
                </IconButton>
              </motion.div>
              <motion.div whileHover={{ scale: 1.2, rotate: 5 }}>
                <IconButton 
                  href="#" 
                  color="inherit" 
                  sx={{ 
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    width: { xs: 30, sm: 36 },
                    height: { xs: 30, sm: 36 },
                    '&:hover': { 
                      backgroundColor: 'accent.main',
                      transform: 'scale(1.1)'
                    }
                  }}
                >
                  <LinkedInIcon sx={{ fontSize: { xs: 16, sm: 20 } }} />
                </IconButton>
              </motion.div>
              <motion.div whileHover={{ scale: 1.2, rotate: -5 }}>
                <IconButton 
                  href="#" 
                  color="inherit" 
                  sx={{ 
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    width: { xs: 30, sm: 36 },
                    height: { xs: 30, sm: 36 },
                    '&:hover': { 
                      backgroundColor: 'accent.main',
                      transform: 'scale(1.1)'
                    }
                  }}
                >
                  <InstagramIcon sx={{ fontSize: { xs: 16, sm: 20 } }} />
                </IconButton>
              </motion.div>
              <motion.div whileHover={{ scale: 1.2, rotate: 5 }}>
                <IconButton 
                  href="#" 
                  color="inherit" 
                  sx={{ 
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    width: { xs: 30, sm: 36 },
                    height: { xs: 30, sm: 36 },
                    '&:hover': { 
                      backgroundColor: 'accent.main',
                      transform: 'scale(1.1)'
                    }
                  }}
                >
                  <YouTubeIcon sx={{ fontSize: { xs: 16, sm: 20 } }} />
                </IconButton>
              </motion.div>
            </Box>
          </Grid>
          
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 2, position: 'relative', fontSize: { xs: '1rem', sm: '1.1rem' } }}>
              Quick Links
              <Box 
                sx={{ 
                  position: 'absolute', 
                  bottom: '-5px', 
                  left: 0, 
                  width: '30px', 
                  height: '2px', 
                  backgroundColor: 'accent.main',
                  borderRadius: '2px'
                }}
              />
            </Typography>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '8px' }}>
                <Link href="/" color="inherit" underline="hover" sx={{ display: 'flex', alignItems: 'center', gap: 1, fontSize: { xs: '0.8rem', sm: '0.9rem' } }}>
                  <span style={{ fontSize: '0.7rem' }}>→</span> Home
                </Link>
              </li>
              <li style={{ marginBottom: '8px' }}>
                <Link href="/about" color="inherit" underline="hover" sx={{ display: 'flex', alignItems: 'center', gap: 1, fontSize: { xs: '0.8rem', sm: '0.9rem' } }}>
                  <span style={{ fontSize: '0.7rem' }}>→</span> About
                </Link>
              </li>
              <li style={{ marginBottom: '8px' }}>
                <Link href="/programs" color="inherit" underline="hover" sx={{ display: 'flex', alignItems: 'center', gap: 1, fontSize: { xs: '0.8rem', sm: '0.9rem' } }}>
                  <span style={{ fontSize: '0.7rem' }}>→</span> Programs
                </Link>
              </li>
              <li style={{ marginBottom: '8px' }}>
                <Link href="/news" color="inherit" underline="hover" sx={{ display: 'flex', alignItems: 'center', gap: 1, fontSize: { xs: '0.8rem', sm: '0.9rem' } }}>
                  <span style={{ fontSize: '0.7rem' }}>→</span> News
                </Link>
              </li>
              <li>
                <Link href="/contact" color="inherit" underline="hover" sx={{ display: 'flex', alignItems: 'center', gap: 1, fontSize: { xs: '0.8rem', sm: '0.9rem' } }}>
                  <span style={{ fontSize: '0.7rem' }}>→</span> Contact
                </Link>
              </li>
            </ul>
          </Grid>
          
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 2, position: 'relative', fontSize: { xs: '1rem', sm: '1.1rem' } }}>
              Contact Info
              <Box 
                sx={{ 
                  position: 'absolute', 
                  bottom: '-5px', 
                  left: 0, 
                  width: '30px', 
                  height: '2px', 
                  backgroundColor: 'accent.main',
                  borderRadius: '2px'
                }}
              />
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.8, mb: 1, display: 'flex', alignItems: 'center', gap: 1, fontSize: { xs: '0.8rem', sm: '0.9rem' } }}>
              📧 Email: etogitarama@gmail.com
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.8, mb: 1, display: 'flex', alignItems: 'center', gap: 1, fontSize: { xs: '0.8rem', sm: '0.9rem' } }}>
              📞 Phone: +250788309436
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.8, mb: 1, display: 'flex', alignItems: 'center', gap: 1, fontSize: { xs: '0.8rem', sm: '0.9rem' } }}>
              📍 Location: Nyanza, Southern Province, Rwanda
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.8, mt: 1, fontSize: { xs: '0.8rem', sm: '0.9rem' } }}>
              Office Hours: Mon-Fri 8:00 AM - 5:00 PM
            </Typography>
          </Grid>
          
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 2, position: 'relative', fontSize: { xs: '1rem', sm: '1.1rem' } }}>
              Newsletter
              <Box 
                sx={{ 
                  position: 'absolute', 
                  bottom: '-5px', 
                  left: 0, 
                  width: '30px', 
                  height: '2px', 
                  backgroundColor: 'accent.main',
                  borderRadius: '2px'
                }}
              />
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.8, mb: 2, fontSize: { xs: '0.8rem', sm: '0.9rem' } }}>
              Subscribe to our newsletter for the latest updates and news.
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 1 }}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                style={{
                  padding: '8px 12px',
                  borderRadius: '4px 0 0 4px',
                  border: 'none',
                  flex: 1,
                  outline: 'none',
                  fontSize: '0.9rem'
                }}
              />
              <button 
                style={{
                  padding: '8px 12px',
                  backgroundColor: 'accent.main',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '0.9rem',
                  marginTop: { xs: '8px', sm: 0 }
                }}
              >
                Subscribe
              </button>
            </Box>
          </Grid>
        </Grid>
        
        <Box sx={{ pt: 3, borderTop: '1px solid rgba(255,255,255,0.1)', mt: 3, textAlign: 'center' }}>
          <Typography variant="body2" sx={{ opacity: 0.6, fontSize: { xs: '0.8rem', sm: '0.9rem' } }}>
            © {new Date().getFullYear()} NYANZA TECHNICAL SECONDARY SCHOOL. All rights reserved.
          </Typography>
          <Typography variant="caption" sx={{ opacity: 0.5, mt: 1, display: 'block', fontSize: { xs: '0.7rem', sm: '0.8rem' } }}>
            Designed by Aristotle.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;