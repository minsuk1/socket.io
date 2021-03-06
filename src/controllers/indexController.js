const {pool} = require('../../config/database');

const indexDao = require('../dao/indexDao');

exports.default = async function (req, res) {
    try {
        const connection = await pool.getConnection(async conn => conn);
        try {
            const rows = await indexDao.defaultDao();

         
            return res.json({
                data:rows
            });
        } catch (err) {
            
            connection.release();
            return false;
        }
    } catch (err) {
        
        return false;
    }
};



exports.create = async function (req, res) {
    try{
  
    const {
        age,  titles, content
    } = req.body;
    

    console.log(req.file)


    if (req.file){
        req.body.content = req.file.originalname
    }else{
        req.body.content = ''
    }

    
    console.log(req.body.content)
    //console.log(fileUrl)
    //이미지 업로드
    //req.body.fileUrl =  req.file.filename 

    insertVideosInfoParams=[age, titles, req.body.content]

    insertVideosRows = await indexDao.createDao(insertVideosInfoParams)
    return res.json({
        isSuccess: true,
        code: 1000,
        message: "댓글 추가 성공"
    });
    }
    catch(err){
     
        return res.status(500).send(`Error: ${err.message}`);
    }
};