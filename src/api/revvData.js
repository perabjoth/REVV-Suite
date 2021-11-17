import axios from 'axios';

export default axios.create({
    baseURL: "https://us-east-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/revv-suite-qdwss/service/revv-data/incoming_webhook/",
});
