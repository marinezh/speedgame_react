import React from 'react';
import "./GameOver.css"

const GameOver = (props) => {
    return (
        <div className = 'overlay'>
            <div className='modal'>
                <h2>Game over</h2>
                <p>{ props.score === 0 ? "Upps, try again!": `Well done, you caught ${props.score} stars, your wish will come true soon!`} </p>
              
                <button className='close' onClick={props.close}>x</button>
            </div>
        </div>
    );
};

export default GameOver;