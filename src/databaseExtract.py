from pymongo import MongoClient
import requests
import os
import ssl
import json
from dotenv import load_dotenv
load_dotenv()

client = MongoClient(os.environ.get("mongo-db"), ssl_cert_reqs=ssl.CERT_NONE)
db = client['revv']

events = "https://events-api.revvracing.com/"
session = "https://game-session-api.revvracing.com/v1.0/game/count/"
leaderBoard = "https://namedleaderboard-api.revvracing.com/v2/"
leaderBoardSuffix = "?limit=100000&offset=0"
eventData = requests.get(events)
eventData = eventData.json()


def stringify_json(jsonData):
    return json.loads(json.dumps(jsonData), parse_int=str, parse_float=str)


mongoEvents = db['events']
mongoLeaderboard = db['leaderboards']
mongoSession = db['sessions']

mongoEvents.delete_many({})
mongoEvents.insert_many(stringify_json(eventData),
                        ordered=False, bypass_document_validation=True)

leaderBoardArray = []


def get_Leaderboard(leaderboardName):
    if(mongoLeaderboard.count_documents({'leaderboard_id': leaderboardName}) == 0):
        leaderboardData = requests.get(
            leaderBoard+leaderboardName+leaderBoardSuffix)
        leaderboardData = leaderboardData.json()
        print(leaderboardName+' retrieved data')
        leaderboardData['leaderboard_id'] = leaderboardName
        print(leaderboardName)
        leaderBoardArray.append(leaderboardData)


sessionArray = []

for event in eventData:
    eventID = event.get('id').upper()
    splitLeaderboard = event.get('data').get('splitLeaderboard')
    leaderboardTitle = "GAME_SESSION_ALPHA_A_" + eventID
    if(event.get('active')):
        break

    if(splitLeaderboard):
        ownerLeaderboard = leaderboardTitle + "_SPLIT_OWNER"
        get_Leaderboard(ownerLeaderboard)
        hiredLeaderboard = leaderboardTitle + "_SPLIT_HIRED"
        get_Leaderboard(hiredLeaderboard)
    else:
        get_Leaderboard(leaderboardTitle)

    if(mongoSession.count_documents({'session_id': eventID}) == 0):
        print(eventID)
        sessionData = requests.get(session+eventID)
        sessionData = sessionData.json()
        sessionData['session_id'] = eventID
        if(sessionData['total'] > 0):
            sessionArray.append(sessionData)

mongoLeaderboard.insert_many(stringify_json(
    leaderBoardArray), ordered=False, bypass_document_validation=True)
mongoSession.insert_many(stringify_json(sessionArray),
                         ordered=False, bypass_document_validation=True)
