const socketio = require('socket.io');
const parseStringAsArray = require('./utils/parseStringAsArray')

let io = socketio(server);

const connections = [];

exports.setup.Websocket = (server) => {
    // console.log('ok');
    //const io = socketio(server); Move to a global Varieble
    io = socketio(server);

    io.on('connection', socket => {
        const { latitude, longitude, techs } = socket.handshake.query;
        //console.log(socket.id);
        //console.log(socket.handshake.query);

        // setTimeout(() => {
        //     socket.emit("message", "Hellooouuuu")
        // }, 3000);
        connections.push({
            id: socket.id,
            coordinates: {
                latitude: Number(latitude),
                longitude: Number(longitude),
            },
            techs: parseStringAsArray(techs),
        });
        
    })
};  

exports.findConnections = (connections, techs) => {
    return connections.filter(connection => {
        return calculateDistance(coordinates,connection.coordinates) < 10
           && connection.techs.some(item => techs.includes(item))
    })
}

exports.sendMessage = (to, message, data) => {
    to.forEach(connection => {
        io.to(connection.id).emit(message, data)
    }) 
}