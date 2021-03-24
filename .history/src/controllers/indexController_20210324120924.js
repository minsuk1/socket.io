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

