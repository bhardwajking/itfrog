import React, { useState } from 'react';
import { Container, Typography, Box, Paper, Grid, Button, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';

const AnalysesPage = () => {
  const navigate = useNavigate();
  const [analyses, setAnalyses] = useState([
    { id: 1, title: 'Server Outage Analysis', date: '2023-11-15', status: 'Completed' },
    { id: 2, title: 'Customer Complaint Investigation', date: '2023-11-10', status: 'In Progress' },
    { id: 3, title: 'Product Defect Analysis', date: '2023-11-05', status: 'Completed' },
  ]);

  const handleDelete = (id) => {
    setAnalyses(analyses.filter(analysis => analysis.id !== id));
  };

  return (
    <Container maxWidth="md" sx={{ mt: 6 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold' }}>
          My Analyses
        </Typography>
        <Button 
          variant="contained" 
          onClick={() => navigate('/new-analysis')}
          sx={{ 
            backgroundColor: '#4CAF50', 
            '&:hover': { backgroundColor: '#388E3C' }
          }}
        >
          New Analysis
        </Button>
      </Box>

      {analyses.length === 0 ? (
        <Paper sx={{ p: 4, textAlign: 'center' }}>
          <Typography variant="body1">You haven't created any analyses yet.</Typography>
        </Paper>
      ) : (
        <Grid container spacing={3}>
          {analyses.map((analysis) => (
            <Grid item xs={12} key={analysis.id}>
              <Paper 
                sx={{ 
                  p: 3, 
                  display: 'flex', 
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  '&:hover': { boxShadow: 3 }
                }}
              >
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    {analysis.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Created: {analysis.date} • Status: {analysis.status}
                  </Typography>
                </Box>
                <Box>
                  <IconButton 
                    aria-label="edit" 
                    onClick={() => navigate(`/edit-analysis/${analysis.id}`)}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton 
                    aria-label="delete" 
                    onClick={() => handleDelete(analysis.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default AnalysesPage;