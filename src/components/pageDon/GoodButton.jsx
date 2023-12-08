import React, { useState } from 'react';
import { Button } from '@mui/material';

const GoodButton = () => {
  const [showButton, setShowButton] = useState(true);

  const handleClick = () => {
    window.location.href = "https://reseauactionclimat.org/faire-un-don/";
    setShowButton(false);
  };

  return (
    <>
        {showButton ?
        <Button
        variant="contained"
        color="primary"
        onClick={handleClick}
        >
        Donner à l'association
        </Button>
        : null}
    </>
  );
};

export default GoodButton;
