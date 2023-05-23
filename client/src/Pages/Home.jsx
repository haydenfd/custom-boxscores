import './Home.css'
import React, {useState, useEffect} from 'react'
import {server_url, endpoints} from '../utils/server'
import { formatGameDayString } from '../utils/gameDayFormatter'
import axios from 'axios'
import GameContainer from '../Components/gameContainer'
import { Link } from 'react-router-dom'

// import { teamDetails, retrieveTeamObject} from "../utils";
const Home = () => 
{

    const parseDateFromResponse = (gameDayString) =>
    {
        const regex = /^(\d{4})-(\d{2})-(\d{2})T/;
        const match = regex.exec(gameDayString);

        if (match)
        {
            const year = match[1]; const month = match[2]; const date = match[3];
            setGameDay ({
                year: year,
                month: month,
                date: date,
            })
        }
    }

    const fetchGames = async () => 
    {
        const url = `${server_url}${endpoints.getTodayGames}`
    
        axios.get(url).then((response) => 
        {
            let data = response.data
            let gameDayString = data[0]["gameEt"]
            setTodayGames(data)
            parseDateFromResponse(gameDayString)
        })
    }

    const [gameDay, setGameDay] = useState({})
    const [todayGames, setTodayGames] = useState([])
    
    useEffect(() => {
        const interval = setInterval(() => {
            console.log('Ran a search');
            fetchGames();
          }, 3000);
          return () => clearInterval(interval);
    },[])

    return (
        <>
        {todayGames.length > 0 && <h1>{formatGameDayString(gameDay)} </h1>}

        {todayGames.length > 0 && todayGames.map((game) => 
            <Link to={`/games/${game["gameId"]}`} className='link'>
                <div className='container-wrapper'>
                    <GameContainer game={game}/>
                </div>
            </Link>
        )}

        {/* <div style={{marginTop:"50px", width:"80vw", display: 'flex', flexWrap: 'wrap', gap: '12px'}}>
    
        {
            teamDetails.map((team) => {
                return (
                    <div style={{width: '200px',backgroundColor: `${team.hex}`}}>
                    <LogoFormatter tricode={team.tricode} size={200}/>
                    </div>
                )
            })
        }
        </div> */}
        </>
    )
}


export default Home;

