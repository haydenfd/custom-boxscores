from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from nba_api.stats.endpoints import playercareerstats
from nba_api.live.nba.endpoints import scoreboard, boxscore
from fastapi.encoders import jsonable_encoder
from nba_api.stats.library.parameters import LeagueID


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

@app.get("/games/{game_id}")
async def get_game_by_id(game_id:str):
    game = boxscore.BoxScore(game_id)
    game = game.get_dict()
    return jsonable_encoder(game)

@app.get("/")
def read_root():
    career = playercareerstats.PlayerCareerStats(player_id='203999') 
    print(career.get_data_frames()[0])



