const db = require('../utils/db');

module.exports = {
    all: _ => db.load('SELECT * FROM up_seller'),
    add: entity => db.add(entity, `up_seller`),
    remove: id => db.load(`DELETE FROM up_seller WHERE user_id = ${id}`),
    byUserId: uid => db.load(`SELECT * FROM up_seller WHERE user_id = ${uid}`),
};