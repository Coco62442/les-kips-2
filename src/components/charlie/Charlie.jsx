import React, { useState } from 'react';
import { Container, CardMedia } from '@mui/material';

const ImageAppearOnHover = () => {
  const [isMouseOver, setIsMouseOver] = useState(false);

  return (
    <Container maxWidth="xl" sx={{ mt: 4 }}>
      <CardMedia
        component="img"
        style={{
          width: '2%', // Ajustez la largeur selon vos besoins
          height: 'auto',
          objectFit: 'cover',
          opacity: isMouseOver ? 1 : 0,
          transition: 'opacity 0.3s ease-in-out',
        }}
        alt="Charlie"
        src="/charlie.png"
        onMouseEnter={() => setIsMouseOver(true)}
        onMouseLeave={() => setIsMouseOver(false)}
      />
    </Container>
  );
};

export default ImageAppearOnHover;