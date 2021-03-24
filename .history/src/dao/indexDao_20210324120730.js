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

  module.exports = {
    defaultDao
  };
  