import React, { useEffect } from 'react';
import '../css/WordDisplay.css';
//This is the wordDisplay Component displays the word with Underscores inplace of letters allowing user to fill in the word
const WordDisplay = ({ pickedLetters, onSelectWord, randomWord, displayWord, setDisplayWord, winner, setWinner }) => {

    onSelectWord(randomWord);

    // Function to update the displayWord based on pickedLetters
    useEffect(() => {
        // Initialize the displayWord with underscores for each letter
        let newDisplayWord = randomWord.replace(/./g, '_');

        // Replace underscores with letters where applicable
        for (let i = 0; i < randomWord.length; i++) {
            if (pickedLetters.includes(randomWord[i])) {
                let firstPart = newDisplayWord.substring(0, i);
                let secondPart = newDisplayWord.substring(i + 1);
                newDisplayWord = firstPart + randomWord[i] + secondPart;
            }
        }

        setDisplayWord(newDisplayWord);
    }, [randomWord, pickedLetters, setDisplayWord]);

    if (randomWord === displayWord) {
        setWinner(true);
    }

    //Render the word
    return (
        <div className="word-display">
            <div className="display-word">{displayWord}</div>
        </div>
    );
}

export default WordDisplay;