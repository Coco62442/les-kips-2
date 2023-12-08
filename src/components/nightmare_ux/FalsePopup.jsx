import React, { useState, useEffect } from 'react';
import {
  Button,
  Dialog,
  DialogContent,
  Typography,
  IconButton,
} from '@mui/material';
import OpenInFullIcon from '@mui/icons-material/ExpandMore';
import CloseFullscreenIcon from '@mui/icons-material/ExpandLess';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GoodButton from '../pageDon/GoodButton';
import MovingButton from './MovingButton';

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
    const timerId = setTimeout(() => {
      toast.warning('Aller c\'est bon...on t\'aide', {
        position: 'center',
        autoClose: 30000,
        hideProgressBar: false,
        closeOnClick: false,
        draggable: false,
      })
      setOpen(false);
    }, 15000); // Show popup automatically after 5 seconds

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
      <ToastContainer />
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
          <MovingButton />
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
    </div>
  );
};

export default FalsePopup;
