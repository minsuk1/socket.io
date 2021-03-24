const express = require('express');
const nunjucks = require('nunjucks');
var cors = require('cors');
module.exports = function () {
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



    return app;
};