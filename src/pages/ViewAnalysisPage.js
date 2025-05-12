import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, Paper, Divider, Button } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';

const ViewAnalysisPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, you would fetch the analysis from your API
    // This is just a mock for demonstration
    setTimeout(() => {
      setAnalysis({
        id: id,
        title: 'Server Outage Analysis',
        date: '2023-11-15',
        problem: 'The production server went down during peak hours.',
        why1: 'The server ran out of memory.',
        why2: 'There were too many concurrent connections.',
        why3: 'The connection pool was not properly configured.',
        why4: 'The default settings were used without performance testing.',
        why5: 'There was no proper deployment checklist that included performance testing.',
        rootCause: 'Lack of a comprehensive deployment checklist that includes performance testing.',
        solution: 'Create and implement a detailed deployment checklist that includes performance testing and proper configuration of all system components.'
      });
      setLoading(false);
    }, 1000);
  }, [id]);

  if (loading) {
    return (
      <Container maxWidth="md" sx={{ mt: 6, textAlign: 'center' }}>
        <Typography>Loading analysis...</Typography>
      </Container>
    );
  }

  if (!analysis) {
    return (
      <Container maxWidth="md" sx={{ mt: 6, textAlign: 'center' }}>
        <Typography>Analysis not found.</Typography>
        <Button 
          variant="contained" 
          onClick={() => navigate('/analyses')}
          sx={{ mt: 2 }}
        >
          Back to My Analyses
        </Button>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ mt: 6, mb: 6 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold' }}>
          {analysis.title}
        </Typography>
        <Button 
          variant="outlined" 
          onClick={() => navigate('/analyses')}
        >
          Back to Analyses
        </Button>
      </Box>

      <Paper sx={{ p: 4, mb: 4 }}>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
          Problem Statement
        </Typography>
        <Typography variant="body1" paragraph>
          {analysis.problem}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Created on: {analysis.date}
        </Typography>
      </Paper>

      <Paper sx={{ p: 4, mb: 4 }}>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
          5 Whys Analysis
        </Typography>
        
        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
            Why 1:
          </Typography>
          <Typography variant="body1">{analysis.why1}</Typography>
        </Box>
        <Divider sx={{ my: 2 }} />
        
        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
            Why 2:
          </Typography>
          <Typography variant="body1">{analysis.why2}</Typography>
        </Box>
        <Divider sx={{ my: 2 }} />
        
        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
            Why 3:
          </Typography>
          <Typography variant="body1">{analysis.why3}</Typography>
        </Box>
        <Divider sx={{ my: 2 }} />
        
        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
            Why 4:
          </Typography>
          <Typography variant="body1">{analysis.why4}</Typography>
        </Box>
        <Divider sx={{ my: 2 }} />
        
        <Box>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
            Why 5:
          </Typography>
          <Typography variant="body1">{analysis.why5}</Typography>
        </Box>
      </Paper>

      <Paper sx={{ p: 4 }}>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
          Root Cause & Solution
        </Typography>
        
        <Box sx={{ mb: 3 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
            Root Cause:
          </Typography>
          <Typography variant="body1">{analysis.rootCause}</Typography>
        </Box>
        
        <Box>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
            Proposed Solution:
          </Typography>
          <Typography variant="body1">{analysis.solution}</Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default ViewAnalysisPage;