import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Snowfall from 'react-snowfall'

function PopupPage() {
  const [isPopupVisible, setPopupVisibility] = useState(true);
  const [clickCount, setClickCount] = useState(0);

  const initialPopupStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '20px',
    backgroundColor: '#fff',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
    zIndex: 9999,
    textAlign: 'center',
  };

  const [popupStyle, setPopupStyle] = useState(initialPopupStyle);

  useEffect(() => {
    // Affiche la popup au chargement de la page
    // Vous pouvez ajuster le délai ou les conditions selon vos besoins
    const timeoutId = setTimeout(() => {
      setPopupVisibility(true);
    }, 1000);

    // Nettoie le timeout si le composant est démonté avant l'affichage de la popup
    return () => clearTimeout(timeoutId);
  }, []);

  const closePopup = () => {
    setPopupVisibility(false);
  };

  const handleDonate = () => {
    // Logique à exécuter lorsque l'utilisateur choisit de donner à l'association
    console.log("Donner à l'association");
  
    // Ouvrir une nouvelle page dans un autre onglet
    window.open('https://reseauactionclimat.org/faire-un-don/', '_blank');
  
    setPopupVisibility(false);
      toast.error("Tu vois quand tu veux !!!", {
        position: 'center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        draggable: true,
      });
  
      // Rediriger vers la nouvelle URL après 5 secondes
      setTimeout(() => {
        window.location.href = '/';
      }, 5000);
  };
  

  const handleNoDonate = () => {
    toast.success(`T'inquiètes j'aurai fait la même...même si toi ça fait ${clickCount+1} fois que tu refuses quand même`, {
      autoClose: 3000
    })
    // Logique à exécuter lorsque l'utilisateur choisit de ne pas donner à l'association
    console.log("Ne pas donner à l'association");

    // Générer des coordonnées aléatoires pour la position
    const randomLeft = Math.random() * 70;
    const randomTop = Math.random() * 70;

    // Mettre à jour la position de la popup avec des coordonnées aléatoires
    setPopupStyle({
      ...initialPopupStyle,
      left: `${randomLeft}%`,
      top: `${randomTop}%`,
    });

    // Incrémenter le nombre de clics
    setClickCount(prevCount => prevCount + 1);
  };

  return (
    <>
      <Snowfall radius={[10,10]} />
      <ToastContainer />
      {isPopupVisible && (
        <div style={popupStyle}>
          <h2>Réseau Action Climat</h2>
          <p>Le Réseau Action Climat, fédération d’associations nationales et locales, lutte contre les causes des changements climatiques, de l’échelle locale à l'échelle internationale.</p>
          <button onClick={handleNoDonate}>Ne pas donner à l'association</button>
          <button onClick={handleDonate}>Donner à l'association</button>
        </div>
      )}
    </>
  );
}

export default PopupPage;
