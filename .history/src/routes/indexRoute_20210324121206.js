module.exports = function(app){
    const index = require('../controllers/indexController');

    //스토어홈
    app.get('/chat', index.default);

    app.post('/chat',  upload.single('fileUrl'), index.create);

};
