const axios = require('axios');

const baseURL = 'https://api.medium.com';
const Authorization = 'Bearer 225461bfe8ea7aeb6d5378137accd4433f93e8be2217b75eeee2ea13801e3fbe3';

const client = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json',
        Authorization,
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

const getMediumUser = async (req, res) => {
    const {data} = await client.get("/v1/me");
    const userId = data["data"].id;
    console.log("Response : ",userId);
    const blogsList = await getBlogsList(userId);
    return res.json({blogsList});
}

const getBlogsList = async (userId) => {
    console.log("User Id : ", userId);
    const {data} = await client.get(`/v1/users/${userId}/publications`)
    const blogsList = data["data"];
    console.log("Data : ", blogsList);
    return blogsList;

}

module.exports = {getMediumUser}


