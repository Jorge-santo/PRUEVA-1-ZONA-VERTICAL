//jquery
$(function () 
{
const socket = io(); 

// elementos de la interface
const $messageForm = $('#message-form');
const $messageBox = $('#message');
const $chat = $('#chat');

//elementos de nick
const $nickForm = $('#nickForm');
const $nickError = $('#nickError');
const $nickName = $('#nickName');

const $users = $('#userNames');

$nickForm.submit (e => 
    {
        e.preventDefault();
        socket.emit('new user', $nickName.val(), data =>
        {});
    });

//eventos
$messageForm.submit (e => 
    {e.preventDefault();
        socket.emit('send message', $messageBox.val());
        $messageBox.val('');
    });

    socket.on('new message', function (data)
    {$chat.append (data + '<br/>');});

})

 