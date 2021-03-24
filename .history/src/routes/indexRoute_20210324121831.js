module.exports = function(app){
    const index = require('../controllers/indexController');
    const upload = require('../../multer.js')

    //스토어홈
    app.get('/chat', index.default);

    app.post('/chat',  upload.single('content'), index.create);



    // app.post('/', upload.single('photos', 4), (req, res) => {

    //     console.log(req.files); 
    //     console.log(req.files[0]); // 파일의 인덱스로 접근
    //   // 위 single에서와 다르게 req.file이 아닌 req.files에로 넘어옵니다. 
    
    // })

};
