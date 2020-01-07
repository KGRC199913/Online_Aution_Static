const mysql = require('mysql');
const util = require('util');

const pool = mysql.createPool({
    connectionLimit: 100,
<<<<<<< Updated upstream
    host: '127.0.0.1',
=======
    host: 'localhost',
>>>>>>> Stashed changes
    port: "3306",
    user: 'root',
    password: 'shint1001',
    database: 'qlbh'
});

const pool_query = util.promisify(pool.query).bind(pool);

module.exports = {
    load: sql => pool_query(sql),
    add: (entity, table) => pool_query(`insert into ${table} set ?`, entity),
    del: (condition, table) => pool_query(`delete from ${table} where ?`, condition),
    patch: (entity, condition, table) => pool_query(`update ${table} set ? where ?`, [entity, condition]),
};