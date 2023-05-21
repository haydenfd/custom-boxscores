from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from nba_api.stats.endpoints import playercareerstats
from nba_api.live.nba.endpoints import scoreboard
from fastapi.encoders import jsonable_encoder


app = FastAPI()

origins = ['http://localhost:3000']

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/get-today-games")
async def get_today_games():
    board = scoreboard.ScoreBoard()
    games = board.games.get_dict()
    return jsonable_encoder(games)


@app.get("/")
def read_root():
    career = playercareerstats.PlayerCareerStats(player_id='203999') 
    print(career.get_data_frames()[0])



