import { get } from '../hooks/clientApi';

const Api = {
    getClients: async () => {
        const json = await get('/client');
        return json.data.client;
    },
};

export default () => Api;