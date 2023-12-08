import React from 'react';
import KonamiComponent from './components/KonamiComponent';
import Timer from './components/Timer';
import Router from './Router';

function App() {

    const action = () => {
        window.localStorage.getItem('compteur') ? null : window.localStorage.setItem('compteur', 0);
        console.log(window.localStorage.getItem('compteur'));
        const compteur = parseInt(window.localStorage.getItem('compteur')) % 4;
        console.log(compteur);
        if (compteur === 0) {
            window.location.href = '/ux'
        } else if (compteur === 1) {
            window.location.href = '/about?secret=2'
        } else if (compteur === 2) {
            window.location.href = '/popup'
        } else {
            window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
        }

        window.localStorage.setItem('compteur', parseInt(window.localStorage.getItem('compteur')) + 1);
    }

    return (
        <>
            <KonamiComponent action={action} />
            <Timer>
                <Router />
            </Timer>
        </>
    )
}

export default App
