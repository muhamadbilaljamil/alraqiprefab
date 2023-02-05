const axios = require('axios');

const client = axios.create({
    baseURL: "https://presale.fornax.network",
    headers: {
        'Content-Type': 'application/json',
    },
});

// Add a response interceptor
client.interceptors.response.use(
    function (response) {
        //* returning response
        return response;
    },
    function (error) {
        //* handling response error
        if (error.response) {
            // Request made and server responded
            console.log(error.response.data);
            console.log(error.response.status);
            // console.log(error.response.headers);
        } else if (error.request) {
            // The request was made but no response was received
            console.log('Request error = ', error.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Unknown Error', error.message);
        }

        return Promise.reject(error);
    }
);


const getNonce = async (wallet_address) => {
    const response = await client.post("/getNonce", {
        wallet_address
    });
    return response.data;
}

const signatureAuthentication = async (payload) => {
    const response = await client.post("/signatureAuthentication", payload);
    return response.data;
}

const send_transaction = async (payload) => {
    const response = await client.post("/send_transaction", payload);
    return response.data;
}

const get_balance = async (payload) => {
    const response = await client.post("/get_balance", payload);
    return response.data;
}


export { getNonce, signatureAuthentication, send_transaction, get_balance }


