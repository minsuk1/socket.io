module.exports = function(app){
    const index = require('../controllers/indexController');
    const upload = require('../../multer.js')

    //스토어홈
    app.get('/chat', index.default);

    app.post('/chat',  upload.single('content'), index.create);



    app.get('/', (req,res) => {
        res.render('chat/index.html');
    });
     

    
    app.post('/image', upload.single("image"), function(req, res, next) {

        try {
         
          // var file = './uploads' + req.file.filename;
          console.log(req.file)
      
          var data = req.file;
          res.send(data.location);
      
      
        } catch (error) {
          console.error(error);
          next(error);
        }
      });
};
