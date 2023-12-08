import React, { useState } from 'react';
import { Button } from '@mui/material';

const MovingButton = () => {
  const [position, setPosition] = useState({ x: 50, y: 50 });

  const handleClick = () => {
    const randomX = Math.floor(Math.random() * window.innerWidth);
    const randomY = Math.floor(Math.random() * window.innerHeight);
    setPosition({ x: randomX, y: randomY });
  };

  return (
    <Button
      variant="contained"
      color="primary"
      style={{ position: 'absolute', top: position.y, left: position.x }}
      onClick={handleClick}
    >
      Moving Button
    </Button>
  );
};

export default MovingButton;
