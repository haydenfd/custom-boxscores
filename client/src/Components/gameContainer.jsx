import React, {useState} from "react"
import './gameContainer.css'
import LogoFormatter from "./logoFormatter"

const GameContainer = ({game}) => 

{
    const homeTeam = game["homeTeam"]["teamTricode"]
    const awayTeam = game["awayTeam"]["teamTricode"]
    const gameStatusText = game["gameStatusText"]
    const score = `${game["homeTeam"]["score"]}-${game["awayTeam"]["score"]}`

    return (
        <div className="game-container">
            <div className="team-container">
                <LogoFormatter tricode={awayTeam} />
            </div>
            <div className="score-container">
                <h2>{score}</h2>
                <h3>{gameStatusText}</h3>
            </div>
            <div className="team-container">
                <LogoFormatter tricode={homeTeam} />
            </div>
        </div>
    )
}

export default GameContainer