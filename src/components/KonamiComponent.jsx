import React from 'react';
import { useState } from 'react';
import Konami from 'react-konami-code';
import About from './About';
import { useEffect } from 'react';

function KonamiComponent() {
    const [totalKonami, setTotalKonami] = useState(0);

    useEffect(() => {
        if (totalKonami === 3) {
            alert('You are a persistent one, aren\'t you?');
        }
    }, [totalKonami]);

    const easterEgg = () => {
        setTotalKonami(totalKonami + 1);
        alert('Hey, you typed the Konami Code!');
    }

    return (
        <Konami action={easterEgg}>
            <About />
        </Konami>
    )
}

export default KonamiComponent