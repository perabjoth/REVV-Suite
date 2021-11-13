from genericpath import exists
import requests
import os.path
import json

events = "https://events-api.revvracing.com/"
session = "https://game-session-api.revvracing.com/v1.0/game/count/"
leaderBoard = "https://namedleaderboard-api.revvracing.com/v2/"
leaderBoardSuffix = "?limit=100000&offset=0"
eventData = requests.get(events)
eventData = eventData.json()
with open(os.path.dirname(__file__)+'\\data\\events.json', 'w') as f:
    json.dump(eventData, f)


def get_Leaderboard(leaderboardName):
    leaderboardDataPath = os.path.dirname(
        __file__)+'\\data\\leaderboardData\\'+leaderboardName+'.json'
    if(not exists(leaderboardDataPath)):
        leaderboardData = requests.get(
            leaderBoard+leaderboardName+leaderBoardSuffix)
        leaderboardData = leaderboardData.json()
        with open(leaderboardDataPath, 'w') as l:
            json.dump(leaderboardData, l)


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

    sessionDataPath = os.path.dirname(__file__)+'\\data\\sessionData\\'+eventID+'.json'
    if(not exists(sessionDataPath)):
        sessionData = requests.get(session+eventID)
        sessionData = sessionData.json()
        if(sessionData['total'] > 0):
            with open(sessionDataPath, 'w') as s:
                json.dump(sessionData,s)
