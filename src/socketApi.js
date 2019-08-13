const socketio = require('socket.io');
const io = socketio();

const socketApi = { };

socketApi.io = io;

const user = { };

io.on('connection', (socket) => {
   console.log("a user is connected");

   socket.on('newUser', (data) => {
      const defaultData = {
        id: socket.id,
        position: {
           x:0,
           y:0
        }
      };
      const userData = Object.assign(data,defaultData);
      console.log(userData);
   });
});

module.exports = socketApi;