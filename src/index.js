const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-rtwry.mongodb.net/omnistackweek?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

//Include app.use for express understand JSON
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);