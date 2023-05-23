import React from "react"
import './gameContainer.css'
import LogoFormatter from "./logoFormatter"
import { retrieveTeamObject } from "../utils/teamDetails"

const GameContainer = ({game}) => 
{
    const homeTeam = game["homeTeam"]["teamTricode"]
    const awayTeam = game["awayTeam"]["teamTricode"]
    const gameStatusText = game["gameStatusText"]
    const score = game["gameStatus"] === 1? '': `${game["homeTeam"]["score"]}-${game["awayTeam"]["score"]}`
    const home = retrieveTeamObject(homeTeam).hex
    const away = retrieveTeamObject(awayTeam).hex

    return (
        <div className="game-container">
            <div className="team-container">
                <LogoFormatter tricode={awayTeam} color={away}/>
            </div>
            <div className="score-container">
                <h2>{score}</h2>
                <h3>{gameStatusText}</h3>
                <p>{game["seriesText"]}</p>
            </div>
            <div className="team-container">
                <LogoFormatter tricode={homeTeam} color={home}/>
            </div>
        </div>
    )
}

export default GameContainer