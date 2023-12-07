import React, { useState, useEffect } from 'react';

const TextChanges = () => {
  const [text, setText] = useState('Initial Text');

  useEffect(() => {
    const interval = setInterval(() => {
      const texts = ['save the pandas!', 'Coding is fun!', 'Stay curious!', 'Explore new horizons!']; // Additional phrases
      const randomIndex = Math.floor(Math.random() * texts.length);
      setText(texts[randomIndex]);
    }, 3000); // Change text every 3 seconds (adjust the interval as needed)

    return () => clearInterval(interval);
  }, []);

  return <div>{text}</div>;
};

export default TextChanges;
