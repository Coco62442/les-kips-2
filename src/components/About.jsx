import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function About() {
  const [isSecretParamSet, setIsSecretParamSet] = useState(false);

  const containerStyle = {
    maxWidth: '800px',
    margin: 'auto',
    padding: '20px',
  };

  const titleStyle = {
    color: '#333',
    textAlign: 'center',
  };

  const paragraphStyle = {
    fontSize: '16px',
    lineHeight: '1.6',
    color: '#555',
    marginBottom: '15px',
  };

  const paragraphStyle2 = {
    fontSize: '20px',
    lineHeight: '1.6',
    color: '#550',
    marginBottom: '15px',
  };

  const marginBottomStyle = {
    marginBottom: '30px',
  };

  const [font, setFont] = useState('');

  const fontClassNameList = ["font-face-gm", "font-face-hc", "font-face-nc", "font-face-pc", "font-face-pw", "font-face-sv"];

  useEffect(() => {
    // Initialisation de la police au montage du composant
    const randomFont = getRandomFont(fontClassNameList);
    setFont(randomFont);

    // Changement de la police toutes les 5 secondes
    const intervalId = setInterval(() => {
      const newFont = getRandomFont(fontClassNameList);
      setFont(newFont);
    }, 2000);

    // Nettoyer l'intervalle lorsque le composant est démonté
    return () => clearInterval(intervalId);
  }, [font]);

  const getRandomFont = (fontArray) => {
    const randomIndex = Math.floor(Math.random() * fontArray.length);
    return fontArray[randomIndex];
  };

  const [shuffledParagraphs, setShuffledParagraphs] = useState([]);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const secretParam = urlParams.get('secret');

    if (secretParam === '2') {
      setIsSecretParamSet(true);
    }
  }, []);

  const paragraphs = [
    "Bienvenue sur notre page \"À propos\" ! Nous sommes un groupe de quatre individus passionnés ayant participé à la Nuit de l'Info 2023 à Polytech. Notre focus lors de l'événement était de promouvoir la sensibilisation écologique et la durabilité.",
    "En tant qu'enthousiastes de la technologie et futurs ingénieurs, nous croyons en la puissance de l'innovation pour relever les défis mondiaux pressants. Le thème de la conscience écologique résonnait avec nous, et nous avons consacré nos efforts à la création de solutions contribuant à un avenir plus durable.",
    "Tout au long de la nuit, nous avons collaboré, réfléchi et mis en œuvre des idées créatives pour sensibiliser aux problèmes environnementaux. Notre objectif n'était pas seulement de mettre en avant nos compétences techniques, mais aussi d'inspirer les autres à agir et à avoir un impact positif sur la planète.",
    "La Nuit de l'Info nous a offert une plateforme pour explorer l'intersection de la technologie et de la durabilité environnementale. Nous sommes fiers de nos contributions et enthousiastes à l'idée de continuer à travailler sur des projets qui promeuvent des pratiques respectueuses de l'environnement et qui encouragent un sentiment de responsabilité envers notre planète.",
    "Merci de visiter notre page \"À propos\". Si vous partagez notre passion pour la conscience environnementale et la technologie, n'hésitez pas à en savoir plus sur nos projets et initiatives."
  ];

  useEffect(() => {
    // Mélanger les paragraphes toutes les 10 secondes si isSecretParamSet est true
    if (isSecretParamSet) {
      const intervalId = setInterval(() => {
        setShuffledParagraphs(shuffleParagraphs(paragraphs));
      }, 10000);

      // Nettoyer l'intervalle lorsque le composant est démonté
      return () => clearInterval(intervalId);
    }
  }, [isSecretParamSet]);

  const shuffleParagraphs = (paragraphsArray) => {
    toast.success("C'est peut être un peu plus lisible comme ça non ?")
    return paragraphsArray.map((paragraph) => {
      const words = paragraph.split(' ');
      const shuffledWords = words.sort(() => Math.random() - 0.5);
      return shuffledWords.join(' ');
    });
  }

  return (
    <>
      <ToastContainer />
      <div className={isSecretParamSet ? font : null} style={{ ...containerStyle, ...marginBottomStyle }}>
        <h2 style={titleStyle}>À propos de nous</h2>
        {isSecretParamSet ? (
          shuffledParagraphs.map((shuffledParagraph, index) => (
            <p key={index} style={paragraphStyle}>{shuffledParagraph}</p>
          ))
        ) : (
          paragraphs.map((originalParagraph, index) => (
            <p key={index} style={paragraphStyle}>{originalParagraph}</p>
          ))
        )}
        <p style={paragraphStyle2}>
          Et même si on est d'accord avec ce que dit chatGPT (encore faut-il remettre les mots dans l'ordre), on va pas dire que nous sommes les auteurs de ce texte (il a peut-être une autre utilité...)
        </p>
      </div>
    </>
  );
}

export default About;
