import React, {useState, useEffect} from 'react'
import './gameDetails.css'
import {
  Link, 
  useNavigate,
  useParams,
  useLocation,
} from 'react-router-dom'
import axios from 'axios'
import { ENDPOINTS, SERVER_URL} from '../utils'
import GameTotalsBox from '../Components/gameTotalsBox'

const GameDetails = () => 
{
  const navigate = useNavigate()
  const {gameId} = useParams()

  const [players, setPlayers] = useState([])
  const [gameData, setGameData] = useState({})

  const getPlayerStats = (homeTeam) => {

    for (let p = 0; p < homeTeam["players"].length; p++)
    {
      const player = homeTeam["players"][p]
      setPlayers((prev) => [...prev, player["name"]])
    }
    
  }

  const fetchGame = async () => 
  {
    const url = `${SERVER_URL}${ENDPOINTS.getGameById}${gameId}`

    axios.get(url).then((response) => 
    {
        let data = response.data
        data = data["game"]
        setGameData(data)
        let homeTeam = data["homeTeam"]
        getPlayerStats(homeTeam)
    })
  }

  useEffect(() => {
    fetchGame();
  }, [])

  return (
    <div style={{"width":'80%', 'display':'flex','flexDirection':'column', 'alignItems': 'center', 'gap':'50px'}}>
        {gameData && <GameTotalsBox game={gameData}/>}
        <table>
          <th>Name</th>
          {players.map((player) => 
          {
            return (
            <tr>
              {player}
            </tr>
            )
          })}
        </table>
    </div>
  )
}

export default GameDetails 