const connect = require("./dbConnection");

const path = require('path');
const express = require("express");
const cors = require("cors");
const { getNonce, signatureAuthentication, send_transaction, get_balance, get_balance_all } = require("./controller");
const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/express/index.html'));
});

app.post('/getNonce', getNonce);
// meta-mask wallet connection signature authentication and return token as response
app.post('/signatureAuthentication', signatureAuthentication);

app.post('/send_transaction', send_transaction);

app.post('/get_balance', get_balance);

app.get('/get_balance_all', get_balance_all);

(async () => {
    console.log('process.env.MONGODB_URI = ', process.env.MONGODB_URI)
    console.log("connecting DB");
    const isConnected = await connect();
    if (isConnected) {
        // app.listen(4242, () => console.log("Node server listening on http://localhost:4242"));
        app.listen(4242, () => {
            console.log(
                "🚀 App is running at http://localhost:%d in %s mode",
                4242,
                "dev"
            );
            console.log("Press CTRL-C to stop\n");
        });
    }
})();




