const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
    async index(request, response){
        const devs = await Dev.find();

        return response.json(devs);
    },

    //remove the => and create a name for the functions because now is a "named function" instead an "arrow functions"
    //abstraction
    async store (request, response){
        //console.log(request.body)
    
        //Disruption getting github_username    
        const { github_username, techs, latitude, longitude } = request.body;
        
        //let allow to overlap the variable if dev don't exist create a new one
        let dev = await Dev.findOne({ github_username });

        if (!dev){
            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`)
        
            //console.log(apiResponse.data);
        
            //Disruption way
            const { name = login, avatar_url, bio } = apiResponse.data;
        
            //Hard way
            // if (!name){ name = apiResponse.data.login;} 
        
            const techsarray = parseStringAsArray(techs);

            console.log(techsarray);
            
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
        }

        return response.json(dev);
    },

    //Exercises
    //async update(){},
    //async destroy(){},
};