const axios = require('axios');
const {parseString} = require('xml2js');
var convert = require('xml-js');
const {parse} = require('rss-to-json');

const baseURL = 'https://api.medium.com';
const Authorization = 'Bearer 27db333ea114f51bcadc86f08470221121b93dee390c242168355f95816e3e58d';

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
    var rss = await parse('https://medium.com/feed/@fornaxcoin');
    const items = rss['items']
    const postsList = await convertXMLtoJSON(items);

    // const {data} = await client.get("/v1/me");
    // const userId = data["data"].id;
    // console.log("Response : ", userId);
    // const blogsList = await getBlogsList(userId);
    return res.json(postsList);
}

const convertXMLtoJSON = async (items) => {
    let blogList = [];
    let post = {
        coverPhoto: '',
        title: '',
        description: '',
        author: '',
        publishAt: '',
        link: '',
        content: ''
    }

    items.map(async (item, index) => {
        const currentDate = new Date(item.published);
        const month = getMonthName(currentDate.getMonth());
        const date = currentDate.getDate();
        const year = currentDate.getFullYear();
        post.coverPhoto = (item['content'].split("\"").filter(t => t.startsWith("https://cdn"))[0])
        post.publishAt = date + ' ' + month + ' ' + year;
        post.author = item['author'];
        post.title = item['title'];
        post.link = item.link;
        post.content = item.content;
        console.log("Published blogs list : ", item);
        blogList.push(post);
    })
    return blogList;
}

const getMonthName = (month) => {
    switch (month) {
        case 0:
            return "Jan";
        case 1:
            return "Feb";
        case 2:
            return "Mar";
        case 3:
            return "Apr";
        case 4:
            return "May";
        case 5:
            return "Jun";
        case 6:
            return "Jul";
        case 7:
            return "Aug";
        case 8:
            return "Sep";
        case 9:
            return "Oct";
        case 10:
            return "Nov";
        case 11:
            return "Dec";
    }

}
const getBlogsList = async (userId) => {
    console.log("User Id : ", userId);
    const {data} = await client.get(`/v1/users/${userId}/publications`)
    const blogsList = data["data"];
    getCompletePost(blogsList[0].url)
    return blogsList;
}


module.exports = {getMediumUser}


