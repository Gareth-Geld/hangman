import React from 'react';
import '../css/SelectedLetters.css';

//This is the SelectedLetters Component this is the inner circle that appears after letters have been selected
const SelectedLetters = ({ pickedLetters }) => {

    // Generate CSS styles for positioning letters in a circle
    const letterStyles = pickedLetters.map((letter, index) => {
        const angle = (index / pickedLetters.length) * 360;
        const radius = 100;
        const x = radius * Math.cos((angle * Math.PI) / 180);
        const y = radius * Math.sin((angle * Math.PI) / 180);

        return {
            transform: `translate(${x}px, ${y}px)`,
        };
    });

    //Rendered New Inner circle displaying all selected letters
    return (
        <div className="selected-letters-circle">
            <div className="circle">
                {pickedLetters.map((letter, index) => (
                    <div key={index} className="selectedLetters" style={letterStyles[index]}>
                        {letter}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SelectedLetters;