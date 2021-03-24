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
    

    if (req.file){
        req.body.content = req.file.filename
    }else{
        req.body.content = ''
    }

    
    console.log(req.body.fileUrl)
    console.log(fileUrl)
    //이미지 업로드
    //req.body.fileUrl =  req.file.filename 

    insertVideosInfoParams=[content, id, rateDurability, ratePrice, 
                    rateDesign, rateDelivery, req.body.fileUrl, user_id]

    insertVideosRows = await commentDao.createDao(insertVideosInfoParams)
    return res.json({
        isSuccess: true,
        code: 1000,
        message: "댓글 추가 성공"
    });
    }
    catch(err){
        logger.error(`App - SignUp Query error\n: ${err.message}`);
        return res.status(500).send(`Error: ${err.message}`);
    }
};