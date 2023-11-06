import { get, post, destroy, put } from '../hooks/clientApi';

const Api = {
    getClients: async () => {
        const json = await get('/client');
        return json.data;
    },
    getClient: async (id: number) => {
        const json = await get(`/client/${id}`);
        console.log(json);
        return json.data;
    },
    storeClient: async (payload: any) => {
        const json = await post('/client', payload);
        return json;
    },
    deleteClient: async (payload: any) => {
        const json = await destroy('/client', payload);
        return json;
    },
    updateClient: async (payload: any, id: any) => {
        const json = await put(`/client/${id}`, payload);
        return json;
    },
};

export default () => Api;