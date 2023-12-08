import React, { useState, useEffect } from "react";
import questions from "./questions";
import { Box, Typography, Button, } from '@mui/material';
import Snowfall from 'react-snowfall';
import panneau from './../../assets/image/panneau.png';

import i18n from "../../assets/translation";

function shuffle(array) {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

export default function MCQ() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [questionText, setQuestionText] = useState("");
  const [choices, setChoices] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showNextButton, setShowNextButton] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [explanation, setExplanation] = useState("");

  const startQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowNextButton(false);
    showQuestion(0);
  };

  const showQuestion = (index) => {
    resetState();
    let currentQuestion = questions[index];
    let questionNumber = index + 1;
    setQuestionText(`${questionNumber}. ${currentQuestion.question}`);
    const shuffledChoices = shuffle(currentQuestion.choices);
    setChoices(shuffledChoices);
    setCorrectAnswer(currentQuestion.choices.findIndex((choice) => choice.answer === true));
  };  

  const resetState = () => {
    setChoices([]);
    setCorrectAnswer(null);
    setSelectedAnswer(null);
  };

  const selectChoice = (isCorrect, index) => {
    if (isCorrect) {
      setScore(score + 1);
      setFeedback("Correct !");
      } else {
      setFeedback("Incorrect...");
    }
    setExplanation(questions[currentQuestionIndex].explanation);
    
    setSelectedAnswer(index);
    setShowNextButton(true);
  };

  const handleNextButton = () => {
    setShowNextButton(false);
    setFeedback("");
    setExplanation("");
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);

    if (currentQuestionIndex < questions.length - 1) {
      showQuestion(currentQuestionIndex + 1);
    } else {
      showScore();
    }
  };

  const showScore = () => {
    resetState();
    setQuestionText(`You scored ${score} out of ${questions.length}!`);
  };

  useEffect(() => {
    startQuiz();
  }, []);

  return (
    <Box sx={{ height: '150vh', display: 'flex', flexDirection: "column", alignItems: 'center', backgroundColor: '#282c34',}}>
        <Box sx={{backgroundImage: `url(${panneau})`, backgroundSize: "cover", width: '100%', height: '100%'}}>
            <Typography sx={{marginTop:22}} variant="h3" gutterBottom>{i18n.t('MCQ_Titre')}</Typography>
            <Typography variant="h4" gutterBottom>{questionText}</Typography>
            <Box sx={{ justifyContent: 'space-between', }}>
                    <Box >
                    {choices.map((choice, index) => (
                        <Button sx={{ height: 150, width:200, margin:2, padding:2}}
                        variant="outlined"
                        color="error"
                        key={index}
                        className={`btn ${selectedAnswer === index ? (choice.answer ? "correct" : "incorrect") : ""}`}
                        onClick={() => selectChoice(choice.answer, index)}
                        aria-label={choice.text}
                        disabled={selectedAnswer !== null}
                        >
                        {choice.text}
                        </Button>
                    ))}
            </Box>
            <Box >
                {feedback && <p>{feedback}</p>} {/* Afficher le feedback */}
                {explanation && <p>{explanation}</p>} {/* Afficher l'explication */}
                { showNextButton && (
                <Button variant="contained" color="success" onClick={handleNextButton}>Suivant</Button>
                )}
            </Box>
            
            </Box>
        
        </Box>
    <Snowfall />
    </Box>
  );
}
