import React from 'react';
import { Typography, Paper, Container } from '@mui/material';

const Section = ({ title, children }) => {
  return (
    <Container maxWidth="md" sx={{ my: 4 }}>
      <Paper elevation={3} sx={{ p: 3, backgroundColor: '#f8f9fa' }}>
        <Typography variant="h4" sx={{ mb: 2, color: '#2ecc71' }}>{title}</Typography>
        {children}
      </Paper>
    </Container>
  );
};

export default Section;
