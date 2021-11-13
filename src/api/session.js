import axios from 'axios';

export default axios.create({
    baseURL: "https://thingproxy.freeboard.io/fetch/https://game-session-api.revvracing.com/v1.0/game/count/"
});
