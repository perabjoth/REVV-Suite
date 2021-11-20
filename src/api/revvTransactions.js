import axios from 'axios';

export default axios.create({
    baseURL: "https://api.polygonscan.com/api?module=account&action=tokentx&contractaddress=0x70c006878a5a50ed185ac4c87d837633923de296&sort=desc&apikey=NW6MQ4UW5JIEVBH61JW4AK3WY2Q27ZZIM7"
});