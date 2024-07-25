//resivir y enviar datos
module.export = funcion (io)
{
    //usuarios conectados
    let $nickName = [];

io.on('connection', socket => 
    {console.log('new user connected');

        socket.on('new user', (data, cb) => 
            {console.log(data);
             if (nickNames.indexOf(data) != -1)
                {cb(false);}
            else {cb(true);
        socket.nickName = data;
        nickNames.push(socket.nickName);}
    });

        socket.on('send message', function (data) 
    {io.sockets.emit('new message', data);});
    });
 }