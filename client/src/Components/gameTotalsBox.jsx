import React, {useState} from 'react'
import './gameTotalsBox.css'
import LogoFormatter from './logoFormatter'

const GameTotalsBox = ({game}) => 
{
  console.log(game)
  const score = `${game["awayTeam"]["score"]} - ${game["homeTeam"]["score"]}`

  return (
    <div className='game-totals-box-wrapper'>
        <div className="teams-score-box-wrapper">
            <div className="teams-box-wrapper celtics away">
                <LogoFormatter tricode={game["awayTeam"]["teamTricode"]} size={120}/>
                <h3 className='team-name-upper'>{`${game["awayTeam"]["teamCity"]}`}</h3>
                <h3 className='team-name-upper'>{`${game["awayTeam"]["teamName"]}`}</h3>
                {/* <h3 className='team-name-upper'>{`${game["awayTeam"]["teamCity"]} ${game["awayTeam"]["teamName"]}`}</h3> */}
            </div>
            <div className="teams-score-wrapper">
                <h2>{score}</h2>
            </div>
            <div className="teams-box-wrapper heat home">
                <LogoFormatter tricode={game["homeTeam"]["teamTricode"]} size={120}/>
                <h3 className='team-name-upper'>{`${game["homeTeam"]["teamCity"]}`}</h3>
                <h3 className='team-name-upper'>{`${game["homeTeam"]["teamName"]}`}</h3>
            </div>

        </div>
    </div>
  )
}

export default GameTotalsBox