import React, { useState } from 'react';
import { Container, Typography, Box, Grid, Card, TextField, Button, IconButton, Tooltip } from '@mui/material';
import { motion } from 'framer-motion';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <LocationOnIcon sx={{ fontSize: 40 }} />,
      title: 'Location',
      description: 'Nyanza, Southern Province, Rwanda'
    },
    {
      icon: <PhoneIcon sx={{ fontSize: 40 }} />,
      title: 'Phone',
      description: '+250788309436'
    },
    {
      icon: <EmailIcon sx={{ fontSize: 40 }} />,
      title: 'Email',
      description: 'etogitarama@gmail.com'
    }
  ];

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
              mb: { xs: 2, md: 3 },
              background: 'linear-gradient(45deg, #ecf0f1, #bdc3c7)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
            }}
          >
            Contact Us
          </Typography>
          <Typography
            align="center"
            sx={{
              fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
              color: 'text.secondary',
              mb: { xs: 6, md: 8 },
              maxWidth: '600px',
              mx: 'auto',
            }}
          >
            Reach out to us for inquiries, admissions, or any other information you need.
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card
                sx={{
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: 4,
                  boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                  p: { xs: 2, sm: 3, md: 4 },
                  height: '100%',
                }}
              >
                <Typography variant="h4" gutterBottom sx={{ color: 'primary.main', fontWeight: 700, mb: 3, fontSize: { xs: '1.5rem', md: '2rem' } }}>
                  Send us a Message
                </Typography>
                
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        variant="outlined"
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                              borderColor: 'primary.main',
                            },
                            '&:hover fieldset': {
                              borderColor: 'secondary.main',
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: 'secondary.main',
                            },
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        variant="outlined"
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                              borderColor: 'primary.main',
                            },
                            '&:hover fieldset': {
                              borderColor: 'secondary.main',
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: 'secondary.main',
                            },
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        variant="outlined"
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                              borderColor: 'primary.main',
                            },
                            '&:hover fieldset': {
                              borderColor: 'secondary.main',
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: 'secondary.main',
                            },
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        multiline
                        rows={4}
                        variant="outlined"
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                              borderColor: 'primary.main',
                            },
                            '&:hover fieldset': {
                              borderColor: 'secondary.main',
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: 'secondary.main',
                            },
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button
                          type="submit"
                          variant="contained"
                          sx={{
                            backgroundColor: 'primary.main',
                            color: 'white',
                            px: { xs: 3, sm: 4 },
                            py: { xs: 1, sm: 1.5 },
                            fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
                            fontWeight: 600,
                            borderRadius: 3,
                            boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
                            '&:hover': {
                              backgroundColor: 'primary.dark',
                              boxShadow: '0 6px 25px rgba(0,0,0,0.4)',
                            },
                          }}
                        >
                          Send Message
                        </Button>
                      </motion.div>
                    </Grid>
                  </Grid>
                </form>
              </Card>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <Grid container spacing={3}>
              {contactInfo.map((info, index) => (
                <Grid item xs={12} key={index}>
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  >
                    <Card
                      sx={{
                        background: 'rgba(255, 255, 255, 0.95)',
                        backdropFilter: 'blur(10px)',
                        borderRadius: 4,
                        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                        p: { xs: 2, sm: 3 },
                        display: 'flex',
                        alignItems: 'center',
                        height: '100%',
                      }}
                    >
                      <Box sx={{ 
                        mr: { xs: 2, sm: 3 }, 
                        color: 'primary.main',
                        flexShrink: 0,
                      }}>
                        {info.icon}
                      </Box>
                      <Box>
                        <Typography variant="h6" sx={{ color: 'primary.main', fontWeight: 700, mb: 1, fontSize: { xs: '1rem', md: '1.1rem' } }}>
                          {info.title}
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.6, fontSize: { xs: '0.9rem', md: '1rem' } }}>
                          {info.description}
                        </Typography>
                      </Box>
                    </Card>
                  </motion.div>
                </Grid>
              ))}

              <Grid item xs={12}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <Card
                    sx={{
                      background: 'rgba(255, 255, 255, 0.95)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: 4,
                      boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                      p: { xs: 2, sm: 3 },
                      textAlign: 'center',
                    }}
                  >
                    <Typography variant="h6" sx={{ color: 'primary.main', fontWeight: 700, mb: 2, fontSize: { xs: '1rem', md: '1.1rem' } }}>
                      Follow Us on Social Media
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, flexWrap: 'wrap' }}>
                      <Tooltip title="Facebook">
                        <IconButton
                          sx={{
                            color: 'primary.main',
                            width: { xs: 36, sm: 40 },
                            height: { xs: 36, sm: 40 },
                            '&:hover': {
                              backgroundColor: 'primary.light',
                              color: 'white',
                            }
                          }}
                        >
                          <FacebookIcon sx={{ fontSize: { xs: 18, sm: 20 } }} />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Twitter">
                        <IconButton
                          sx={{
                            color: 'primary.main',
                            width: { xs: 36, sm: 40 },
                            height: { xs: 36, sm: 40 },
                            '&:hover': {
                              backgroundColor: 'primary.light',
                              color: 'white',
                            }
                          }}
                        >
                          <TwitterIcon sx={{ fontSize: { xs: 18, sm: 20 } }} />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="LinkedIn">
                        <IconButton
                          sx={{
                            color: 'primary.main',
                            width: { xs: 36, sm: 40 },
                            height: { xs: 36, sm: 40 },
                            '&:hover': {
                              backgroundColor: 'primary.light',
                              color: 'white',
                            }
                          }}
                        >
                          <LinkedInIcon sx={{ fontSize: { xs: 18, sm: 20 } }} />
                        </IconButton>
                      </Tooltip>
                    </Box>
                  </Card>
                </motion.div>
              </Grid>

              <Grid item xs={12}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <Card
                    sx={{
                      background: 'rgba(255, 255, 255, 0.95)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: 4,
                      boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                      p: { xs: 2, sm: 3 },
                      textAlign: 'center',
                    }}
                  >
                    <Typography variant="h6" sx={{ color: 'primary.main', fontWeight: 700, mb: 2, fontSize: { xs: '1rem', md: '1.1rem' } }}>
                      Our Location
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2, fontSize: { xs: '0.8rem', md: '0.9rem' } }}>
                      Nyanza TSS, Southern Province, Nyanza District, Kigoma Sector, Butansinda Cell, Butansinda Village
                    </Typography>
                    <Box
                      component="iframe"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.486324942745!2d29.78428037531742!3d-2.368490997942065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19c5135e835e3ea5%3A0x6d4e6b9c4d8c9c0!2sNyanza%2C%20Rwanda!5e0!3m2!1sen!2sus!4v1706623248521!5m2!1sen!2sus"
                      width="100%"
                      height="300"
                      style={{ border: 0, borderRadius: '8px' }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Nyanza TSS Location Map"
                    />
                  </Card>
                </motion.div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;