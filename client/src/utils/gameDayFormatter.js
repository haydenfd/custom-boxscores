
const months = [
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


const formatGameDayString = (gameDay) => 
{
    return `${months[parseInt(gameDay.month)]} ${gameDay.date}, ${gameDay.year} games`

}

export {
    formatGameDayString
}