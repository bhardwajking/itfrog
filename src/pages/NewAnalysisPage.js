import React, { useState } from 'react';
import { Container, Typography, Box, TextField, Button, Paper, Stepper, Step, StepLabel } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const NewAnalysisPage = () => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const [analysis, setAnalysis] = useState({
    problem: '',
    why1: '',
    why2: '',
    why3: '',
    why4: '',
    why5: '',
    rootCause: '',
    solution: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAnalysis(prev => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSubmit = () => {
    // Here you would save the analysis to your backend
    console.log('Analysis submitted:', analysis);
    navigate('/analyses');
  };

  const steps = ['Problem Statement', 'Why Analysis', 'Root Cause & Solution'];

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Box sx={{ mt: 4 }}>
            <Typography variant="h6" gutterBottom>
              Define the Problem
            </Typography>
            <TextField
              fullWidth
              label="What is the problem you're trying to solve?"
              name="problem"
              value={analysis.problem}
              onChange={handleChange}
              multiline
              rows={4}
              margin="normal"
              variant="outlined"
            />
          </Box>
        );
      case 1:
        return (
          <Box sx={{ mt: 4 }}>
            <Typography variant="h6" gutterBottom>
              The 5 Whys
            </Typography>
            <TextField
              fullWidth
              label="Why 1: Why is this problem occurring?"
              name="why1"
              value={analysis.why1}
              onChange={handleChange}
              margin="normal"
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Why 2: Why is that happening?"
              name="why2"
              value={analysis.why2}
              onChange={handleChange}
              margin="normal"
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Why 3: And why is that happening?"
              name="why3"
              value={analysis.why3}
              onChange={handleChange}
              margin="normal"
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Why 4: And why is that happening?"
              name="why4"
              value={analysis.why4}
              onChange={handleChange}
              margin="normal"
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Why 5: And why is that happening?"
              name="why5"
              value={analysis.why5}
              onChange={handleChange}
              margin="normal"
              variant="outlined"
            />
          </Box>
        );
      case 2:
        return (
          <Box sx={{ mt: 4 }}>
            <Typography variant="h6" gutterBottom>
              Root Cause & Solution
            </Typography>
            <TextField
              fullWidth
              label="What is the root cause of the problem?"
              name="rootCause"
              value={analysis.rootCause}
              onChange={handleChange}
              multiline
              rows={3}
              margin="normal"
              variant="outlined"
            />
            <TextField
              fullWidth
              label="What solution do you propose?"
              name="solution"
              value={analysis.solution}
              onChange={handleChange}
              multiline
              rows={3}
              margin="normal"
              variant="outlined"
            />
          </Box>
        );
      default:
        return 'Unknown step';
    }
  };

  return (
    <Container maxWidth="md" sx={{ mt: 6, mb: 6 }}>
      <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold', mb: 4 }}>
        New 5 Whys Analysis
      </Typography>

      <Paper sx={{ p: 4 }}>
        <Stepper activeStep={activeStep} alternativeLabel sx={{ mb: 4 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        {getStepContent(activeStep)}

        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
          <Button
            disabled={activeStep === 0}
            onClick={handleBack}
            variant="outlined"
          >
            Back
          </Button>
          <Button
            variant="contained"
            onClick={activeStep === steps.length - 1 ? handleSubmit : handleNext}
            sx={{ 
              backgroundColor: activeStep === steps.length - 1 ? '#4CAF50' : '#1976d2',
              '&:hover': { 
                backgroundColor: activeStep === steps.length - 1 ? '#388E3C' : '#1565c0'
              }
            }}
          >
            {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default NewAnalysisPage;