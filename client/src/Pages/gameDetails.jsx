import React, {useState, useEffect} from 'react'
import './gameDetails.css'
import LogoFormatter from '../Components/logoFormatter'
import {
  useNavigate,
  useParams,
} from 'react-router-dom'
import axios from 'axios'
import { ENDPOINTS, SERVER_URL} from '../utils'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TableBuilder from '../Components/Table'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';


const cols = ['Name','Points', 'Minutes', 'Assists','Rebounds', 'Steals']

const GameDetails = () => {

  const navigate = useNavigate()
  const { gameId } = useParams()

  const [gameData, setGameData] = useState({})
  const [homePlayers, setHomePlayers] = useState([])
  const [awayPlayers, setAwayPlayers] = useState([])

  const [alignment, setAlignment] = useState();
  
  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  
  const fetchGameById = async () => {

    const url = `${SERVER_URL}${ENDPOINTS.getGameById}${gameId}`
    
    axios.get(url).then((response) => 
    {
        let data = response.data["game"]
        setGameData(data)

        const home = data["homeTeam"]; const away = data["awayTeam"]

        for (let p = 0; p < home.players.length; p++)
        {
          setHomePlayers((prev) => [...prev,home.players[p]])
        }

        for (let p = 0; p < away.players.length; p++)
        {
          setAwayPlayers((prev) => [...prev,away.players[p]])
        }

        console.log(homePlayers)
        console.log(awayPlayers)
        console.log(gameData)
    })
  }

  useEffect(() => {
    // const interval = setInterval(() => {
    //   console.log('Ran loop');
    //   fetchGameById();
    // }, 10000);
    // return () => clearInterval(interval);
      fetchGameById();
  }, [])

  return (
    <div className='game-details-wrapper'>

      <div className="game-box-container">
        <div className='game-box-team-container'>
          {gameData.awayTeam && <LogoFormatter tricode={gameData.awayTeam.teamTricode} size={150}/>}
        </div>
        <div className='game-box-score-container'>
        {gameData.awayTeam && gameData.homeTeam && <h2>{gameData.awayTeam.score} - {gameData.homeTeam.score}</h2>}
        {gameData && <h2>{gameData.gameStatusText}</h2>}
        </div>
        <div className='game-box-team-container'>
        {gameData.homeTeam && <LogoFormatter tricode={gameData.homeTeam.teamTricode} size={150}/>}
        </div>
      </div>

      <ToggleButtonGroup
          value={alignment}
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment"
        >
          <ToggleButton value="home" 
            aria-label="left aligned">
            Home Team
          </ToggleButton>
          <ToggleButton value="away" 
            aria-label="right aligned"
          >
            AWAY TEAM
          </ToggleButton>
        </ToggleButtonGroup>


      {
        awayPlayers &&
        <TableBuilder columns={cols} data={awayPlayers}/>
      }
{/* 
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="center">Points</TableCell>
            <TableCell align="center">FGM</TableCell>
            <TableCell align="center">FG %</TableCell>
            <TableCell align="center">3 PTS</TableCell>
            <TableCell align="center">Assists</TableCell>
            <TableCell align="center">Rebounds</TableCell>
            <TableCell align="center">Steals</TableCell>
            <TableCell align="center">Blocks</TableCell>
            <TableCell align="center">Minutes</TableCell>
            <TableCell align="center">OREB</TableCell>
            <TableCell align="center">DREB</TableCell>
            <TableCell align="center">3PT</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {homePlayers.map((player) => (
            <TableRow
              key={player.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {player.name}
              </TableCell>
              <TableCell align="center">{player.statistics.points}</TableCell>
              <TableCell align="center">{player.statistics.fieldGoalsMade}</TableCell>
              <TableCell align="center">{player.statistics.fieldGoalsPercentage}</TableCell>
              <TableCell align="center">{player.statistics.threePointersMade}</TableCell>
              <TableCell align="center">{player.statistics.assists}</TableCell>
              <TableCell align="center">{player.statistics.reboundsTotal}</TableCell>
              <TableCell align="center">{player.statistics.steals}</TableCell>
              <TableCell align="center">{player.statistics.blocks}</TableCell>
              <TableCell align="center">{player.statistics.minutes}</TableCell>
              <TableCell align="center">{player.statistics.reboundsOffensive}</TableCell>
              <TableCell align="center">{player.statistics.reboundsDefensive}</TableCell>
              <TableCell align="center">{player.statistics.threePointersMade}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>


    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="center">Points</TableCell>
            <TableCell align="center">FGM</TableCell>
            <TableCell align="center">FG %</TableCell>
            <TableCell align="center">3 PTS</TableCell>
            <TableCell align="center">Assists</TableCell>
            <TableCell align="center">Rebounds</TableCell>
            <TableCell align="center">Steals</TableCell>
            <TableCell align="center">Blocks</TableCell>
            <TableCell align="center">Minutes</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {awayPlayers.map((player) => (
            <TableRow
              key={player.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {player.name}
              </TableCell>
              <TableCell align="center">{player.statistics.points}</TableCell>
              <TableCell align="center">{player.statistics.fieldGoalsMade}</TableCell>
              <TableCell align="center">{player.statistics.fieldGoalsPercentage}</TableCell>
              <TableCell align="center">{player.statistics.threePointersMade}</TableCell>
              <TableCell align="center">{player.statistics.assists}</TableCell>
              <TableCell align="center">{player.statistics.reboundsTotal}</TableCell>
              <TableCell align="center">{player.statistics.steals}</TableCell>
              <TableCell align="center">{player.statistics.blocks}</TableCell>
              <TableCell align="center">{player.statistics.minutes}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer> */}

    </div>
  )
}

export default GameDetails;