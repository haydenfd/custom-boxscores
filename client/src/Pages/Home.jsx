import './Home.css'
import React, {useState, useEffect} from 'react'
import { SERVER_URL, GAMEDAYFORMATTER, ENDPOINTS } from '../utils'
import axios from 'axios'
import gameInfoContainer from '../Components/gameInfoContainer';

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
        const url = `${SERVER_URL}${ENDPOINTS.getTodayGames}`
    
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
        fetchGames();
        console.log(todayGames)
    
    },[])

    return (
        <>
        <h1>
        {GAMEDAYFORMATTER(gameDay)} 
        </h1>
        <p>{todayGames.length}</p>
        </>
    )
}


export default Home;

