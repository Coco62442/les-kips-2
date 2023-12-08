import React from 'react';
import { Grid, Alert, Card, CardMedia } from '@mui/material';

const Tree = () => {
const [isTreeVisible, setTreeVisible] = React.useState(true);

const handleClick = () => {
  setTreeVisible(false);
};

  return (
    <>
    {isTreeVisible && (
      <Grid
        container
        justifyContent="flex-start"
        alignItems="flex-end"
        style={{
          left: '10%',
          bottom: '14%',
          zIndex: 999,
        }}
        onClick={handleClick}
      >
      <CardMedia
        component="img"
        style={{
          width: '10%', // Ajustez la largeur selon vos besoins
          height: 'auto',
          objectFit: 'cover',
        }}
        alt="arbre"
        src="/arbre1.png"
        />
        <CardMedia
        component="img"
        style={{
          width: '17%', // Ajustez la largeur selon vos besoins
          height: 'auto',
          objectFit: 'cover',
        }}
        alt="arbre"
        src="/arbre1.png"
        />
        <CardMedia
        component="img"
        style={{
          width: '12%', // Ajustez la largeur selon vos besoins
          height: 'auto',
          objectFit: 'cover',
        }}
        alt="arbre"
        src="/arbre1.png"
        />
    </Grid>
  )}
  </>
  );
};

export default Tree;
