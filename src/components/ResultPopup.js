import React from 'react';
import '../css/ResultPopup.css';
//This is the popup component - This displays the relevant popups on the screen - Depending on what condition was met
const ResultPopup = ({ message, onClose, word }) => {
    return (
        <div className="popup">
            <div className="popup-content">
                {message.length > 100 ? (
                    <p>{message}</p>
                ) : (
                    <p>{message} THE WORD WAS : {word}</p>
                )}
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default ResultPopup;