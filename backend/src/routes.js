const { Router, request, response } = require('express');
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

//See about to convert to ES6 Module

const routes = Router();

//Routes in plural
//Start Route
routes.get('/', (request, response) => {
    console.log(request.query);
    return response.send('Api Access, access the main page on <a href="http://localhost">http://localhost</a>');
    //return response.json('Api Access Json');
});


routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

routes.get('/search', SearchController.index)

module.exports = routes;