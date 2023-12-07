import React from 'react';
import MovingButton from './MovingButton';
import TextChanges from './TextChanges';
import FalsePopup from './FalsePopup';
import { Container, Grid, Typography } from '@mui/material';

const NightmarishPage = () => {
  return (
    <Container maxWidth="md" style={{ marginTop: '50px' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Nightmarish UI/UX Challenge
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} md={4}>
          <MovingButton />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextChanges />
        </Grid>
      </Grid>
      <FalsePopup /> {/* Add the FalsePopup component */}
    </Container>
  );
};

export default NightmarishPage;
