import React, {useState, useEffect} from 'react'
import './gameDetails.css'
import {LogoFormatter} from '../../Components/logoFormatter'
import {
  useParams,
} from 'react-router-dom'
import axios from 'axios'
import {endpoints, server_url, retrieveTeamObject} from '../../utils'
import {TableBuilder} from '../../Components/TableBuilder'

const table_cols = 
[
  'NAME', 
  'MIN', 
  'PTS', 
  'AST', 
  'REB',
  'OREB',
  'DREB', 
  'STL',
  'BLK', 
  'TO',
  '+/-',
  // 'FG',
  // 'FT',
  // '3PT'
]

// const cols = ['Name','Points', 'Minutes', 'Assists','Rebounds', 'Steals']

function cm(...args) {
  return args.filter((v) => v).join(" ");
}


export const GameDetails = () => {

  const { gameId } = useParams()

  const [gameData, setGameData] = useState({})
  const [homePlayers, setHomePlayers] = useState([])
  const [awayPlayers, setAwayPlayers] = useState([])
  const [homeTeam, setHomeTeam] = useState('')
  const [awayTeam, setAwayTeam] = useState('')

  const [buttonStatus, setButtonStatus] = useState("register");

  const fetchGameById = async () => {

    const url = `${server_url}${endpoints.getGameById}${gameId}`
    
    axios.get(url).then((response) => 
    {
        let data = response.data["game"]
        setGameData(data)
        console.log(data)

        const home = data["homeTeam"]; const away = data["awayTeam"]

        setHomeTeam(retrieveTeamObject(home["teamTricode"]))
        setAwayTeam(retrieveTeamObject(away["teamTricode"]))

        for (let p = 0; p < home.players.length; p++)
        {
          console.log(`Added ${home.players[p]["name"]}`)
          setHomePlayers((prev) => [...prev,home.players[p]])
        }

        for (let p = 0; p < away.players.length; p++)
        {
          setAwayPlayers((prev) => [...prev,away.players[p]])
        }

    })
  }

  useEffect(() => {

      fetchGameById()
      const interval = setInterval(() => {
        console.log('Ran iter')
        setGameData({})
        setAwayPlayers([])
        setHomePlayers([])
        setHomeTeam('')
        setAwayTeam('')
        fetchGameById();
      }, 6000);
      return () => clearInterval(interval);

  }, [])

  return (
    <>
    {gameData && homeTeam && awayTeam? 
    (
      <div className="game-details-wrapper">

        <div className="game-box-container">
          <div className="game-box-team-container">
          <LogoFormatter color={awayTeam["hex"]} tricode={awayTeam["tricode"]} size={130}/>
          </div>
          <div className='game-box-score-container'>
            <div className='game-box-score-subcontainer'>
              <h1>{gameData?.awayTeam?.score} - {gameData?.homeTeam?.score}</h1>
              <h2>{gameData.gameStatusText}</h2>
            </div>
        </div>
          <div className='game-box-team-container'>
          <LogoFormatter color={homeTeam["hex"]} tricode={homeTeam["tricode"]} size={130}/>
          </div>
        </div>


      <div className="buttons-container">
        <button
          className={cm("buttonStatus", buttonStatus === "login" && awayTeam.activeClass)}
          onClick={() => setButtonStatus("login")}
        > {awayTeam['tricode']} </button>
        <button
          className={cm("buttonStatus", buttonStatus === "register" && homeTeam.activeClass)}
          onClick={() => setButtonStatus("register")}
        > {homeTeam['tricode']}</button>
      </div>

      { buttonStatus === 'login' &&
        <TableBuilder columns={table_cols} data={awayPlayers} tricode={awayTeam["hex"]}/>
      }
      { buttonStatus === 'register' &&
        <TableBuilder columns={table_cols} data={homePlayers} tricode={homeTeam["hex"]}/>
      }
      </div>
    )
    : 
    (<></>)
    }
    </>
  )
}
//     <div className='game-details-wrapper'>
//       <div className="game-box-container">
//         <div className='game-box-team-container'>
//           {awayTeam && <LogoFormatter color={awayTeam["hex"]} tricode={awayTeam["tricode"]} size={130}/>}
//         </div>

        // <div className='game-box-score-container'>
        // {
        //   gameData && (
        //     <div className='game-box-score-subcontainer'>
        //       <h1>{gameData?.awayTeam?.score} - {gameData?.homeTeam?.score}</h1>
        //       <h2>{gameData.gameStatusText}</h2>
        //     </div>
        //   )
        // }
  
        // </div>
      //   <div className='game-box-team-container'>
      //   {homeTeam && <LogoFormatter color={homeTeam["hex"]} tricode={homeTeam["tricode"]} size={130}/>}
      //   </div>
      // </div>

// {
//   gameData.homeTeam && gameData.awayTeam && (
//     <div className='buttons-container'>
      // <button
      //   className={cm("buttonStatus", buttonStatus === "login" && retrieveTeamObject(gameData.awayTeam.teamTricode)?.activeClass)}
      //   onClick={() => setButtonStatus("login")}
      // >
      //   {gameData.awayTeam?.teamTricode}
      // </button>
      // <button
      //   className={cm("buttonStatus", buttonStatus === "register" && retrieveTeamObject(gameData.homeTeam.teamTricode)?.activeClass)}
      //   onClick={() => setButtonStatus("register")}
      // >
      //   {gameData.homeTeam?.teamTricode}
      // </button>
//     </div>
//   )
// }
      // { buttonStatus == 'login' &&
      //   awayPlayers &&
      //   <TableBuilder columns={table_cols} data={awayPlayers}/>
      // }
      // { buttonStatus == 'register' &&
      //   homePlayers &&
      //   <TableBuilder columns={table_cols} data={homePlayers}/>
      // }

// </div>



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

