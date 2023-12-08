import React, { useState, useEffect } from "react";
import questions from "./questions";
import { Box, Typography, Button, } from '@mui/material';
import Snowfall from 'react-snowfall'
import panneau from './../../assets/image/panneau.png'
//import './indexMCQ.css'

import { useTranslation } from 'react-i18next';


function shuffle(array) {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

export default function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [questionText, setQuestionText] = useState("");
  const [choices, setChoices] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showNextButton, setShowNextButton] = useState(false);
  const [feedback, setFeedback] = useState(""); // Ajout de l'état pour le feedback
  const [explanation, setExplanation] = useState(""); // Ajout de l'état pour l'explication

  const { t } = useTranslation();

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
      setFeedback("Correct !"); // Ajout du feedback pour une réponse correcte
      } else {
      setFeedback("Incorrect..."); // Ajout du feedback pour une réponse incorrecte
      setExplanation("Explication pour une réponse incorrecte ici."); // Définir une explication générique pour une réponse incorrecte
    }
    setExplanation(questions[currentQuestionIndex].explanation); // Définir l'explication pour une réponse correcte
    
    setSelectedAnswer(index);
    setShowNextButton(true);
  };

  const handleNextButton = () => {
    setShowNextButton(false);
    setFeedback(""); // Réinitialiser le feedback à chaque nouvelle question
    setExplanation(""); // Réinitialiser l'explication à chaque nouvelle question
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);

    if (currentQuestionIndex < questions.length - 1) {
      showQuestion(currentQuestionIndex + 1);
    } else {
      // Si c'est la dernière question, afficher le score
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
    <Box sx={{ display: 'flex', flexDirection: "column", justifyContent: 'center', alignItems: 'center', backgroundColor: '#282c34'}}>
        <Box sx={{ width: '100vh', background: `url(${panneau}) center/cover no-repeat`,   }}>
        <Box sx={{ height:50, width: '70%', marginTop: 18, marginLeft:19,}}>
            <Typography variant="h3" gutterBottom>{t('MCQ_Question1_Question')}</Typography>
            <Typography variant="h4" gutterBottom>{questionText}</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', }}>
                    <Box >
                    {choices.map((choice, index) => (
                        <Button sx={{ height: 70, width:100, margin:2, padding:2}}
                        variant="contained"
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
            </Box>
            {feedback && <p>{feedback}</p>} {/* Afficher le feedback */}
            {explanation && <p>{explanation}</p>} {/* Afficher l'explication */}
            { showNextButton && (
            <Button onClick={handleNextButton}>Suivant</Button>
            )}
            </Box>
        
        </Box>
    <Snowfall />
    </Box>
  );
}
