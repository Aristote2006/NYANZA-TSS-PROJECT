import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Menu, MenuItem, Container, useScrollTrigger } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { motion } from 'framer-motion';
import logoImg from '../../assets/images/logo.png';

// Hide on scroll effect
function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();
  
  return React.cloneElement(children, {
    style: {
      transform: trigger ? 'translateY(-100%)' : 'translateY(0)',
      transition: 'transform 0.3s ease-in-out',
    },
  });
}

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const location = useLocation();

  // Hide navbar on admin dashboard pages
  const hideOnPaths = ['/admin-login', '/admin-dashboard'];
  const shouldHide = hideOnPaths.some(path => location.pathname.startsWith(path));

  if (shouldHide) {
    return null;
  }

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const pages = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Leaders', path: '/leaders' },
    { name: 'Programs', path: '/programs' },
    { name: 'News', path: '/news' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <HideOnScroll>
      <AppBar 
        position="fixed" 
        sx={{ 
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 2px 20px rgba(0,0,0,0.1)',
          py: 0.5,
          height: '60px',
        }}
      >
        <Container maxWidth="xl" sx={{ height: '100%' }}>
          <Toolbar disableGutters sx={{ minHeight: '60px !important', height: '100%' }}>
            {/* Logo */}
            <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
              <Box
                component={motion.div}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                sx={{ 
                  width: 35, 
                  height: 35, 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  mr: 1,
                  overflow: 'hidden'
                }}
              >
                <img 
                  src={logoImg} 
                  alt="NYANZA TSS Logo"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </Box>
              <Typography
                variant="h6"
                noWrap
                component={Link}
                to="/"
                sx={{
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 700,
                  letterSpacing: '.1rem',
                  color: 'primary.main',
                  textDecoration: 'none',
                  fontSize: '1.3rem'
                }}
              >
                NYANZA TSS
              </Typography>
            </Box>

            {/* Mobile menu button */}
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="primary"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem 
                    key={page.name} 
                    onClick={handleCloseNavMenu}
                    sx={{ 
                      '&:hover': { 
                        backgroundColor: 'primary.light',
                        color: 'white'
                      } 
                    }}
                  >
                    <Typography textAlign="center" color="primary.main">
                      <Link 
                        to={page.path} 
                        style={{ 
                          textDecoration: 'none', 
                          color: 'inherit' 
                        }}
                      >
                        {page.name}
                      </Link>
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            {/* Logo for mobile */}
            <Typography
              variant="h6"
              noWrap
              component={Link}
              to="/"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'Inter, sans-serif',
                fontWeight: 700,
                letterSpacing: '.1rem',
                color: 'primary.main',
                textDecoration: 'none',
                fontSize: '1.1rem'
              }}
            >
              NYANZA TSS
            </Typography>

            {/* Desktop menu */}
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
              {pages.map((page) => (
                <Button
                  key={page.name}
                  onClick={handleCloseNavMenu}
                  component={Link}
                  to={page.path}
                  sx={{ 
                    my: 1, 
                    mx: 1,
                    color: 'primary.main',
                    display: 'block',
                    borderRadius: 2,
                    fontWeight: 600,
                    fontSize: '0.9rem',
                    position: 'relative',
                    '&:before': {
                      content: '""',
                      position: 'absolute',
                      width: 0,
                      height: 2,
                      bottom: 0,
                      left: '50%',
                      backgroundColor: 'secondary.main',
                      transition: 'width 0.3s ease, left 0.3s ease',
                    },
                    '&:hover:before': {
                      width: '80%',
                      left: '10%',
                    },
                    '&:hover': {
                      color: 'secondary.main',
                    }
                  }}
                >
                  {page.name}
                </Button>
              ))}
            </Box>

            {/* Admin Login Button - Aligned Right */}
            <Box sx={{ flexGrow: 0 }}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="contained"
                  color="secondary"
                  component={Link}
                  to="/admin-login"
                  sx={{
                    backgroundColor: 'secondary.main',
                    color: 'white',
                    px: 2,
                    py: 0.5,
                    fontWeight: 600,
                    borderRadius: 2,
                    boxShadow: '0 4px 12px rgba(231, 76, 60, 0.3)',
                    '&:hover': {
                      backgroundColor: 'secondary.dark',
                      boxShadow: '0 6px 16px rgba(231, 76, 60, 0.4)',
                    },
                    fontSize: '0.85rem'
                  }}
                >
                  Admin Portal
                </Button>
              </motion.div>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </HideOnScroll>
  );
};

export default Navbar;