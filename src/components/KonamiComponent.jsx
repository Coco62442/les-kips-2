import React from 'react';
import Konami from 'react-konami-code';

const KonamiComponent = (props) => {
    const { action, timeOut, resetDelay } = props; 
    const konamiAction = (() => {
        action? action() : null;
    });

    return (
        <Konami action={konamiAction} resetDelay={resetDelay ? resetDelay : 1000} timeout={timeOut ? timeOut : 1000} />
    )
}

export default KonamiComponent