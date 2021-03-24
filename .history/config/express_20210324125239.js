const express = require('express');
const nunjucks = require('nunjucks');
var cors = require('cors');
var fs = require('fs');
var socketio = require('socket.io');


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
    app.listen(port, function () {
        console.log('Express listening on port', port);
      });