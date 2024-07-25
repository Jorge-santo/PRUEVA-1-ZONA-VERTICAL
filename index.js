// paquetes npm
const http = require ('http');
const path = require ('path');

const express = require ('express');
const socketio = require ('socket.io');

// servidor
const app = express();
const server = http.createServer(app);
const io = socketio.listen(server);

//settings
app.set('port', process.start.PORT || 3000);

 require('./sockets')(io); 

// archivos estaticos
app.use(express.static(path.join(_dirname,'CHAT')));
 

server.listen(app.get ('port'), () => 
{console.log('server on port 5500', app.get('port'));});