import React from 'react';
import '../css/HangMan.css';

//This is the hangman Component this displays the different parts of the hangman at first hidden them depending on the phase more get show class
const Hangman = ({ currentPhase }) => {
    const phaseClasses = [
        'hidden',
        'phase1',
        'phase2',
        'phase3',
        'phase4',
        'phase5',
        'phase6',
        'phase7',
        'phase8',
    ];

    return (
        <div className="hangContainer">
            <div className="structureOne"></div>
            <div className="structureTwo"></div>
            <div className="structureThree"></div>
            <div className="structureFour"></div>
            {phaseClasses.map((className, index) => (
                <div key={index} className={`${className} ${index <= currentPhase ? 'show' : 'hidden'}`}></div>
            ))}
        </div>
    );
}

export default Hangman;