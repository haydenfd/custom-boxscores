import React, {useState} from "react"
import './gameContainer.css'
import LogoFormatter from "./logoFormatter"

const GameContainer = ({game}) => 
{
    const homeTeam = game["homeTeam"]["teamTricode"]
    const awayTeam = game["awayTeam"]["teamTricode"]
    const gameStatusText = game["gameStatusText"]
    const score = game["gameStatus"] === 1? '': `${game["homeTeam"]["score"]}-${game["awayTeam"]["score"]}`

    return (
        <div className="game-container">
            <div className="team-container away-team">
                <LogoFormatter tricode={awayTeam} />
                <h3>{awayTeam}</h3>
            </div>
            <div className="score-container">
                <h2>{score}</h2>
                <h3>{gameStatusText}</h3>
                <p>{game["seriesText"]}</p>
            </div>
            <div className="team-container home-team">
                <LogoFormatter tricode={homeTeam} />
                <h3>{homeTeam}</h3>
            </div>
        </div>
    )
}

export default GameContainer