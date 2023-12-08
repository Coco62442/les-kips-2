import React from 'react';
import { Button, Box } from '@mui/material';

export default function ErrorPage() {
  const handleClick = () => {
    window.location.href = '/';
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: "column", justifyContent: 'center', alignItems: 'center', backgroundColor: '#282c34'}}>
      <Box sx={{ height:50, width: '70%' }}>
        <div id="error-page">
          <h1>Oops!</h1>
          <p>Sorry, an unexpected error has occurred.</p>
          <Button
            variant="contained"
            color="primary"
            onClick={handleClick}
          >
            Go to home page
          </Button>
        </div>
      </Box>
    </Box>
  );
}