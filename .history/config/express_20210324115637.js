const express = require('express');
var cors = require('cors');
module.exports = function () {
    const app = express();

    app.use(express.json());

    app.use(express.urlencoded({extended: true}));

    //multer
    app.use('/uploads', express.static('uploads'));

    app.use(methodOverride());

    app.use(cors());


    require('../src/app/routes/indexRoute')(app);



    return app;
};