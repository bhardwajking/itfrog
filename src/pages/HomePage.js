import React from 'react';
import { Container, Typography, Button, Box, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="md" sx={{ mt: 8, textAlign: 'center' }}>
      <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
        5 Whys Analysis
      </Typography>
      <Typography variant="h6" component="p" gutterBottom sx={{ color: '#666', mb: 4 }}>
        A simple tool to help you get to the root cause of a problem
      </Typography>
      
      <Button 
        variant="contained" 
        size="large" 
        onClick={() => navigate('/new-analysis')}
        sx={{ 
          backgroundColor: '#4CAF50', 
          '&:hover': { backgroundColor: '#388E3C' },
          px: 4,
          py: 1.5,
          borderRadius: 2,
          mb: 6
        }}
      >
        Start New Analysis
      </Button>
      
      <Box sx={{ mt: 6 }}>
        <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
          What is 5 Whys Analysis?
        </Typography>
        <Paper elevation={2} sx={{ p: 4, borderRadius: 2, backgroundColor: '#F9F9F9' }}>
          <Typography variant="body1" align="left" paragraph>
            The 5 Whys is a simple but powerful tool for cutting quickly through the outward symptoms of a problem to reveal its underlying causes, so that you can deal with it once and for all.
          </Typography>
          <Typography variant="body1" align="left" paragraph>
            You can use 5 Whys for troubleshooting, quality improvement, and problem solving, but it is most effective when used to resolve simple or moderately difficult problems.
          </Typography>
          <Typography variant="body1" align="left">
            It may not be suitable for complex or critical problems that require statistical analysis.
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
};

export default HomePage;