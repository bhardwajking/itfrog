import React from 'react';
import { Container, Typography, Box, Paper, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const AboutPage = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 6, mb: 6 }}>
      <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold', mb: 4 }}>
        About 5 Whys Analysis
      </Typography>

      <Paper sx={{ p: 4, mb: 4 }}>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
          What is the 5 Whys Technique?
        </Typography>
        <Typography variant="body1" paragraph>
          The 5 Whys is an iterative interrogative technique used to explore the cause-and-effect relationships underlying a particular problem. The primary goal is to determine the root cause of a defect or problem by repeating the question "Why?".
        </Typography>
        <Typography variant="body1" paragraph>
          Each answer forms the basis of the next question. The "5" in the name derives from an empirical observation on the number of iterations typically required to resolve the problem.
        </Typography>
      </Paper>

      <Paper sx={{ p: 4, mb: 4 }}>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
          How to Use the 5 Whys
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <CheckCircleOutlineIcon color="primary" />
            </ListItemIcon>
            <ListItemText 
              primary="1. Assemble a Team" 
              secondary="Gather people who are familiar with the specifics of the problem and with the process that you're trying to fix." 
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircleOutlineIcon color="primary" />
            </ListItemIcon>
            <ListItemText 
              primary="2. Define the Problem" 
              secondary="Observe the problem in action. Discuss it with your team and write a clear problem statement." 
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircleOutlineIcon color="primary" />
            </ListItemIcon>
            <ListItemText 
              primary="3. Ask Why Five Times" 
              secondary="Ask why the problem occurs and write down the answer. Then ask why that happens, and so on." 
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircleOutlineIcon color="primary" />
            </ListItemIcon>
            <ListItemText 
              primary="4. Know When to Stop" 
              secondary="You'll know that you've revealed the root cause when asking 'why' produces no more useful responses and you can go no further." 
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircleOutlineIcon color="primary" />
            </ListItemIcon>
            <ListItemText 
              primary="5. Address the Root Cause" 
              secondary="Discuss and agree on the counter-measures that will prevent the problem from recurring." 
            />
          </ListItem>
        </List>
      </Paper>

      <Paper sx={{ p: 4 }}>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
          Benefits of the 5 Whys
        </Typography>
        <Typography variant="body1" paragraph>
          The 5 Whys technique helps you to quickly get to the root of a problem without using statistical analysis. It's simple and easy to learn and apply, and it fosters teamwork and problem-solving skills.
        </Typography>
        <Typography variant="body1">
          By repeatedly asking the question "Why?", you can peel away the layers of symptoms which can lead to the root cause of a problem. Very often the apparent reason for a problem will lead you to another question.
        </Typography>
      </Paper>
    </Container>
  );
};

export default AboutPage;