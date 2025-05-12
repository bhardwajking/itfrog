import React, { useState } from 'react';
import { 
  Box, 
  TextField, 
  Button, 
  Typography, 
  Container, 
  Paper,
  Snackbar,
  Alert
} from '@mui/material';
import axios from 'axios';

const UserForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [alert, setAlert] = useState({
    open: false,
    message: '',
    severity: 'success'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await axios.post('/api/users', formData);
      setAlert({
        open: true,
        message: 'User created successfully!',
        severity: 'success'
      });
      // Reset form
      setFormData({ name: '', email: '' });
    } catch (error) {
      setAlert({
        open: true,
        message: error.response?.data?.message || 'An error occurred. Please try again.',
        severity: 'error'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseAlert = () => {
    setAlert(prev => ({ ...prev, open: false }));
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
        <Typography variant="h5" component="h2" gutterBottom>
          User Registration
        </Typography>
        
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 2 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </Button>
        </Box>
      </Paper>

      <Snackbar 
        open={alert.open} 
        autoHideDuration={6000} 
        onClose={handleCloseAlert}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleCloseAlert} 
          severity={alert.severity} 
          sx={{ width: '100%' }}
        >
          {alert.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default UserForm;