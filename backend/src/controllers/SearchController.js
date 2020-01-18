const Dev = require('../models/Dev')
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
    async index(request, response){
        console.log(request.query);
        //Search all devs in a Radio 10k,
        //Filter Technologies

        const { latitude, longitude, techs} = request.query;

        const techsarray = parseStringAsArray(techs);

        console.log(techsarray);

        const devs = await Dev.find({
            techs: {
                $in: techsarray, 
            },
            location:{
                $near: {
                    $geometry:{
                        type: 'Point',
                        coordinates: [longitude, latitude]
                    },
                    $maxDistance: 10000,
                },
            },
        })

        console.log(techsarray);

        return response.json(devs);

    } 
}