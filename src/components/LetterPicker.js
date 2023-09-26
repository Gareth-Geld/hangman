import '../css/LetterPicker.css';
import React from 'react';
//This is the LetterPicker Component this controls what happens when the letters get selected
const LetterPicker = ({ setGuessesRemaining, guessesRemaining, setAlphabet, alphabet, setSelectedLetter, selectedLetter, setPickedLetters, pickedLetters, setSelectedWord, selectedWord }) => {
    const select = (letter) => {
        if (guessesRemaining > 0) {
            setSelectedLetter(letter);
            const updatedAlphabet = alphabet.filter(item => item !== letter);
            setAlphabet(updatedAlphabet);
            setPickedLetters([...pickedLetters, letter]);
            if (selectedWord.indexOf(letter) === -1) {
                setGuessesRemaining(guessesRemaining - 1);
            }
        }
    }

    // Generate CSS styles for positioning letters in a circle
    const letterStyles = alphabet.map((letter, index) => {
        const angle = (index / alphabet.length) * 360;
        const radius = 200;
        const x = radius * Math.cos((angle * Math.PI) / 180);
        const y = radius * Math.sin((angle * Math.PI) / 180);

        return {
            transform: `translate(${x - 100}px, ${y + 200}px)`,
        };
    });

    //Renders Circular alphabet with the appropriate class assigned to each letter
    return (
        <div className="circular-alphabet">
            {alphabet.map((letter, index) => (
                <div onClick={() => select(letter)} key={index} className={`${selectedLetter === letter ? ' selected' : 'letter'}`} style={letterStyles[index]}>
                    {letter}
                </div>
            ))}
            <div className="middleText">{guessesRemaining}</div>
        </div>
    );
}

export default LetterPicker;
