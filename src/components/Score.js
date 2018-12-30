import React from 'react';

const Score = (props) => {
    return (
        <div>                
            <h2 className="score-info">
                Current Score: {props.currentScore} | Top Score: {props.topScore} 
            </h2>
        </div>
     )
}

export default Score;