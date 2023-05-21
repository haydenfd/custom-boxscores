import React, {useState} from "react"
import './gameContainer.css'

const GameContainer = () => 
{
    return (
        <div className="game-container">
            <div className="team-container">
                <h2>AWAY</h2>
            </div>
            <div className="score-container">
                <h2>SCORE</h2>
            </div>
            <div className="team-container">
                <h2>HOME</h2>
            </div>
        </div>
    )
}

export default GameContainer