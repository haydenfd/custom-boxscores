import './Home.css'
import React, {useState, useEffect} from 'react'
import {server_url, endpoints} from '../../utils'
import { formatGameDayString } from '../../utils'
import axios from 'axios'
import {GameContainer} from '../../Components/gameContainer'
import { Link } from 'react-router-dom'

export const Home = () => 
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
            console.log(data)
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
          }, 5000);
          return () => clearInterval(interval);
    },[])

    return (
        <>
        {
            todayGames.length == 0 ?  (
                <>
                    <h1>{formatGameDayString(gameDay)} </h1>
                    {todayGames.length > 0 && todayGames.map((game) => 
                    <Link to={`/games/${game["gameId"]}`} className='link'>
                <div className='container-wrapper'>
                    <GameContainer game={game}/>
                </div>
            </Link>
        )}
                </>
            ):(
            <div className='no-games-container'>
                    <h1>{formatGameDayString(gameDay)} </h1>
                    <p className='no-games-p'>No games going on today. Maybe go outside and touch some grass?</p>
            </div>
            )
        }
        </>
    )
}

