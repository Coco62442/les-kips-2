import React from 'react';
import MovingButton from './MovingButton';
import TextChanges from './TextChanges';
import FalsePopup from './FalsePopup';
import { Container, Grid, Typography } from '@mui/material';
import { useState } from 'react';
import { useEffect } from 'react';
import Snowfall from 'react-snowfall'

const NightmarishPage = () => {
  const [font, setFont] = useState('');

  const fontClassNameList = ["font-face-gm", "font-face-hc", "font-face-nc", "font-face-pc", "font-face-pw", "font-face-sv"];

  useEffect(() => {
    const randomFont = getRandomFont(fontClassNameList);
    setFont(randomFont);
  }, []);

  const getRandomFont = (fontArray) => {
    const randomIndex = Math.floor(Math.random() * fontArray.length);
    return fontArray[randomIndex];
  };

  return (
    <div className={font}>
      <Snowfall color='red' radius={[20,20]} />
      <Snowfall color='green' radius={[20,20]} />
      <Container maxWidth="md" style={{ marginTop: '50px' }} className={font}>
        <Typography variant="h2" align="center" gutterBottom >
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

    </div>
    
  );
};

export default NightmarishPage;
