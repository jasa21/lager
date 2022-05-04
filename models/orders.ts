import config from "../config/config.json";

const orders = {
    getOrders: async function getOrders() {
        const response = await fetch(`${config.base_url}/orders?api_key=${config.api_key}`);
        const result = await response.json();

        return result.data;
    },
    pickOrder: async function pickOrder(order) {
        // TODO: Minska lagersaldo för de
        // orderrader som finns i ordern

        // TODO: Ändra status för ordern till packad
        await fetch(`${config.base_url}/orders?api_key=${config.api_key}`,
        {
            method: 'PUT',
            body: JSON.stringify({
                id: order.id,
                name: order.name,
                status_id: 200,
                api_key: config.api_key 
            })
        });
    }
};

export default orders;