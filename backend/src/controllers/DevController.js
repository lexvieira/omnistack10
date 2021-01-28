const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');
const { findConnections, sendMessage } = require('../websocket');

module.exports = {
    async index(request, response){
        const devs = await Dev.find();
        return response.json(devs);
    },

    //remove the => and create a name for the functions because now is a "named function" instead an "arrow functions"
    //abstraction
    async store (request, response){  
        //Disruption getting github_username    
        const { github_username, techs, latitude, longitude } = request.body;
        
        //let allow to overlap the variable if dev don't exist create a new one
        let dev = await Dev.findOne({ github_username });

        if (!dev){
            //Get User Data from GitHub
            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`)
          
            //Disruption way
            const { name = login, avatar_url, bio } = apiResponse.data;
        
            //Hard way
            // if (!name){ name = apiResponse.data.login;} 
        
            const techsarray = parseStringAsArray(techs);

            //attempt to don't let the business rules inside the controllers
            const location = {
                type: 'Point',
                coordinates: [longitude,latitude]
            };
        
            dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsarray,
                location,
            })
            
            //Filter WebSocket Connections with 10km of Distance
            //And match at least one Technology
            const sendSocketMessageTo = findConnections(
                { latitude, longitude },
                techsarray, 
            )

            sendMessage(sendSocketMessageTo, 'new-dev', dev);
        }

        return response.json(dev);
    },

    //Exercises
    //async update(){},
    //async destroy(){},
};