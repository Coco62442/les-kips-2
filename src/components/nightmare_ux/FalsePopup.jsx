import React, { useState, useEffect } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
  IconButton,
  Box,
} from '@mui/material';
import OpenInFullIcon from '@mui/icons-material/ExpandMore';
import CloseFullscreenIcon from '@mui/icons-material/ExpandLess';

const FalsePopup = () => {
  const initialTimer = { minutes: 1, seconds: 26 }; // Initial timer value

  const [open, setOpen] = useState(false);
  const [timer, setTimer] = useState(initialTimer);
  const [expanded, setExpanded] = useState(false);
  const [showStopper, setShowStopper] = useState(true);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setOpen(true);
    }, 5000); // Show popup automatically after 5 seconds

    return () => clearTimeout(timerId);
  }, []);

  useEffect(() => {
    let interval;
    if (open) {
      interval = setInterval(() => {
        setTimer((prevTimer) => {
          const newSeconds = prevTimer.seconds + 1;
          if (newSeconds === 60) {
            return { minutes: prevTimer.minutes + 1, seconds: 0 };
          }
          return { ...prevTimer, seconds: newSeconds };
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [open]);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleStopperClick = () => {
    setShowStopper(false);
  };

  const handleRelancerClick = () => {
    setShowStopper(true);
  };

  return (
    <Dialog open={open} onClose={() => {}} maxWidth={false} fullScreen={expanded}>
      <IconButton onClick={handleToggle} color="primary" style={{ position: 'absolute', top: 8, right: 8 }}>
        {expanded ? (
          <CloseFullscreenIcon onClick={handleToggle} />
        ) : (
          <OpenInFullIcon onClick={handleToggle} />
        )}
      </IconButton>
      <DialogContent
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '16px',
          textAlign: 'center',
        }}
      >
        <Typography variant="h4" style={{ marginBottom: '16px' }}>
          Dépêche toi, le temps s'écoule !
        </Typography>
        <Typography variant="h4">
          {`${timer.minutes.toString().padStart(2, '0')}:${timer.seconds.toString().padStart(2, '0')}`}
        </Typography>
        {showStopper ? (
          <Button variant="contained" color="success" onClick={handleStopperClick}>
            Stopper
          </Button>
        ) : (
          <Button variant="contained" color="error" onClick={handleRelancerClick}>
            Relancer
          </Button>
        )}
        {expanded && (
          <Typography
            variant="caption"
            style={{
              color: 'gray',
              cursor: 'pointer',
              position: 'absolute',
              bottom: '8px',
              left: '8px',
            }}
            onClick={handleClose}
          >
            ©lose 2023
          </Typography>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default FalsePopup;
