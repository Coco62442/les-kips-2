import React from 'react';
import KonamiComponent from './components/KonamiComponent';
import Timer from './components/Timer';
import Router from './Router';

function App() {

    const action = () => {
        window.localStorage.getItem('compteur') ? null : window.localStorage.setItem('compteur', 0);

        const compteur = parseInt(window.localStorage.getItem('compteur'));

        if (compteur === 0) {
            alert('Vous avez trouvé le code secret !');
        } else if (compteur === 1) {
            alert('Vous avez trouvé le code secret une seconde fois !');
        } else if (compteur === 2) {
            alert('Vous avez trouvé le code secret une troisième fois !');
        } else {
            alert('Vous avez trouvé le code secret ' + (compteur + 1) + ' fois !');
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
