from pymongo import MongoClient
import requests
from datetime import datetime
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
mongoWalletPositions = db['walletPositions']
mongoSession = db['sessions']

mongoEvents.delete_many({})
mongoEvents.insert_many(stringify_json(eventData),
                        ordered=False, bypass_document_validation=True)

leaderBoardArray = []
walletPositions = []


def get_Leaderboard(leaderboardName):
    print(leaderboardName)
    if(mongoLeaderboard.count_documents({'leaderboard_id': leaderboardName}) == 0):
        leaderboardData = requests.get(
            leaderBoard+leaderboardName+leaderBoardSuffix)
        leaderboardData = leaderboardData.json()
        currentWalletPositions = leaderboardData['entries']
        
        if(len(currentWalletPositions)==0):
            return

        for position in currentWalletPositions:
            position['leaderboard_id'] = leaderboardName
            position['wallet'] = position['wallet'].upper()

        walletPositions.extend(currentWalletPositions)
        leaderboardData['leaderboard_id'] = leaderboardName

        leaderBoardArray.append({'leaderboard_id': leaderboardName})


sessionArray = []
for event in eventData:
    eventID = event.get('id').upper()
    splitLeaderboard = event.get('data').get('splitLeaderboard')
    leaderboardTitle = "GAME_SESSION_ALPHA_A_" + eventID
    endTimeStamp = event.get('endTimestamp')
    endTimeStamp/=1000

    if(endTimeStamp >= 32536799999 or datetime.fromtimestamp(endTimeStamp) > datetime.now()):
        continue
    
    if(event.get('type').upper() == 'PRACTICE'):
        continue

    if(event.get('active')):
        print(event.get('type').upper())
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

if(len(leaderBoardArray) > 0):
    mongoLeaderboard.insert_many(stringify_json(
        leaderBoardArray), ordered=False, bypass_document_validation=True)
if(len(sessionArray) > 0):
    mongoSession.insert_many(stringify_json(sessionArray),
                             ordered=False, bypass_document_validation=True)
if(len(walletPositions) > 0):
    mongoWalletPositions.insert_many(stringify_json(walletPositions),
                                     ordered=False, bypass_document_validation=True)
