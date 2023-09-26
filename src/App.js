import './App.css';
import Hangman from './components/HangMan';
import LetterPicker from './components/LetterPicker';
import ResultPopup from './components/ResultPopup';
import WordDisplay from './components/WordDisplay';
import SelectedLetters from './components/SelectedLetters';
import Highscore from './components/Highscore';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';

//This is my main Application 
function App() {
  const [guessesRemaining, setGuessesRemaining] = useState(8);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');

  const [alphabet, setAlphabet] = useState('ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''));
  const [selectedLetter, setSelectedLetter] = useState(null);
  const [pickedLetters, setPickedLetters] = useState([]);
  const [selectedWord, setSelectedWord] = useState('');

  //The words that get randomly selected
  const [words] = useState([
    "effort",
    "trouble",
    "pattern",
    "capital",
    "respect",
    "fantastic",
    "challenge",
    "incredible",
    "beautiful",
    "knowledge",
    "elephant",
    "computer",
    "building",
    "universe",
    "happiness",
    "journey",
    "language",
    "ocean",
    "mountain",
    "sunshine",
    "moonlight",
    "starfish",
    "butterfly",
    "fireplace",
    "rainbow",
    "hurricane",
    "whisper",
    "adventure",
    "exploration",
    "harmony",
    "laughter",
    "freedom",
    "creativity",
    "chocolate",
    "puzzle",
    "mystery",
    "treasure",
    "celebration",
    "vacation",
    "wonderful",
    "discovery",
    "brilliant",
    "inspiration",
    "magical",
    "imagination",
    "sensational",
    "reflection",
    "illuminate",
    "innovation",
    "serenity",
    "forgiveness",
    "blossom",
    "happiness",
    "laughter",
    "friendship",
    "adventure",
    "exploration",
    "creativity",
    "discovery",
    "harmony",
    "wonderful",
    "celebration",
    "inspiration",
    "freedom",
    "butterfly",
    "sunset",
    "starlight",
    "flower",
    "silence",
    "fantasy",
    "captivating",
    "enchanted",
    "radiant",
    "tranquil",
    "whimsical",
    "mesmerize",
    "effervescent",
    "splendid",
    "serendipity",
    "irresistible",
    "captivating",
    "sparkling",
    "extraordinary",
    "breathtaking",
    "adventurous",
    "delightful",
    "bewitching",
    "spectacular",
    "mesmerizing",
    "magnificent",
    "luminous",
    "mysterious",
    "irreplaceable",
  ]);

  const [randomWord, setRandomWord] = useState(words[Math.floor(Math.random() * words.length)].toUpperCase());
  const [displayWord, setDisplayWord] = useState('');

  const [winner, setWinner] = useState(false);

  const [highscore, setHighscore] = useState(0);

  // Function to set the selectedWord
  const handleWordSelection = (word) => {
    setSelectedWord(word);
  };

  //This function runs all the states to their reset state
  const reset = () => {
    setGuessesRemaining(8);
    setPickedLetters([]);
    setAlphabet('ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''));
    setRandomWord(words[Math.floor(Math.random() * words.length)].toUpperCase());
    setWinner(false);
  }

  //Reset Button
  const resetBtn = () => {
    reset();
    setHighscore(0);
  }

  //help button
  const help = () => {
    setPopupMessage('The guessing player starts by guessing a letter of the alphabet. They can only guess one letter at a time. ' +
      'If the guessed letter is in the target word, the word provider fills in all instances of that letter in the appropriate positions in the word. ' +
      'If the guessed letter is not in the target word, the word provider begins to draw a hangman figure. ' +
      'The guessing player continues to guess letters, one at a time. ' +
      'If the guessing player correctly guesses all the letters in the target word before the hangman figure is fully drawn, they win. ' +
      'If the guessing player makes a certain number of incorrect guesses, resulting in the completion of the hangman figure, they lose.');
    setShowPopup(true);
  }

  //This sets up the winning or losing popups
  useEffect(() => {
    // Check if guessesRemaining reaches 0
    if (guessesRemaining === 0) {
      setPopupMessage('Skill Issue Try Again');
      setShowPopup(true);
    }

    if (winner) {
      setPopupMessage('Winner Winner Chicken Dinner');
      setShowPopup(true);
    }
  }, [guessesRemaining, winner]);

  //Function to close popup also resets game on close
  const closePopup = () => {
    setShowPopup(false);
    if (popupMessage === "Skill Issue Try Again") {
      reset();
      setHighscore(0);
    } else if (popupMessage === "Winner Winner Chicken Dinner") {
      reset();
      setHighscore(highscore + 1);
    }
  };

  //Rendering Application
  //This displays the WordDisplay component on top and then in bootstrap grid the letterPicker and Hangman Components
  //Then the 2 Buttons Reset and Help
  //Then the selectedLetters Component 
  //and Then the HighScore Component
  return (
    <div className="App">
      <header className="App-header">
        <WordDisplay pickedLetters={pickedLetters} onSelectWord={handleWordSelection} randomWord={randomWord} setDisplayWord={setDisplayWord} displayWord={displayWord} winner={winner} setWinner={setWinner} />
        <div className="row">
          <div className="col-sm"><LetterPicker guessesRemaining={guessesRemaining} setGuessesRemaining={setGuessesRemaining} alphabet={alphabet} setAlphabet={setAlphabet} selectedLetter={selectedLetter} setSelectedLetter={setSelectedLetter} pickedLetters={pickedLetters} setPickedLetters={setPickedLetters} selectedWord={selectedWord} setSelectedWord={setSelectedWord} /></div>
          <div className="col-sm"><Hangman currentPhase={8 - guessesRemaining} /></div>
        </div>
        <div className="row moveBtn">
          <div className="col-sm"><button className='ClickableBtn' onClick={resetBtn}>Reset</button></div>
          <div className="col-sm"><button className='ClickableBtn' onClick={help}>Help</button></div>
        </div>
        <SelectedLetters pickedLetters={pickedLetters} onWordSelection={handleWordSelection} />
        {showPopup && <ResultPopup message={popupMessage} onClose={closePopup} word={randomWord} />}
        <Highscore score={highscore} />
      </header>
    </div>
  );
}

export default App;
