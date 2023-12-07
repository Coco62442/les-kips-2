import React, { useState, useEffect } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
  IconButton,
  makeStyles,
} from '@mui/material';

const useStyles = makeStyles((theme) => ({
  popup: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(2),
    textAlign: 'center',
  },
  footerText: {
    color: 'gray',
    cursor: 'pointer',
    marginTop: theme.spacing(2),
  },
}));

const FalsePopup = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [timer, setTimer] = useState({ minutes: 1, seconds: 26 });
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    let interval;
    if (open) {
      interval = setInterval(() => {
        if (timer.seconds === 0) {
          if (timer.minutes === 0) {
            clearInterval(interval);
          } else {
            setTimer({ minutes: timer.minutes - 1, seconds: 59 });
          }
        } else {
          setTimer({ ...timer, seconds: timer.seconds - 1 });
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [open, timer]);

  const handleToggle = () => {
    setOpen(!open);
  };

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <IconButton onClick={handleToggle} color="primary">
        {expanded ? (
          <span>Unexpand</span>
        ) : (
          <span>Expand</span>
        )}
      </IconButton>
      <Dialog open={open} onClose={handleClose} maxWidth={false}>
        <DialogTitle>
          Dépêche toi, le temps s'écoule !
        </DialogTitle>
        <DialogContent className={classes.popup}>
          <Typography variant="h4">
            {`${timer.minutes.toString().padStart(2, '0')}:${timer.seconds.toString().padStart(2, '0')}`}
          </Typography>
          <Button variant="contained" color="success">
            Stopper
          </Button>
          <Button variant="contained" color="error">
            Relancer
          </Button>
          {expanded && (
            <Typography
              variant="caption"
              className={classes.footerText}
              onClick={handleClose}
            >
              ©lose 2023
            </Typography>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default FalsePopup;
