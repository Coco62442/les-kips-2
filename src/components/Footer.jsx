import React from 'react';
import { Typography, Container, Box } from '@mui/material';

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: '#2ecc71', color: 'white', py: 3 }}>
      <Container>
        <Typography variant="body2" align="center">
          &copy; 2023 Votre Association pour le Changement Climatique
        </Typography>
        <Typography variant="body2" align="center">
          Contact : neige@ledevelopper.org
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
