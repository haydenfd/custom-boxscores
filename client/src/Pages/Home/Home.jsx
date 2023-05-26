import './Home.css'
import React, {useState, useEffect} from 'react'
import {server_url, endpoints} from '../../utils'
import axios from 'axios'
import {GameContainer} from '../../Components/gameContainer'
import { Link } from 'react-router-dom'


export const Home = () => {

    const fetchLandingData = async () => 
    {
        const URL = `${server_url}${endpoints.getTodayGames}`
    
        axios.get(URL).then((response) => 
        {
            setTodaysGames(response.data)

            const date = new Date(response.data[0]["gameEt"]);
            const options = {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            };
            setGameDate(date.toLocaleString('en-US', options))
        })
    }

    const [gameDate, setGameDate] = useState("")
    const [todaysGames, setTodaysGames] = useState([])

    const x = 12500
    
    useEffect(() => {

        fetchLandingData();

        const interval = setInterval(() => {
            console.log('Ran iter')
            fetchLandingData();
          }, x);
          return () => clearInterval(interval);
    }, [])


    return (
        <>
            {
                gameDate? (
                    <>
                        <h1>{gameDate} games</h1>
                        {todaysGames.length > 0 && todaysGames.map((game) => 
                        <Link to={`/games/${game["gameId"]}`} className='link'>
                    <div className='container-wrapper'>
                        <GameContainer game={game}/>
                    </div>
                </Link>
            )}
                    </>
                ) : <></>
            }
        </>
    )
}
