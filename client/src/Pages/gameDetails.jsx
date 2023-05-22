// const GameDetails = () => 
// {
//   const navigate = useNavigate()
//   const {gameId} = useParams()

//   const [homePlayers, setHomePlayers] = useState([])
//   const [awayPlayers, setAwayPlayers] = useState([])
//   const [gameData, setGameData] = useState({})

//   const getHomePlayerStats = (homeTeam) => {

//     for (let p = 0; p < homeTeam["players"].length; p++)
//     {
//       const player = homeTeam["players"][p]
//       setHomePlayers((prev) => [...prev, player])
//     }
    
//   }

//   const getAwayPlayerStats = (awayTeam) => {

//     for (let p = 0; p < awayTeam["players"].length; p++)
//     {
//       const player = awayTeam["players"][p]
//       setAwayPlayers((prev) => [...prev, player])
//     }
    
//   }

//   const fetchGame = async () => 
//   {
    // const url = `${SERVER_URL}${ENDPOINTS.getGameById}${gameId}`

    // axios.get(url).then((response) => 
    // {
    //     let data = response.data
    //     data = data["game"]
    //     setGameData(data)
    //     let homeTeam = data["homeTeam"]
    //     let awayTeam = data["awayTeam"]
    //     getHomePlayerStats(homeTeam)
    //     getAwayPlayerStats(awayTeam)
    // })
  // }

//   useEffect(() => {
//     fetchGame();
//   }, [])

//   return (
//     <div style={{"width":'90%', 'display':'flex','flexDirection':'column', 'alignItems': 'center', 'gap':'50px'}}>
// {/*         
//         <div className='game-totals-box'>
//           <div className="teams-box away-team-box">
//             <LogoFormatter tricode={gameData.awayTeam.teamTricode} />
//           </div>
//           <div className="score-box">
//             <h1>
//               {`${gameData.awayTeam.score} - ${gameData.homeTeam.score}`}
//             </h1>
//             <h2>
//               {gameData.gameStatusText}
//               </h2>
//           </div>
//           <div className="teams-box home-team-box">
//             <LogoFormatter tricode={gameData.homeTeam.teamTricode} />
//             <h1>Hayden</h1>
//             </div>
//         </div> */}
//         {/* {gameData.awayTeam && gameData (
//           <div className="game-totals-box">
//             {gameData.awayTeam.score}
//           </div>
//         )} */}

//         {
//           gameData && gameData.awayTeam && gameData.homeTeam && (
//             <div className='game-totals-box'>
//             <div className="teams-box away-team-box">
//               <LogoFormatter tricode={gameData.awayTeam.teamTricode} />
//               <h3>{gameData.awayTeam.teamCity}</h3>
//               <h3>{gameData.awayTeam.teamName}</h3>
//             </div>
//             <div className="score-box">
//               <h1>
//                 {`${gameData.awayTeam.score} - ${gameData.homeTeam.score}`}
//               </h1>
//               <h2>
//                 {gameData.gameStatusText}
//                 </h2>
//             </div>
//             <div className="teams-box home-team-box">
//               <LogoFormatter tricode={gameData.homeTeam.teamTricode} />
//               <h3>{gameData.homeTeam.teamCity}</h3>
//               <h3>{gameData.homeTeam.teamName}</h3> 
//               </div>
//           </div>
//           )
//         }
//         <table>
//           <tr>
//             <th>NAME</th>
//             <th>PTS</th>
//             <th>AST</th>
//             <th>REB</th>
//             <th>STL</th>
//             <th>BLK</th>
//             <th>TO</th>
//             <th>+/-</th>
//           </tr>
//           {homePlayers.map((player) => 
//           {
//             return (
//             <tr>
//                 <td>
//                 {player.name}
//                 </td>
//                 <td>
//                 {player.statistics.points}
//                 </td>
//                 <td>
//                 {player.statistics.assists}
//                 </td>
//                 <td>
//                 {player.statistics.reboundsTotal}
//                 </td>
//                 <td>
//                 {player.statistics.steals}
//                 </td>
//                 <td>
//                 {player.statistics.blocks}
//                 </td>
//                 <td>
//                 {player.statistics.turnovers}
//                 </td>
//                 <td>
//                 {player.statistics.plusMinusPoints}
//                 </td>
//               </tr>
//             )
//           })}
//         </table>

//         <table>
//         <tr>
//         <th>NAME</th>
//           <th>PTS</th>
//           <th>AST</th>
//           <th>REB</th>
//           <th>STL</th>
//           <th>BLK</th>
//           <th>TO</th>
//           <th>+/-</th>
//         </tr>
//           {awayPlayers.map((player) => 
//           {
//             return (
//             <tr>
//                 <td>
//                 {player.name}
//                 </td>
//                 <td>
//                 {player.statistics.points}
//                 </td>
//                 <td>
//                 {player.statistics.assists}
//                 </td>
//                 <td>
//                 {player.statistics.reboundsTotal}
//                 </td>
//                 <td>
//                 {player.statistics.steals}
//                 </td>
//                 <td>
//                 {player.statistics.blocks}
//                 </td>
//                 <td>
//                 {player.statistics.turnovers}
//                 </td>
//                 <td>
//                 {player.statistics.plusMinusPoints}
//                 </td>
//             </tr>
//             )
//           })}
//         </table>
//     </div>
//   )
// }

// export default GameDetails 


import React, {useState, useEffect, useMemo} from 'react'
import './gameDetails.css'
import LogoFormatter from '../Components/logoFormatter'
import {
  useNavigate,
  useParams,
} from 'react-router-dom'
import axios from 'axios'
import { ENDPOINTS, SERVER_URL} from '../utils'

const GameDetails = () => {


  const navigate = useNavigate()
  const { gameId } = useParams()

  const [gameData, setGameData] = useState({})
  const [homePlayers, setHomePlayers] = useState([])
  const [awayPlayers, setAwayPlayers] = useState([])
  
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
    fetchGameById();
  }, [])

  return (
    <div className='game-details-wrapper'>

      <div className="game-box-container">
        <div className='game-box-team-container'>
          {gameData.awayTeam && <LogoFormatter tricode={gameData.awayTeam.teamTricode} size={150}/>}
        </div>
        <div className='game-box-score-container'>
        {gameData && <h3>hayden</h3>}
        </div>
        <div className='game-box-team-container'>
        {gameData.homeTeam && <LogoFormatter tricode={gameData.homeTeam.teamTricode} size={150}/>}
        </div>
      </div>



    </div>
  )
}

export default GameDetails;