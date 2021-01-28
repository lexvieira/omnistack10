const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const routes = require('./routes');
const { setupWebsocket } = require('./websocket');

const app = express();
const server = http.Server(app);

setupWebsocket(server);

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-rtwry.mongodb.net/omnistackweek?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

//Create static Routes
app.use('/static', express.static(__dirname + '/public'));

//Include app.use for express understand JSON
app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);