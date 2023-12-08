import React, { createContext, useContext, useState, useEffect } from 'react';

const TimerContext = createContext();

export const Timer = ({ children }) => {
  const storedStartTime = localStorage.getItem('startTime');
  const initialStartTime = storedStartTime ? new Date(storedStartTime) : new Date();

  const [startTime, setStartTime] = useState(initialStartTime);
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentTime = new Date();
      const elapsedSeconds = Math.floor((currentTime - startTime) / 1000);
      setElapsedTime(elapsedSeconds);
      localStorage.setItem('elapsedTime', elapsedSeconds.toString());
    }, 1000);

    return () => clearInterval(intervalId);
  }, [startTime]);

  useEffect(() => {
    setStartTime(new Date());
    const storedElapsedTime = localStorage.getItem('elapsedTime');
    setElapsedTime(storedElapsedTime ? parseInt(storedElapsedTime, 10) : 0);

    return () => setStartTime(null);
  }, []);

  const contextValue = {
    elapsedTime,
  };

  return <TimerContext.Provider value={contextValue}>{children}</TimerContext.Provider>;
};

export const useTimer = () => {
  const context = useContext(TimerContext);
  if (!context) {
    throw new Error('useTimer must be used within a Timer');
  }
  return context;
};

export default Timer;