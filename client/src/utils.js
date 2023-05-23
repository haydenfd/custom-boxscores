const SERVER_URL = 'http://127.0.0.1:8000'

const ENDPOINTS = 
{
    getTodayGames: '/get-today-games',
    getGameById: '/games/',
}

const MONTHS = [
    "buffer",
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
]


const GAMEDAYFORMATTER = (gameDay) => 
{
    return `${MONTHS[parseInt(gameDay.month)]} ${gameDay.date}, ${gameDay.year} games`

}

const MAPTRICODETOICON = (tricodeString) => 
{
    switch (tricodeString) 
    {
        case "BOS":
            return 0
        case "DEN":
            return 1
        case "LAL":
            return 2
        case "MIA":
            return 3
    }
}

let STATS_PREFERENCES = [
    "MINS",
    "PTS",
    "FG",
    "FG %",
    "FT",
    "FT %",
    "3PT", 
    "3PT %",
    "AST",
    "REB",
    "OREB",
    "DREB",
    "STL",
    "BLK",
    "TO",
    "PF",
    "+/-"
]

export {
    SERVER_URL,
    GAMEDAYFORMATTER,
    ENDPOINTS,
    MAPTRICODETOICON,
    STATS_PREFERENCES
}