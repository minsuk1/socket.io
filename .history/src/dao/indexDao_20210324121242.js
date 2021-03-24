const { pool } = require("../../config/database");

// index
async function defaultDao() {
  const connection = await pool.getConnection(async (conn) => conn);
  const selectEmailQuery = `
 select * from Board;`;

  const [rows] = await connection.query(selectEmailQuery)
  connection.release();

  return rows;
}


async function createDao(insertVideosInfoParams) {
    const connection = await pool.getConnection(async (conn) => conn);
    const insertVideosInfoQuery = `
          INSERT INTO ProductComments( content, productId, rateDurability, 
            ratePrice, rateDesign, rateDelivery, fileUrl, userId)
          VALUES (?, ?, ?, ?, ?, ?, ?, ?);
      `;
    const createDaoRow = await connection.query(
        insertVideosInfoQuery,
        insertVideosInfoParams
    );
    connection.release();
    return createDaoRow;
  }


  module.exports = {
    defaultDao, createDao
  };
  