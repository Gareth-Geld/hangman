import React from 'react';
import '../css/Highscore.css';
//Highscore Component simply displays the highscore in the top right
const Highscore = ({ score }) => {
    return (
        <div className="highscore">
            <div className="box">
                <p>HighScore : {score}</p>
            </div>
        </div>
    );
};

export default Highscore;