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

const GameDetails = () => 
{
  const navigate = useNavigate()
  const {gameId} = useParams()

  const [players, setPlayers] = useState([])

  const getPlayerStats = (homeTeam) => {

    for (let p = 0; p < homeTeam["players"].length; p++)
    {
      const player = homeTeam["players"][p]
      setPlayers((prev) => [...prev, player["name"]])
    }
    // {
    //   console.log(player)
    //   setPlayers((prev) => [...prev,player["nameI"]])
    // }
    
  }

  const fetchGame = async () => 
  {
    const url = `${SERVER_URL}${ENDPOINTS.getGameById}${gameId}`

    axios.get(url).then((response) => 
    {
        let data = response.data
        data = data["game"]
        let homeTeam = data["homeTeam"]
        console.log(homeTeam)
        getPlayerStats(homeTeam)


    })
  }

  useEffect(() => {
    fetchGame();
  }, [])

  return (
    <div>
        <h1>
            {gameId}
        </h1>
        <ul>
          {players.map((player) => 
          {
            return (
            <li>
              <p>{player}</p>
            </li>
            )
          })}
        </ul>
    </div>
  )
}

export default GameDetails 