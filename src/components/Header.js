import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="static" sx={{ backgroundColor: '#FFFFFF', boxShadow: 'none', borderBottom: '1px solid #E0E0E0' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: '#333333', fontWeight: 'bold' }}>
          5 Whys
        </Typography>
        <Box>
          <Button color="inherit" sx={{ color: '#333333' }} onClick={() => navigate('/')}>
            Home
          </Button>
          <Button color="inherit" sx={{ color: '#333333' }} onClick={() => navigate('/analyses')}>
            My Analyses
          </Button>
          <Button color="inherit" sx={{ color: '#333333' }} onClick={() => navigate('/about')}>
            About
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;