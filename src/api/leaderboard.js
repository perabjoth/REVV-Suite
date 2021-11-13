import axios from 'axios';

export default axios.create({
    baseURL: "https://thingproxy.freeboard.io/fetch/https://namedleaderboard-api.revvracing.com/v2/GAME_SESSION_ALPHA_A_"
});
