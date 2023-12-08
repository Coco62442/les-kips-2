import React from 'react';
import { Grid, Alert } from '@mui/material';

const BottomRightAlert = () => {
const [isMouseOver, setIsMouseOver] = React.useState(false);

  return (
    <Grid
      container
      justifyContent="flex-start"
      alignItems="flex-end"
      style={{
        position: 'fixed',
        left: '65%',
        bottom: '15%',
        zIndex: 999,
        opacity: isMouseOver ? 0 : 1,
        transition: 'opacity 0.3s ease-in-out',
      }}
      onMouseEnter={() => setIsMouseOver(true)}
    >
      <Alert variant="outlined" severity="info">
        Il est quelque part sur cette page,
        mais où est Charlie ?
      </Alert>
    </Grid>
  );
};

export default BottomRightAlert;
