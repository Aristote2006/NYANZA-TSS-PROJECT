import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, Avatar, Badge, Box, Button, useMediaQuery } from '@mui/material';
import { Link } from 'react-router-dom';
import { styled, useTheme } from '@mui/material/styles';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SchoolIcon from '@mui/icons-material/School';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import PeopleIcon from '@mui/icons-material/People';
import MessageIcon from '@mui/icons-material/Message';
import MenuIcon from '@mui/icons-material/Menu';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)',
  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
  backdropFilter: 'blur(10px)',
  borderBottom: '1px solid rgba(255,255,255,0.1)',
}));

const StyledButton = styled(Button)(({ theme }) => ({
  textTransform: 'none',
  fontWeight: 600,
  fontSize: '0.9rem',
  color: 'rgba(255,255,255,0.85)',
  '&:hover': {
    color: 'white',
    backgroundColor: 'rgba(255,255,255,0.1)',
  },
  '&.active': {
    color: 'white',
    backgroundColor: 'rgba(255,255,255,0.15)',
  },
}));

const AdminNavbar = ({ currentPath }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const [mobileMenuAnchor, setMobileMenuAnchor] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMenuAnchor(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuAnchor(null);
  };

  const handleProfileMenuOpen = (event) => {
    setProfileMenuOpen(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setProfileMenuOpen(null);
  };

  const menuItems = [
    { text: 'Dashboard', icon: <DashboardIcon />, path: '/admin-dashboard' },
    { text: 'Manage Programs', icon: <SchoolIcon />, path: '/admin-programs' },
    { text: 'Manage News', icon: <NewspaperIcon />, path: '/admin-news' },
    { text: 'Manage Leaders', icon: <PeopleIcon />, path: '/admin-leaders' },
    { text: 'Messages', icon: <MessageIcon />, path: '/admin-messages' },
  ];

  const quickActions = [
    { text: 'Profile Settings', icon: <SettingsIcon />, path: '/admin-profile' },
    { text: 'Analytics', icon: <SchoolIcon />, path: '/admin-analytics' },
    { text: 'Backup Data', icon: <NewspaperIcon />, path: '/admin-backup' },
    { text: 'Logout', icon: <ExitToAppIcon />, path: '/' },
  ];

  return (
    <StyledAppBar position="sticky" elevation={0} sx={{ zIndex: 1300 }}>
      <Toolbar sx={{ minHeight: 70, px: { xs: 2, sm: 3 } }}>
        {/* Logo/Title */}
        <Box sx={{ display: 'flex', alignItems: 'center', mr: 2, flexGrow: { xs: 1, md: 0 } }}>
          <Typography
            variant="h6"
            component={Link}
            to="/admin-dashboard"
            sx={{
              textDecoration: 'none',
              color: 'white',
              fontWeight: 700,
              fontSize: { xs: '1rem', md: '1.3rem' },
              display: 'flex',
              alignItems: 'center',
              '&:hover': {
                color: 'rgba(255,255,255,0.8)',
              },
            }}
          >
            <DashboardIcon sx={{ mr: 1, fontSize: { xs: 20, md: 28 } }} />
            <span style={{ display: { xs: 'none', md: 'block' } }}>Admin Portal</span>
            <span style={{ display: { xs: 'block', md: 'none' } }}>Admin</span>
          </Typography>
        </Box>

        {/* Mobile Menu Button */}
        <Box sx={{ display: { xs: 'flex', md: 'none' }, flexGrow: 1, justifyContent: 'flex-end' }}>
          <IconButton
            size="large"
            edge="end"
            aria-label="open mobile menu"
            aria-controls="mobile-menu"
            aria-haspopup="true"
            onClick={handleMobileMenuOpen}
            color="inherit"
            sx={{
              background: 'rgba(255,255,255,0.1)',
              borderRadius: 2,
              '&:hover': {
                background: 'rgba(255,255,255,0.2)',
              },
            }}
          >
            <MenuIcon />
          </IconButton>
        </Box>

        {/* Desktop Navigation Menu */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1, flexGrow: 1, alignItems: 'center' }}>
          {menuItems.map((item) => (
            <StyledButton
              key={item.text}
              component={Link}
              to={item.path}
              className={currentPath === item.path ? 'active' : ''}
              startIcon={item.icon}
              sx={{ 
                borderRadius: 2,
                px: 2,
                py: 1,
                mr: 1
              }}
            >
              {item.text}
            </StyledButton>
          ))}
        </Box>

        {/* Desktop Quick Actions and Profile */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
          {/* Quick Actions Dropdown */}
          <IconButton
            size="large"
            aria-label="show quick actions"
            aria-controls="quick-actions-menu"
            aria-haspopup="true"
            onClick={handleMenuOpen}
            color="inherit"
            sx={{
              ml: 1,
              background: 'rgba(255,255,255,0.1)',
              borderRadius: 2,
              '&:hover': {
                background: 'rgba(255,255,255,0.2)',
              },
            }}
          >
            <SettingsIcon />
          </IconButton>

          {/* Notifications */}
          <IconButton
            size="large"
            aria-label="show notifications"
            color="inherit"
            sx={{
              ml: 1,
              background: 'rgba(255,255,255,0.1)',
              borderRadius: 2,
              '&:hover': {
                background: 'rgba(255,255,255,0.2)',
              },
            }}
          >
            <Badge badgeContent={4} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>

          {/* Profile Menu */}
          <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-controls="profile-menu"
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            color="inherit"
            sx={{
              ml: 1,
              background: 'rgba(255,255,255,0.1)',
              borderRadius: 2,
              '&:hover': {
                background: 'rgba(255,255,255,0.2)',
              },
            }}
          >
            <AccountCircleIcon />
          </IconButton>
        </Box>
      </Toolbar>

      {/* Mobile Menu */}
      <Menu
        id="mobile-menu"
        anchorEl={mobileMenuAnchor}
        open={Boolean(mobileMenuAnchor)}
        onClose={handleMobileMenuClose}
        PaperProps={{
          sx: {
            mt: 1,
            borderRadius: 2,
            background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.2)',
          },
        }}
        sx={{
          display: { xs: 'block', md: 'none' }
        }}
      >
        {/* Mobile Navigation Items */}
        {menuItems.map((item) => (
          <MenuItem
            key={item.text}
            component={Link}
            to={item.path}
            onClick={handleMobileMenuClose}
            sx={{
              color: currentPath === item.path ? 'secondary.main' : '#2c3e50',
              fontWeight: currentPath === item.path ? 700 : 500,
              '&:hover': {
                background: 'rgba(44, 62, 80, 0.1)',
              },
            }}
          >
            {item.icon}
            <Typography sx={{ ml: 1 }}>{item.text}</Typography>
          </MenuItem>
        ))}
        
        <MenuItem divider sx={{ my: 1 }} />
        
        {/* Mobile Quick Actions */}
        <Typography variant="subtitle2" sx={{ pl: 2, color: '#2c3e50', fontWeight: 600 }}>
          Quick Actions
        </Typography>
        {quickActions.map((action) => (
          <MenuItem
            key={action.text}
            component={Link}
            to={action.path}
            onClick={handleMobileMenuClose}
            sx={{
              color: '#2c3e50',
              fontWeight: 500,
              '&:hover': {
                background: 'rgba(44, 62, 80, 0.1)',
              },
            }}
          >
            {action.icon}
            <Typography sx={{ ml: 1 }}>{action.text}</Typography>
          </MenuItem>
        ))}
      </Menu>

      {/* Quick Actions Menu */}
      <Menu
        id="quick-actions-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        PaperProps={{
          sx: {
            mt: 1,
            borderRadius: 2,
            background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.2)',
          },
        }}
      >
        {quickActions.map((action) => (
          <MenuItem
            key={action.text}
            component={Link}
            to={action.path}
            onClick={handleMenuClose}
            sx={{
              color: '#2c3e50',
              fontWeight: 500,
              '&:hover': {
                background: 'rgba(44, 62, 80, 0.1)',
              },
            }}
          >
            {action.icon}
            <Typography sx={{ ml: 1 }}>{action.text}</Typography>
          </MenuItem>
        ))}
      </Menu>

      {/* Profile Menu */}
      <Menu
        id="profile-menu"
        anchorEl={profileMenuOpen}
        open={Boolean(profileMenuOpen)}
        onClose={handleProfileMenuClose}
        PaperProps={{
          sx: {
            mt: 1,
            borderRadius: 2,
            background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.2)',
          },
        }}
      >
        <MenuItem
          component={Link}
          to="/admin-profile"
          onClick={handleProfileMenuClose}
          sx={{
            color: '#2c3e50',
            fontWeight: 500,
            '&:hover': {
              background: 'rgba(44, 62, 80, 0.1)',
            },
          }}
        >
          <AccountCircleIcon sx={{ mr: 1 }} />
          Profile Settings
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleProfileMenuClose();
            // Handle logout here
          }}
          sx={{
            color: '#e74c3c',
            fontWeight: 500,
            '&:hover': {
              background: 'rgba(231, 76, 60, 0.1)',
            },
          }}
        >
          <ExitToAppIcon sx={{ mr: 1 }} />
          Logout
        </MenuItem>
      </Menu>
    </StyledAppBar>
  );
};

export default AdminNavbar;