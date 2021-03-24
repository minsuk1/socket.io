const express = require('express');
const nunjucks = require('nunjucks');
var cors = require('cors');
var fs = require('fs');
var socketio = require('socket.io');
const upload = require('../multer.js')


    const app = express();


    nunjucks.configure('template', {
        autoescape: true,
        express: app
      });
    

    app.use(express.json());

    app.use(express.urlencoded({extended: true}));

    //multer
    app.use('/uploads', express.static('uploads'));


    app.use(cors());


    
    require('../src/routes/indexRoute')(app);



     const port = 3000;
    // app.listen(port, function () {
    //     console.log('Express listening on port', port);
    //   });


      
      const server = app.listen( port, function(){
        console.log('Express listening on port', port);
    });
    
    const listen = require('socket.io');
    const io = listen(server);
    io.on('connection', (socket) => { 
        socket.on('client message', (data) => {
            io.emit('server message', data.message);
        });
    });



const listen = require('socket.io');
var io = listen(server);
io.sockets.on('connection', (socket) => {
  // message 
  var roomName = null;

  socket.on('join', (data) => {
    roomName = data;
    socket.join(data);
  })

  socket.on('message', (data) => {
    io.sockets.in(roomName).emit('message', data);
    console.log(data);
  });

  socket.on('image', (data)=>{
    io.sockets.in(roomName).emit('image', data);
    console.log(data);
  })
  
});
