const express = require("express");
const { ExpressPeerServer } = require("peer");
require('dotenv').config();

const app = express();
const server = app.listen(process.env.SERVER_APP_PORT);

app.get("/", (req, res, next) => {
    res.send("App running correctly");
});

const peerServer = ExpressPeerServer(server, {
	path: "/myapp",
    corsOptions: {
        origin: "*",
        optionsSuccessStatus: 200,
    },
});

app.use("/peerjs", peerServer);

console.log(`Server running on http://localhost:${process.env.SERVER_APP_PORT}`);