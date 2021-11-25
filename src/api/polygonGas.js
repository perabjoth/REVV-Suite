import axios from 'axios';

export default axios.create({
    baseURL: "https://gasstation-mainnet.matic.network/",
});
